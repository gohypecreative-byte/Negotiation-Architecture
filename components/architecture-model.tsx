"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { Expand, MoveHorizontal, RotateCcw, Shrink } from "lucide-react";

type ModelOptions = { active: number; reduced: boolean; playing: boolean; expanded: boolean };
type ModelController = { update: (options: ModelOptions) => void; reset: () => void; dispose: () => void };
const names = ["Assess", "Align", "Architect", "Activate", "Accelerate"];
const captions = ["Read the terrain.", "Bring interests into alignment.", "Give the plan its structure.", "Put the structure to work.", "Build on what you have learned."];

function createModel(host: HTMLDivElement, onInteract: () => void, onFailure: () => void): ModelController {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x102035, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "Interactive architectural model. Drag horizontally or use arrow keys to rotate. Press Home to reset.");
  host.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 60);
  camera.position.set(6.4, 5, 8);
  camera.lookAt(0, .1, 0);
  const room = new RoomEnvironment();
  const generator = new THREE.PMREMGenerator(renderer);
  const environment = generator.fromScene(room, .04);
  scene.environment = environment.texture;
  room.dispose();
  generator.dispose();
  scene.add(new THREE.HemisphereLight(0xe9f0ff, 0x37405b, 2));
  const key = new THREE.DirectionalLight(0xffe7c0, 4);
  key.position.set(3, 7, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: .5, far: 20 });
  key.shadow.bias = -.0005;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xadc9ff, 3);
  rim.position.set(-4, 2, -4);
  scene.add(rim);

  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.ShadowMaterial({ opacity: .3 }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.72;
  shadow.receiveShadow = true;
  scene.add(shadow);
  const grid = new THREE.GridHelper(8, 20, 0x947747, 0x67809a);
  grid.position.y = -1.71;
  grid.material.transparent = true;
  grid.material.opacity = .13;
  scene.add(grid);
  const circlePoints = Array.from({ length: 100 }, (_, index) => new THREE.Vector3(Math.cos(index / 100 * Math.PI * 2) * 2.8, -1.7, Math.sin(index / 100 * Math.PI * 2) * 2.8));
  const circle = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(circlePoints), new THREE.LineBasicMaterial({ color: 0xd3a75e, transparent: true, opacity: .3 }));
  scene.add(circle);

  const sculpture = new THREE.Group();
  scene.add(sculpture);
  const brass = new THREE.MeshStandardMaterial({ color: 0xc69a52, metalness: .85, roughness: .24 });
  const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x26394e, metalness: .35, roughness: .35 });
  const base = new THREE.Mesh(new RoundedBoxGeometry(3.4, .18, 3.1, 3, .06), baseMaterial);
  base.position.y = -1.55;
  base.castShadow = base.receiveShadow = true;
  sculpture.add(base);
  const baseTrim = new THREE.Mesh(new RoundedBoxGeometry(3.43, .025, 3.13, 2, .01), brass);
  baseTrim.position.y = -1.47;
  sculpture.add(baseTrim);

  const beamGeometry = new RoundedBoxGeometry(2.9, .18, .25, 3, .045);
  const sideGeometry = new RoundedBoxGeometry(.25, .18, 2.25, 3, .045);
  const accentGeometry = new RoundedBoxGeometry(2.91, .022, .025, 2, .008);
  const postGeometry = new THREE.CylinderGeometry(.025, .025, .42, 10);
  const floors = names.map((_, index) => {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0x35465c, metalness: .55, roughness: .3 });
    for (const z of [-1.25, 1.25]) {
      const beam = new THREE.Mesh(beamGeometry, material);
      beam.position.z = z;
      beam.castShadow = beam.receiveShadow = true;
      group.add(beam);
      const trim = new THREE.Mesh(accentGeometry, brass);
      trim.position.set(0, .06, z + Math.sign(z) * .126);
      group.add(trim);
    }
    for (const x of [-1.325, 1.325]) {
      const side = new THREE.Mesh(sideGeometry, material);
      side.position.x = x;
      side.castShadow = side.receiveShadow = true;
      group.add(side);
    }
    const posts = new THREE.Group();
    for (const x of [-1.3, 1.3]) for (const z of [-1.2, 1.2]) {
      const post = new THREE.Mesh(postGeometry, brass);
      post.position.set(x, -.29, z);
      post.castShadow = true;
      posts.add(post);
    }
    group.add(posts);
    group.position.y = -1.12 + index * .6;
    sculpture.add(group);
    return { group, material, posts };
  });

  let options: ModelOptions = { active: 0, reduced: true, playing: false, expanded: false };
  let angle = .12;
  let tilt = 0;
  let frame = 0;
  let lastTime = 0;
  let visible = false;
  let disposed = false;
  let dirty = true;
  let pointer: { id: number; x: number; y: number; angle: number; tilt: number } | null = null;
  const targetColor = new THREE.Color();
  const ivory = new THREE.Color(0xd8d5ca);
  const gold = new THREE.Color(0xc59a50);
  const navy = new THREE.Color(0x34495f);
  const targetPosition = new THREE.Vector3();

  function requestRender() {
    dirty = true;
    if (!frame && visible && !document.hidden && !disposed) frame = requestAnimationFrame(render);
  }
  function render(now: number) {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    const dt = Math.min((now - (lastTime || now)) / 1000, .05);
    lastTime = now;
    const ease = options.reduced ? 1 : 1 - Math.exp(-dt * 5);
    let moving = false;
    if (options.playing && !options.reduced && !pointer) angle += dt * .035;
    sculpture.rotation.y += (angle - sculpture.rotation.y) * ease;
    sculpture.rotation.x += (tilt - sculpture.rotation.x) * ease;
    moving ||= Math.abs(angle - sculpture.rotation.y) + Math.abs(tilt - sculpture.rotation.x) > .0001;
    floors.forEach((floor, index) => {
      const assembled = index <= options.active && !options.expanded;
      const x = assembled ? 0 : Math.sin(index * 2.4) * .65;
      const z = assembled ? 0 : Math.cos(index * 2.4) * .35;
      const y = -1.12 + index * .6 + (options.expanded ? index * .22 : assembled ? 0 : .16);
      targetPosition.set(x, y, z);
      floor.group.position.lerp(targetPosition, ease);
      const rotation = assembled ? 0 : (index % 2 === 0 ? 1 : -1) * (.18 + index * .085);
      floor.group.rotation.y += (rotation - floor.group.rotation.y) * ease;
      targetColor.copy(index === options.active ? gold : index < options.active ? ivory : navy);
      floor.material.color.lerp(targetColor, ease);
      const postScale = assembled ? 1 : .001;
      floor.posts.scale.y += (postScale - floor.posts.scale.y) * ease;
      moving ||= floor.group.position.distanceToSquared(targetPosition) > .000001 || Math.abs(rotation - floor.group.rotation.y) > .0001 || Math.abs(floor.material.color.r - targetColor.r) > .001 || Math.abs(postScale - floor.posts.scale.y) > .001;
    });
    if (dirty || moving || (options.playing && !options.reduced)) renderer.render(scene, camera);
    dirty = false;
    if (moving || (options.playing && !options.reduced)) frame = requestAnimationFrame(render);
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.set(6.4, 5, 8).multiplyScalar(camera.aspect < 1 ? 1.12 : 1);
    camera.updateProjectionMatrix();
    requestRender();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) { lastTime = 0; requestRender(); }
    else { cancelAnimationFrame(frame); frame = 0; }
  });
  visibilityObserver.observe(host);
  function visibilityChanged() {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else { lastTime = 0; requestRender(); }
  }
  function down(event: PointerEvent) {
    if (event.button !== 0) return;
    onInteract();
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, angle, tilt };
    canvas.setPointerCapture(event.pointerId);
    canvas.dataset.dragging = "true";
  }
  function move(event: PointerEvent) {
    if (!pointer || event.pointerId !== pointer.id) return;
    angle = pointer.angle + (event.clientX - pointer.x) * .009;
    if (event.pointerType === "mouse") tilt = THREE.MathUtils.clamp(pointer.tilt + (event.clientY - pointer.y) * .003, -.18, .22);
    requestRender();
  }
  function up(event: PointerEvent) {
    if (!pointer || event.pointerId !== pointer.id) return;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    pointer = null;
    canvas.dataset.dragging = "false";
  }
  function reset() { angle = .12; tilt = 0; requestRender(); }
  function keyboard(event: KeyboardEvent) {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(event.key)) return;
    event.preventDefault();
    onInteract();
    if (event.key === "Home") reset();
    if (event.key === "ArrowLeft") angle -= .25;
    if (event.key === "ArrowRight") angle += .25;
    if (event.key === "ArrowUp") tilt = Math.max(-.18, tilt - .05);
    if (event.key === "ArrowDown") tilt = Math.min(.22, tilt + .05);
    requestRender();
  }
  function contextLost(event: Event) { event.preventDefault(); cancelAnimationFrame(frame); frame = 0; onFailure(); }
  canvas.addEventListener("pointerdown", down);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", up);
  canvas.addEventListener("pointercancel", up);
  canvas.addEventListener("keydown", keyboard);
  canvas.addEventListener("webglcontextlost", contextLost);
  document.addEventListener("visibilitychange", visibilityChanged);
  resize();

  return {
    update(next) { options = next; host.dataset.stage = String(next.active); host.dataset.expanded = String(next.expanded); requestRender(); },
    reset,
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", visibilityChanged);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      canvas.removeEventListener("keydown", keyboard);
      canvas.removeEventListener("webglcontextlost", contextLost);
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      scene.traverse(object => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          geometries.add(object.geometry);
          for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material);
        }
      });
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      environment.dispose();
      key.shadow.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}

