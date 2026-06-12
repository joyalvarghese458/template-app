import type {
  PulseAchievement,
  PulseCertification,
  PulseEducation,
  PulseExperience,
  PulseLanguage,
  PulseProfile,
  PulseProject,
  PulseReference,
  PulseSkillGroup,
} from "../types";

type BuildResumeTextArgs = {
  profile: PulseProfile;
  experiences: PulseExperience[];
  projects: PulseProject[];
  education: PulseEducation[];
  skillGroups: PulseSkillGroup[];
  certifications: PulseCertification[];
  languages: PulseLanguage[];
  achievements: PulseAchievement[];
  references: PulseReference[];
};

export function buildResumeText({
  profile,
  experiences,
  projects,
  education,
  skillGroups,
  certifications,
  languages,
  achievements,
  references,
}: BuildResumeTextArgs) {
  return [
    `${profile.name} - ${profile.title}`,
    `${profile.location} | ${profile.email} | ${profile.phone} | ${profile.website}`,
    "",
    "Professional Summary",
    profile.summary,
    profile.focus,
    profile.industryExpertise,
    "",
    "Experience",
    ...experiences.flatMap((item) => [
      `${item.jobTitle} - ${item.company} | ${item.location} | ${item.employmentType} | ${item.startDate} - ${item.endDate} (${item.duration})`,
      item.description,
      ...item.achievements.map((achievement) => `- ${achievement}`),
      "",
    ]),
    "Featured Projects",
    ...projects.flatMap((project) => [
      `${project.name} - ${project.technologies.join(", ")}`,
      project.description,
      "",
    ]),
    "Education",
    ...education.flatMap((item) => [
      `${item.degree} - ${item.institution} (${item.year})`,
      item.description,
      "",
    ]),
    "Skills",
    ...skillGroups.map((group) => `${group.category}: ${group.items.join(", ")}`),
    "",
    "Certifications",
    ...certifications.map((item) => `${item.name} - ${item.issuer} (${item.year})`),
    "",
    "Languages",
    ...languages.map((item) => `${item.name} - ${item.proficiency}`),
    "",
    "Achievements",
    ...achievements.map((item) => `${item.title} (${item.date}) - ${item.description}`),
    "",
    "References",
    ...references.map(
      (item) => `${item.name} - ${item.position}, ${item.company} - ${item.contact}`,
    ),
  ].join("\n");
}
