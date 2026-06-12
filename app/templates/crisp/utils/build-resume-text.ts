import type {
  CrispAchievement,
  CrispCertification,
  CrispEducation,
  CrispExperience,
  CrispLanguage,
  CrispProfile,
  CrispProject,
  CrispReference,
  CrispSkillCategory,
} from "../types";

type BuildResumeTextArgs = {
  profile: CrispProfile;
  experiences: CrispExperience[];
  skillCategories: CrispSkillCategory[];
  projects: CrispProject[];
  education: CrispEducation[];
  certifications: CrispCertification[];
  languages: CrispLanguage[];
  achievements: CrispAchievement[];
  references: CrispReference[];
};

export function buildResumeText({
  profile,
  experiences,
  skillCategories,
  projects,
  education,
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
    `Specializations: ${profile.specializations.join(", ")}`,
    "",
    "Experience",
    ...experiences.flatMap((item) => [
      `${item.jobTitle} - ${item.company} | ${item.employmentType} | ${item.startDate} - ${item.endDate} (${item.duration})`,
      item.description,
      ...item.achievements.map((achievement) => `- ${achievement}`),
      "",
    ]),
    "Skills",
    ...skillCategories.map((group) => `${group.category}: ${group.items.join(", ")}`),
    "",
    "Projects",
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
