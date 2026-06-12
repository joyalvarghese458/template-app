export type CrispLink = {
  label: string;
  href: string;
};

export type CrispSnapshotItem = {
  label: string;
  value: string;
  detail: string;
};

export type CrispProfile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  currentRole: string;
  availability: string;
  summary: string;
  focus: string;
  specializations: string[];
  links: CrispLink[];
};

export type CrispExperience = {
  jobTitle: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  achievements: string[];
};

export type CrispSkillCategory = {
  category: string;
  items: string[];
};

export type CrispProject = {
  name: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  links: CrispLink[];
};

export type CrispEducation = {
  degree: string;
  institution: string;
  year: string;
  description: string;
};

export type CrispCertification = {
  name: string;
  issuer: string;
  year: string;
};

export type CrispLanguage = {
  name: string;
  proficiency: string;
};

export type CrispAchievement = {
  title: string;
  date: string;
  description: string;
};

export type CrispReference = {
  name: string;
  position: string;
  company: string;
  contact: string;
};
