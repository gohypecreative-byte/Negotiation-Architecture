"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const profiles = [
  { name: "Strategic", description: "You chose to explore interests, pause and structure the next step. Keep testing those habits when the stakes rise." },
  { name: "Reactive", description: "You chose to push back under pressure. Practise a deliberate pause, then investigate what is driving the demand before countering." },
  { name: "Accommodating", description: "You chose to protect agreement through compromise. Explore other sources of value before making a concession." },
  { name: "Withdrawing", description: "You chose distance or delay when the conversation became difficult. Practise naming the issue and agreeing a specific next step." },
];

// Situation 1 is supplied copy. Situations 2–5 and the reflection model are editorial drafts.
const situations = [
  { question: "A counterpart opens with a number far worse than you expected. Your instinct?", options: [
    "Pause, then ask what's behind the number before responding at all.",
    "Counter hard — match aggression with aggression.",
    "Find middle ground quickly so the tone stays positive.",
    "Say little; take it away and respond by email.",
  ] },
  { question: "Your counterpart goes silent after your proposal. What do you do?", options: [
    "Give them space, then ask which part needs more discussion.",
    "Insist they explain why they are not responding.",
    "Improve your offer to get the conversation moving.",
    "End the meeting and wait for them to reach out.",
  ] },
  { question: "You are stuck on price, but timing and scope are still flexible. Your next move?", options: [
    "Explore timing, scope and priorities before proposing a package.",
    "Repeat your final price more firmly.",
    "Split the price difference to secure agreement.",
    "Set the deal aside without exploring the other terms.",
  ] },
  { question: "A productive meeting ends with ‘we will be in touch’. How do you close?", options: [
    "Agree who will do what next, and by when.",
    "Demand a decision before anyone leaves.",
    "Offer an extra concession to encourage a quick response.",
    "Leave the follow-up entirely to them.",
  ] },
  { question: "A difficult negotiation is over. How do you prepare for the next one?", options: [
    "Review decisions, pressure points and outcomes, then update your approach.",
    "Plan to take a harder line next time.",
    "Focus on being more agreeable next time.",
    "Put it behind you and start fresh.",
  ] },
];

export function ReadinessAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [complete, setComplete] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);
  useEffect(() => {
    if (interacted.current) heading.current?.focus();
  }, [step, complete]);
  const counts = profiles.map((_, index) => answers.filter(answer => answer === index).length);
  const highest = Math.max(...counts);
  const leaders = profiles.filter((_, index) => counts[index] === highest);
  const selected = answers[step];

  function next() {
    if (selected === undefined) return;
    interacted.current = true;
    if (step === situations.length - 1) setComplete(true);
    else setStep(step + 1);
  }

  return (
    <section className="assessment-section" id="assessment" aria-labelledby="assessment-title">
      <div className="recognition-shell">
        <div className="recognition-labels">
          <span className="practice-eyebrow">Experience the Method</span>
          <span className="recognition-sheet">Sheet 02 · Diagnostic instrument</span>
        </div>
        <div className="assessment-layout">
          <div className="assessment-intro">
            <h2 id="assessment-title">The Negotiation<br /><em>Readiness Assessment</em></h2>
            <p>Five situations. Choose what you would actually do — not what you should do. Your pattern profile appears instantly. This is a taste of how the programme trains: behaviour first, theory second.</p>
            <span className="assessment-note">Five situations · Instant reflection · No sign-up</span>
          </div>
          <div className="assessment-instrument">
            {complete ? <>
              <span className="practice-eyebrow">Your pattern profile</span>
              <h3 ref={heading} tabIndex={-1} className="assessment-question">{leaders.length > 1 ? "A mixed pattern" : `${leaders[0].name} tendencies`}</h3>
              <p className="assessment-result-copy">{leaders.length > 1 ? "Your choices span more than one pattern. Notice which situations shift your response, and practise a consistent pause before deciding." : leaders[0].description}</p>
              <div className="assessment-results">
                {profiles.map((profile, index) => <div className="assessment-result-row" key={profile.name}>
                  <span>{profile.name}</span><meter min={0} max={5} value={counts[index]} aria-label={`${profile.name}: ${counts[index]} of 5 responses`} /><span>{counts[index]}/5</span>
                </div>)}
              </div>
              <div className="assessment-controls">
                <button className="assessment-back" onClick={() => { interacted.current = true; setAnswers([]); setStep(0); setComplete(false); }}><RotateCcw size={15} /> Try again</button>
                <a className="assessment-next" href="#aspiration">Explore what you become <ArrowRight size={16} /></a>
              </div>
            </> : <>
              <div className="assessment-progress-heading"><span className="practice-eyebrow">Situation {step + 1} of 5</span><span>{Math.round(step / 5 * 100)}% complete</span></div>
              <progress className="assessment-progress" value={step} max={5} aria-label="Assessment progress" />
              <h3 id="situation-question" ref={heading} tabIndex={-1} className="assessment-question">{situations[step].question}</h3>
              <fieldset className="assessment-answers" aria-labelledby="situation-question">
                {situations[step].options.map((option, index) => <label className="assessment-answer" key={`${step}-${index}`}>
                  <input type="radio" name={`situation-${step}`} value={index} checked={selected === index} onChange={() => setAnswers(previous => { const updated = [...previous]; updated[step] = index; return updated; })} />
                  <span>{option}</span>
                </label>)}
              </fieldset>
              <div className="assessment-controls">
                <button className="assessment-back" disabled={step === 0} onClick={() => { interacted.current = true; setStep(step - 1); }}><ArrowLeft size={15} /> Back</button>
                <button className="assessment-next" disabled={selected === undefined} onClick={next}>{step === 4 ? "See my profile" : "Next situation"}<ArrowRight size={16} /></button>
              </div>
            </>}
            <p className="assessment-disclaimer">Illustrative self-reflection, not a validated assessment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
