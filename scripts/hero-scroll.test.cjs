const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const manifest = require('../public/hero-scroll-v1/manifest.json');

function harness({ reduced = false, saveData = false } = {}) {
  let effect, cleanup, change, intersection;
  let nextId = 0, value = 0, live = 0, peak = 0;
  const requests = [], drawings = [], queue = new Map();
  const canvas = { style: {}, getContext: () => ({ drawImage: image => drawings.push(image.frame) }) };
  const progress = { get: () => value, on: (_, callback) => { change = callback; return () => {}; } };
  const sandbox = {
    exports: {}, AbortController, Map, Set, Infinity,
    require: name => {
      if (name === 'react') return { useRef: () => ({ current: canvas }), useEffect: callback => { effect = callback; } };
      if (name === 'react/jsx-runtime') return { jsx: () => null, jsxs: () => null };
      if (name.includes('manifest')) return manifest;
      throw Error(name);
    },
    window: { matchMedia: () => ({ matches: reduced, addEventListener() {}, removeEventListener() {} }) },
    navigator: { connection: { saveData } },
    document: { hidden: false, addEventListener() {}, removeEventListener() {} },
    IntersectionObserver: class { constructor(callback) { intersection = callback; } observe() {} disconnect() {} },
    requestAnimationFrame: callback => { queue.set(++nextId, callback); return nextId; },
    cancelAnimationFrame: id => queue.delete(id),
    fetch: async url => {
      const frame = Number(url.match(/\/(\d+)\.webp$/)[1]);
      requests.push(frame);
      return { ok: true, blob: async () => ({ frame }) };
    },
    createImageBitmap: async blob => {
      live++; peak = Math.max(peak, live);
      return { frame: blob.frame, close: () => live-- };
    },
  };
  const code = ts.transpileModule(fs.readFileSync('components/scroll-parallax-canvas.tsx', 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(code, sandbox);
  sandbox.exports.ScrollParallaxCanvas({ progress });
  cleanup = effect();
  return {
    requests, drawings,
    scroll: position => { value = position; change(position); },
    visibility: visible => intersection([{ isIntersecting: visible }]),
    async flush(count = 300) {
      for (let i = 0; i < count; i++) {
        const callbacks = [...queue.values()]; queue.clear();
        callbacks.forEach(callback => callback());
        for (let j = 0; j < 6; j++) await Promise.resolve();
      }
    },
    cleanup, live: () => live, peak: () => peak,
  };
}

test('scroll jumps reach both endpoints, reuse downloads and release bounded decoded memory', async () => {
  const h = harness();
  await h.flush();
  assert.equal(h.drawings.at(-1), 1);
  h.scroll(1); await h.flush();
  assert.equal(h.drawings.at(-1), manifest.frameCount);
  h.scroll(0.5); await h.flush();
  assert.equal(h.drawings.at(-1), 120);
  h.scroll(0); await h.flush();
  assert.equal(h.drawings.at(-1), 1);
  assert.equal(h.requests.length, new Set(h.requests).size);
  assert.ok(h.live() <= 32);
  assert.ok(h.peak() <= 34);
  h.cleanup(); assert.equal(h.live(), 0);
});

test('offscreen work stops and resumes at the latest scroll position', async () => {
  const h = harness();
  h.visibility(false); h.scroll(1); await h.flush();
  assert.equal(h.requests.length, 0);
  h.visibility(true); await h.flush();
  assert.equal(h.requests[0], manifest.frameCount);
  assert.equal(h.drawings.at(-1), manifest.frameCount);
  h.cleanup();
});

for (const option of ['reduced', 'saveData']) {
  test(`${option} loads only the still frame`, async () => {
    const h = harness({ [option]: true });
    h.scroll(1); await h.flush();
    assert.deepEqual(h.requests, [1]);
    assert.equal(h.drawings.at(-1), 1);
    h.cleanup();
  });
}