export default function ArchitectureModel({ active, reduced, playing, onInteract }: { active: number; reduced: boolean; playing: boolean; onInteract: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  const controller = useRef<ModelController | null>(null);
  const interaction = useRef(onInteract);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const [expanded, setExpanded] = useState(false);
  useEffect(() => { interaction.current = onInteract; }, [onInteract]);
  useEffect(() => {
    if (!host.current) return;
    let cancelled = false;
    const report = (state: "ready" | "fallback") => queueMicrotask(() => { if (!cancelled) setStatus(state); });
    try {
      controller.current = createModel(host.current, () => interaction.current(), () => report("fallback"));
      report("ready");
    } catch { report("fallback"); }
    return () => { cancelled = true; controller.current?.dispose(); controller.current = null; };
  }, []);
  useEffect(() => { controller.current?.update({ active, reduced, playing, expanded }); }, [active, reduced, playing, expanded]);

  return <div className="architecture-model" data-status={status}>
    <div className="architecture-model-top"><span><i aria-hidden="true" />Interactive architecture</span><span>0{active + 1} / 05</span></div>
    <div className="architecture-canvas" ref={host} hidden={status === "fallback"} />
    {status !== "ready" && <div className="architecture-model-fallback" role="img" aria-label={`Architectural layers: ${names[active]}`}>
      <svg viewBox="0 0 360 330" aria-hidden="true">{names.map((name, index) => <path key={name} d={`M 65 ${250-index*39} L 180 ${305-index*39} L 295 ${250-index*39} L 180 ${195-index*39} Z`} fill={index<=active?"#243b54":"none"} stroke={index<=active?"#d3a75e":"#526278"} strokeWidth="2" />)}</svg>
      <span>{status === "loading" ? "Preparing the model" : "A view of the five-stage structure"}</span>
    </div>}
    <div className="architecture-model-caption"><span className="architecture-model-index">0{active + 1}</span><div><h3>{names[active]}<span>.</span></h3><p>{captions[active]}</p></div></div>
    <div className="architecture-model-toolbar">
      <span><MoveHorizontal size={14} aria-hidden="true" />Drag to rotate</span>
      <div><button type="button" aria-label={expanded ? "Assemble model" : "Expand model"} aria-pressed={expanded} disabled={status !== "ready"} onClick={() => { onInteract(); setExpanded(!expanded); }}>{expanded ? <Shrink size={15} /> : <Expand size={15} />}<span>{expanded ? "Assemble" : "Expand"}</span></button><button type="button" aria-label="Reset model view" disabled={status !== "ready"} onClick={() => { onInteract(); controller.current?.reset(); setExpanded(false); }}><RotateCcw size={15} aria-hidden="true" /></button></div>
    </div>
  </div>;
}
