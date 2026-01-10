export interface ProjectClient {
  name: string;
  slug: string;
  logo: string;
}

export interface ProjectCategory {
  primary: string;
  secondary: string[];
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

/* USED FOR LOGO FILTERING */
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

/* LOGO ENTITIES */
export interface EntityItem {
  name: string;
  file?: string;
  type: "client" | "authority" | "partner";
  group: string;          // USED IN FILTER
  subtitle?: string;
  isTextOnly?: boolean;
}

/* INDUSTRY */
/* INDUSTRY */
export interface Industry {
  id: string;
  slug: string;        // ✅ REQUIRED (used in industries.ts and routing)
  title: string;
  description: string;
  iconName: string;
  image: string;
}

