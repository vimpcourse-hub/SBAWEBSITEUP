// types.ts

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
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

export interface ProjectLocation {
  city: string;
  state: string;
  country: string;
}

/* ✅ ADD THIS */
export interface ProjectEntities {
  clients?: string[];
  authorities?: string[];
  partners?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;

  /* ✅ REQUIRED FOR VERTICAL FILTER */
  vertical: string;

  client: ProjectClient;
  entities?: ProjectEntities;   // ✅ FIXES YOUR ERROR
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

/* ✅ INDUSTRY TYPE (FIXES industries.ts ERROR) */
export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  image: string;
  categoryMapping?: string;
}
