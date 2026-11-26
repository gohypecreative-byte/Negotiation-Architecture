import source from "./source-content.json";

// Approved content aligned with Final Pravartak and subsequent corrections.
// Presentation, images and interactions remain owned by this project.
export { source };
export const programmeOffers = [5, 7, 9].map(index => ({
  title: source.programs[index].text,
  description: source.programs[index + 1].text,
}));
export const insightTopics = ["Strategy", "Behaviour", "Long-term value", "Preparation", "Commercial judgement", "Collaboration"];
export const insightPreviews = insightTopics.map((category, index) => ({
  category,
  title: source.insights[2 + index * 2].text,
  description: source.insights[3 + index * 2].text,
}));
export const scienceThemes = [22, 24, 26].map((index, position) => ({
  category: ["Economics", "Behaviour", "Relationships"][position],
  title: source.architecture[index].text,
  description: source.architecture[index + 1].text,
}));

// The five connected stages, shown on the home page and the methodology page.
export const stages = [
  { name: "Understand", title: "Understand what is really happening.", text: "Start with the people and the situation. Separate stated positions from underlying interests. Define what a useful outcome means.", result: "The result: clarity before action." },
  { name: "Analyse", title: "Analyse interests, choices and the economics.", text: "Look beneath the surface. Weigh priorities, alternatives, influence and dependencies. Then establish what the deal is truly worth.", result: "The result: a sharper view of your choices and the value at stake.", examin: true },
  { name: "Design", title: "Design your approach with intention.", text: "Shape objectives, options, sequence and trade-offs. Prepare for different responses. Stay open to new information.", result: "The result: a considered plan with room to adapt." },
  { name: "Engage", title: "Engage with clarity and awareness.", text: "Put preparation into practice. Listen closely. Ask purposeful questions. Respond to people and dynamics as they unfold.", result: "The result: a more deliberate, constructive exchange." },
  { name: "Achieve", title: "Achieve an outcome that works.", text: "Clarify what was agreed, who is responsible and what happens next. Reflect, so experience strengthens future capability.", result: "The result: clear commitments, follow-through and learning." },
];
export const examinComponents = [
  ["Identify", "the drivers of value."],
  ["Quantify", "the opportunity, in economic terms."],
  ["Test", "assumptions, costs, risks and trade-offs."],
];

// One closing call to action, used wherever a page ends with the standard invitation.
export const closingCta = {
  title: source.architecture[41].text,
  text: source.architecture[42].text,
  action: "Start a conversation",
  href: "/contact",
};
