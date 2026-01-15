// types.ts

/* =========================
   PROJECT-RELATED TYPES
   ========================= */

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

/* =========================
   ENTITY (CLIENT / AUTHORITY / PARTNER)
   ========================= */

export interface EntityItem {
  key: string;                         // REQUIRED (used everywhere)
  name: string;
  type: "client" | "authority" | "partner";

  file?: string;                       // logo image
  subtitle?: string;                   // used in ClientAuthorityCarousel
  isTextOnly?: boolean;                // text-only rendering

  group?: string;                      // logical grouping
  parent?: string;                     // used in Projects.tsx entity expansion
}

/* =========================
   INDUSTRY
   ========================= */

export interface Industry {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}
