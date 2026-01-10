export interface EntityItem {
  name: string;
  file?: string;
  type: "client" | "authority" | "partner";
  group: string;                // ✅ REQUIRED FOR AUTO FILTER
  subtitle?: string;
  isTextOnly?: boolean;
}

export const ENTITIES: EntityItem[] = [

  // ===== CLIENTS =====
  { name: "Berger Paints Limited", file: "berger.png", type: "client", group: "BERGER" },

  { name: "Wipro Enterprises Limited", file: "wipro.png", type: "client", group: "WIPRO" },

  { name: "British Paints", file: "british-paints.png", type: "client", group: "BRITISH" },

  { name: "Joyalukkas", file: "joyalukkas.png", type: "client", group: "JOYALUKKAS" },

  { name: "Suzlon Infrastructure Limited", file: "suzlon.png", type: "client", group: "SUZLON" },

  { name: "Bhoruka Power Corporation", file: "bhoruka.jpg", type: "client", group: "BHORUKA" },

  { name: "Tirupati Steels", file: "tirupati-steels.png", type: "client", group: "TIRUPATI" },

  { name: "M.B. Smelters", type: "client", isTextOnly: true, group: "MB_SMELTERS" },


  // ===== GOVERNMENT / AUTHORITIES =====

  {
    name: "Public Works Department",
    subtitle: "Government of Karnataka",
    file: "govt-karnataka.png",
    type: "authority",
    group: "GOVT_KA"
  },

  {
    name: "KIADB",
    subtitle: "Government of Karnataka",
    file: "kiadb.png",
    type: "authority",
    group: "KIADB"
  },

  {
    name: "Indian Railways",
    subtitle: "Government of India",
    file: "irctc.png",
    type: "authority",
    group: "RAILWAYS"
  },

  {
    name: "Government of Andhra Pradesh",
    file: "govt-andhra-pradesh.jpg",
    type: "authority",
    group: "GOVT_AP"
  },

  {
    name: "Hospet Municipal Council",
    subtitle: "Government of Karnataka",
    type: "authority",
    isTextOnly: true,
    group: "GOVT_KA"
  },

  {
    name: "Chitradurga Municipal Council",
    subtitle: "Government of Karnataka",
    type: "authority",
    isTextOnly: true,
    group: "GOVT_KA"
  },

  {
    name: "GTTC",
    subtitle: "Govt Tool Room & Training Centre",
    type: "authority",
    isTextOnly: true,
    group: "GOVT_KA"
  },


  // ===== PARTNERS / JV =====

  { name: "NSL Constructions Private Limited", file: "nsl.png", type: "partner", group: "NSL" },

  { name: "IVRCL", file: "ivrcl.png", type: "partner", group: "IVRCL" },

  { name: "GVPR Engineers Limited", file: "gvpr.png", type: "partner", group: "GVPR" },

  { name: "Larsen & Toubro", file: "lnt.png", type: "partner", group: "LNT" },

  { name: "Shashank Constructions", type: "partner", isTextOnly: true, group: "SHASHANK" },

];
