"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useMotionValue } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Compass, Layers3, MessageSquare, Pause, Play, Plus, TrendingUp, UsersRound } from "lucide-react";
import { SiteNavbar } from "./site-navbar";

const stages = [
  { name: "Assess", subtitle: "Understand the situation.", description: "Before any position is taken, the situation is read as it is: the issues in play, the history, the constraints, and what is actually at stake for each side.", output: "A clear reading of the situation", capability: "Read issues, history, constraints and stakes.", question: "What is actually at stake for each side — beyond the number on the table?", exercise: "Write down the issues, constraints and history. Separate what you know from what you still need to ask." },
  { name: "Align", subtitle: "Understand people, interests and objectives.", description: "Positions are what people say. Interests are why. Each party’s objectives, pressures and decision-makers are mapped until the pieces face the same way.", output: "A map of interests and objectives", capability: "Map objectives, pressures and decision-makers.", question: "Who needs to say yes, and what does a good outcome mean to each of them?", exercise: "List the decision-makers. For each, distinguish their stated position from the interest or pressure behind it." },
  { name: "Architect", subtitle: "Design the negotiation.", description: "Sequence, leverage, options, anchors and concessions are structured into a plan that carries load — the outcome designed before entering the room.", output: "A negotiation designed before the room", capability: "Structure sequence, leverage, options, anchors and concessions.", question: "What could you trade that matters more to them than it costs you?", exercise: "Sketch two possible packages. Decide your opening, your sequence and what you would need in return for a concession." },
  { name: "Activate", subtitle: "Execute with precision.", description: "Language, composure and counter-tactics at the table. The structure is live, and every move made in the room is one that was chosen rather than provoked.", output: "Deliberate action under pressure", capability: "Apply language, composure and counter-tactics at the table.", question: "When pressure rises, what will you choose to do before responding?", exercise: "Practise a pause and one clarifying question. Rehearse it aloud before the conversation begins." },
  { name: "Accelerate", subtitle: "Improve outcomes and compound capability.", description: "Every negotiation is reviewed against its design. What worked is kept; what did not is corrected — so the next one starts from further ahead.", output: "Experience that compounds into expertise", capability: "Review outcomes, retain what works and correct what does not.", question: "What will you repeat, and what will you change next time?", exercise: "Compare the outcome with your original design. Record one decision that worked and one adjustment to test next time." },
];

const strategyHref = "mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session%20%E2%80%94%20request&body=Name%3A%0ARole%20and%20organisation%3A%0AThe%20negotiation%20I%20am%20preparing%20for%20%28one%20or%20two%20lines%29%3A%0AWhen%20it%20takes%20place%3A%0ATime%20zone%3A%0A";

const stageVisuals = [
  { src: "/images/system-preparation.webp", position: "center 64%", alt: "Reading plans and notes before taking a position", icon: Compass },
  { src: "/images/recognition-negotiation.webp", position: "40% center", alt: "Professionals listening to each other around a negotiation table", icon: UsersRound },
  { src: "/images/system-preparation.webp", position: "70% 85%", alt: "Organising plans and options on a walnut table", icon: Layers3 },
  { src: "/images/recognition-negotiation.webp", position: "70% center", alt: "A focused conversation about a proposal", icon: MessageSquare },
  { src: "/images/negotiation-boardroom.webp", position: "center 60%", alt: "A notebook at the boardroom table, ready for reflection and the next negotiation", icon: TrendingUp },
];
const STAGE_DURATION = 10000;

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}
function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getServerMotionPreference() { return true; }

