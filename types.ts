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

/* ✅ USED FOR FILTERING BY LOGO */
export interface ProjectEntities {
  clients?: string[];      // ex: ["WIPRO"]
  authorities?: string[];  // ex: ["GOVT_KA"]
  partners?: string[];     // ex: ["IVRCL"]
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  vertical: string;

  client: ProjectClient;        // ❌ NO GROUP HERE
  entities?: ProjectEntities;   // ✅ GROUP GOES HERE

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

/* ENTITY LOGO DATA */

export interface EntityItem {
  name: string;
  file?: string;
  type: "client" | "authority" | "partner";
  group: string;          // ✅ ONLY ENTITIES HAVE GROUP
  subtitle?: string;
  isTextOnly?: boolean;
}
