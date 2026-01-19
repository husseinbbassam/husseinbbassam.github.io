
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}
