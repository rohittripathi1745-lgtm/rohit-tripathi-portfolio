export type ProficiencyLevel = 'Proficient' | 'Comfortable' | 'Working Knowledge' | 'Learning' | 'Experience';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'business' | 'other';
  level: ProficiencyLevel;
  description: string;
  iconName?: string;
  isFavorite?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  role: string;
  contributions: string[];
  challenges?: string[];
  whatILearned?: string[];
  liveDemo?: string;
  github?: string;
  accentColor?: string;
  visualType: 'lms' | 'ticket' | 'workflow' | 'attendance' | 'portfolio';
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge: string;
  type: 'education' | 'experience' | 'internship' | 'focus';
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  description: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  email: string;
  location: string;
}

export interface ProfileData {
  name: string;
  displayName: string;
  roles: string[];
  location: string;
  locationState: string;
  tagline: string;
  heroPitch: string;
  aboutEditorial: string[];
  statusText: string;
  isAvailable: boolean;
  socials: SocialLinks;
  resumeUrl: string;
  hasResumePdf: boolean;
}
