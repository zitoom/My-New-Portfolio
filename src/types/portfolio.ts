export type ProjectCategory = 
  | 'all'
  | 'enterprise'
  | 'ai-products'
  | 'android-tv'
  | 'web-saas';

export type ProjectStatus = 
  | 'Production' 
  | 'In Development' 
  | 'Enterprise Engagement' 
  | 'Concept & Prototype';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  releaseTag?: string;
  summary: string;
  description: string;
  challenge?: string;
  solution?: string;
  metrics?: { label: string; value: string; note?: string }[];
  keyHighlights: string[];
  technologies: string[];
  imageSrc?: string;
  imageAlt: string;
  isEnterprise: boolean;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  dateNote?: string;
  summary: string;
  responsibilities: string[];
  keyAchievements?: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
  badge?: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  count?: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  summary: string;
  skills: string[];
  featuredTech: string[];
}

export interface VerifiedMetric {
  value: string;
  label: string;
  context: string;
  highlight?: string;
}

export interface ServiceCapability {
  id: string;
  title: string;
  shortSummary: string;
  iconName: string;
  deliverables: string[];
  typicalEngagements: string;
  techFocus: string[];
}
