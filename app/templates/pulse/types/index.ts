export type PulseLink = {
  label: string;
  href: string;
};

export type PulseProfile = {
  name: string;
  title: string;
  experience: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  focus: string;
  industryExpertise: string;
  currentRoleTitle: string;
  currentRoleCompany: string;
  links: PulseLink[];
};

export type PulseHighlight = {
  label: string;
  value: string;
};

export type PulseExperience = {
  jobTitle: string;
  company: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  achievements: string[];
};

export type PulseProject = {
  name: string;
  description: string;
  technologies: string[];
  coverImage: string;
  liveLink: string;
  githubLink: string;
};

export type PulseEducation = {
  degree: string;
  institution: string;
  year: string;
  description: string;
};

export type PulseSkillGroup = {
  category: string;
  items: string[];
};

export type PulseCertification = {
  name: string;
  issuer: string;
  year: string;
};

export type PulseLanguage = {
  name: string;
  proficiency: string;
};

export type PulseAchievement = {
  title: string;
  date: string;
  description: string;
};

export type PulseReference = {
  name: string;
  position: string;
  company: string;
  contact: string;
};
