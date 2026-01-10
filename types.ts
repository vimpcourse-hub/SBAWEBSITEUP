export interface ProjectClient {
  name: string;
  slug: string;
  logo: string;
}

export interface ProjectCategory {
  primary: string;
  secondary: string[];
}

export interface EntityItem {
  name: string;
  file?: string;
  type: "client" | "authority" | "partner";
  group: string;                 // ✅ REQUIRED
  subtitle?: string;
  isTextOnly?: boolean;
}

export interface ProjectValue {
  amount: number;
  currency: string;
  unit: string;
}

export interface ProjectTimeline {
  start: string;
  end: string;
  status: "Completed" | "In Progress" | "Upcoming";
}

export interface ProjectLocation {
  city: string;
  state: string;
  country: string;
}

/* GROUP BASED MAPPING */
export interface ProjectEntities {
  clients?: string[];
  authorities?: string[];
  partners?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  vertical: string;

  client: ProjectClient;
  entities?: ProjectEntities;

  category: ProjectCategory;
  tags: string[];

  location: ProjectLocation;
  projectValue: ProjectValue;
  timeline: ProjectTimeline;

  heroImage: string;
  gallery: string[];
  scopeOfWork: string[];
  description: string;

  isFeatured: boolean;
  displayOnHomeHero: boolean;
}

/* INDUSTRY TYPE */
export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  image: string;
  categoryMapping?: string;
}