export function ArchitecturePage() {
  const [active, setActive] = useState(0);
  const [exerciseOpen, setExerciseOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const player = useRef<HTMLDivElement>(null);
  const inView = useInView(player, { amount: .3 });
  const elapsed = useRef(0);
  const progress = useMotionValue(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, getServerMotionPreference);
  const running = inView && pageVisible && !paused && !hovered && !exerciseOpen && !reduce;

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!running) return;
    let frame: number;
    let previous = performance.now();
    function advance(now: number) {
      elapsed.current += now - previous;
      previous = now;
      if (elapsed.current >= STAGE_DURATION) {
        elapsed.current = 0;
        setActive(current => (current + 1) % stages.length);
      }
      progress.set(elapsed.current / STAGE_DURATION);
      frame = requestAnimationFrame(advance);
    }
    frame = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(frame);
  }, [running, progress]);

  function selectStage(index: number, focus = false) {
    setActive(index);
    setExerciseOpen(false);
    setPaused(true);
    elapsed.current = 0;
    progress.set(0);
    if (focus) tabs.current[index]?.focus({ preventScroll: true });
  }

  return <>
    <SiteNavbar />
    <main className="system-page" id="main" tabIndex={-1}>
      <div className="system-shell">
        <header className="system-hero">
          <div className="system-hero-copy">
            <span className="practice-eyebrow">The System</span>
            <h1>Negotiation,<br /><em>designed.</em></h1>
            <p className="system-hero-description">Every negotiation that goes well was built before it began. Five stages take a situation from fragments to a designed outcome.</p>
            <a className="system-explore" href="#five-stages">Explore the method <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <figure className="system-hero-image">
            <Image src="/images/system-preparation.webp" alt="Professionals arranging plans and notes before a negotiation at a sunlit walnut table" fill preload sizes="(max-width: 760px) 100vw, 50vw" />
          </figure>
        </header>

        <section className="system-experience" id="five-stages" aria-labelledby="system-experience-title">
          <div className="system-experience-heading">
            <div><span className="practice-eyebrow">Inside the method</span><h2 id="system-experience-title">Five stages. <em>Nothing left to instinct.</em></h2></div>
            <div className="system-playback">
              <span>{reduce ? "Explore at your pace" : paused ? "Your pace. Your next move." : "A guided journey · 10s per stage"}</span>
              <button className="system-playback-toggle" type="button" disabled={!!reduce} aria-label={reduce ? "Autoplay disabled for reduced motion" : paused ? "Play automatic stage rotation" : "Pause automatic stage rotation"} onClick={() => setPaused(current => !current)}>
                {paused || reduce ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
                {reduce ? "Manual mode" : paused ? "Play tour" : "Pause tour"}
              </button>
            </div>
          </div>
          <div className="system-player" ref={player} onFocusCapture={() => setPaused(true)} data-playing={running}>
          <div className="system-tabs" role="tablist" aria-label="Explore the five negotiation stages">
            {stages.map((stage, index) => { const StageIcon = stageVisuals[index].icon; return <button
              key={stage.name} ref={element => { tabs.current[index] = element; }}
              type="button" role="tab" id={`stage-${stage.name.toLowerCase()}`} aria-selected={index === active} aria-controls={`stage-panel-${index}`} tabIndex={index === active ? 0 : -1}
              onClick={() => selectStage(index)}
              onKeyDown={event => {
                let next: number | undefined;
                if (event.key === "ArrowRight") next = (index + 1) % stages.length;
                if (event.key === "ArrowLeft") next = (index - 1 + stages.length) % stages.length;
                if (event.key === "Home") next = 0;
                if (event.key === "End") next = stages.length - 1;
                if (next !== undefined) { event.preventDefault(); selectStage(next, true); }
              }}
            ><span className="system-tab-number">0{index + 1}</span><StageIcon className="system-tab-icon" size={20} strokeWidth={1.4} aria-hidden="true" /><span className="system-tab-name">{stage.name}</span><span className="system-tab-track" aria-hidden="true">{index === active && <motion.span style={{ scaleX: progress }} />}</span></button>; })}
          </div>
          <div className="system-workbench" onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={() => setHovered(false)}>
            <div className="system-stage-visual">
              <AnimatePresence initial={false}>
                <motion.div className="system-stage-photo" key={active} initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : .65 }}>
                  <Image src={stageVisuals[active].src} alt={stageVisuals[active].alt} fill sizes={stageVisuals[active].src.includes("recognition") ? "(max-width: 760px) 900px, 1800px" : "(max-width: 760px) 100vw, 42vw"} style={{ objectPosition: stageVisuals[active].position }} />
                </motion.div>
              </AnimatePresence>
              <div className="system-visual-overlay" aria-hidden="true" />
              <div className="system-visual-top"><span>The five-stage method</span><span>0{active + 1} / 05</span></div>
              <div className="system-visual-bottom">
                <span className="system-visual-kicker">From fragments to a designed outcome</span>
                <motion.p key={active} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>{stages[active].name}<span>.</span></motion.p>
                <div className="system-image-steps" aria-hidden="true">{stages.map((stage, index) => <span className={index <= active ? "is-complete" : ""} key={stage.name} />)}</div>
              </div>
            </div>
            <div className="system-stage-content">
              {stages.map((stage, index) => <div key={stage.name} role="tabpanel" id={`stage-panel-${index}`} aria-labelledby={`stage-${stage.name.toLowerCase()}`} hidden={index !== active} tabIndex={0}>
                <span className="practice-eyebrow">Stage 0{index + 1} · {stage.name}</span>
                <h3>{stage.subtitle}</h3>
                <p className="system-stage-description">{stage.description}</p>
                <div className="system-stage-output"><Check size={20} strokeWidth={1.5} aria-hidden="true" /><div><span>What you leave with</span><p>{stage.output}</p></div></div>
                <button className="system-question-toggle" type="button" aria-expanded={exerciseOpen} aria-controls={`stage-exercise-${index}`} onClick={() => setExerciseOpen(!exerciseOpen)}>Try this stage <Plus size={17} aria-hidden="true" /></button>
                <div className="system-exercise" id={`stage-exercise-${index}`} hidden={!exerciseOpen}>
                  <p>{stage.question}</p><span>{stage.exercise}</span>
                </div>
              </div>)}
              <div className="system-stage-controls">
                <button type="button" aria-label="Previous stage" onClick={() => selectStage((active - 1 + stages.length) % stages.length, true)}><ArrowLeft size={18} aria-hidden="true" /></button>
                <span>0{active + 1} <span>/ 05</span></span>
                <button type="button" className="system-next-stage" onClick={() => selectStage((active + 1) % stages.length, true)}>{active === 4 ? "Back to Assess" : `Next: ${stages[active + 1].name}`}<ArrowRight size={17} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="system-application" aria-labelledby="system-application-title">
          <div><span className="practice-eyebrow">One system. Every negotiation.</span><h2 id="system-application-title">Bring your next<br /><em>negotiation to the table.</em></h2></div>
          <div className="system-application-copy"><p>The same five stages are taught, practised and assessed at every certification level — <em>and applied directly in 1:1 advisory work.</em></p><a className="session-button" href={strategyHref}>Book a 1:1 Strategy Session <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        </section>
        <details className="system-capabilities" id="capability-model">
          <summary>See the capability model <Plus size={19} aria-hidden="true" /></summary>
          <div className="system-capability-content"><p>The capabilities developed through the five stages.</p><dl>{stages.map(stage => <div key={stage.name}><dt>{stage.name}</dt><dd>{stage.capability}</dd></div>)}</dl></div>
        </details>
        <footer className="system-footer"><span>Negotiation Architecture<sup>®</sup></span><Link href="/#assessment">Explore your readiness <ArrowUpRight size={15} aria-hidden="true" /></Link></footer>
      </div>
    </main>
  </>;
}
