import source from "./source-content.json";

// Text-only snapshot of NegotiationArchitect_Version_13_SEO.html.
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

// One closing call to action, used wherever a page ends with the standard invitation.
export const closingCta = {
  title: source.architecture[41].text,
  text: source.architecture[42].text,
  action: "Start a conversation",
  href: "/contact",
};
