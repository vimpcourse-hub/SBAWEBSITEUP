export interface EntityItem {
  name: string;
  file?: string;
  type: 'client' | 'authority' | 'partner';
  subtitle?: string;
  isTextOnly?: boolean;
}

export const ENTITIES: EntityItem[] = [

  // ===== CLIENTS =====
  { name: "Berger Paints Limited", file: "berger.png", type: "client" },
  { name: "Wipro Enterprises Limited", file: "wipro.png", type: "client" },
  { name: "British Paints", file: "british-paints.png", type: "client" },
  { name: "Joyalukkas", file: "joyalukkas.png", type: "client" },
  { name: "Suzlon Infrastructure Limited", file: "suzlon.png", type: "client" },
  { name: "Bhoruka Power Corporation", file: "bhoruka.jpg", type: "client" },
  { name: "Tirupati Steels", file: "tirupati-steels.png", type: "client" },

  { name: "M.B. Smelters", type: "client", isTextOnly: true },

  // ===== GOVERNMENT / AUTHORITIES =====
  {
    name: "Public Works Department",
    subtitle: "Government of Karnataka",
    file: "govt-karnataka.png",
    type: "authority"
  },
  {
    name: "KIADB",
    subtitle: "Government of Karnataka",
    file: "kiadb.png",
    type: "authority"
  },
  {
    name: "Indian Railways",
    subtitle: "Government of India",
    file: "irctc.png",
    type: "authority"
  },
  {
    name: "Government of Andhra Pradesh",
    file: "govt-andhra-pradesh.jpg",
    type: "authority"
  },
  {
    name: "Hospet Municipal Council",
    subtitle: "Government of Karnataka",
    type: "authority",
    isTextOnly: true
  },
  {
    name: "Chitradurga Municipal Council",
    subtitle: "Government of Karnataka",
    type: "authority",
    isTextOnly: true
  },
  {
    name: "GTTC",
    subtitle: "Govt Tool Room & Training Centre",
    type: "authority",
    isTextOnly: true
  },

  // ===== PARTNERS / JV =====
  { name: "NSL Constructions Private Limited", file: "nsl.png", type: "partner" },
  { name: "IVRCL", file: "ivrcl.png", type: "partner" },
  { name: "GVPR Engineers Limited", file: "gvpr.png", type: "partner" },
  { name: "Larsen & Toubro", file: "lnt.png", type: "partner" },

  { name: "Shashank Constructions", type: "partner", isTextOnly: true },
];
