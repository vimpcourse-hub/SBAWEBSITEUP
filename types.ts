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

/* =========================
   PROJECT
   ========================= */

export interface Project {
  id: string;
  slug: string;
  title: string;
  vertical: string;

  /** 🔥 single source of truth for filtering (client / authority) */
  entityKey: string; // must match EntityItem.key

  /** 🤝 JV / subcontract partner (optional) */
  partnerKey?: string; // must match EntityItem.key

  client: ProjectClient;

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
  key: string; // used for filtering & routing

  name: string;
  type: "client" | "authority" | "partner";

  file?: string;        // logo image
  subtitle?: string;    // small text under logo (eg: Govt of AP)
  isTextOnly?: boolean; // if true, render text card instead of logo

  parent?: string;      // parent govt (eg: govt-ap)
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
