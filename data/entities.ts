export interface EntityItem {
  key: string; // 🔑 used in projects + filters
  name: string;
  type: "client" | "authority" | "partner";
  parent?: string;
  file?: string;
  subtitle?: string;
  isTextOnly?: boolean;
}

export const ENTITIES: EntityItem[] = [
  /* ================= CLIENTS ================= */
  { key: "BERGER", name: "Berger Paints Limited", type: "client", file: "berger.png" },
  { key: "WIPRO", name: "Wipro Enterprises Limited", type: "client", file: "wipro.png" },
  { key: "BRITISH", name: "British Paints", type: "client", file: "british-paints.png" },
  { key: "JOYALUKKAS", name: "Joyalukkas", type: "client", file: "joyalukkas.png" },
  { key: "SUZLON", name: "Suzlon Infrastructure Limited", type: "client", file: "suzlon.png" },
  { key: "BHORUKA", name: "Bhoruka Power Corporation", type: "client", file: "bhoruka.jpg" },
  { key: "TIRUPATI", name: "Tirupati Steels", type: "client", file: "tirupati-steels.png" },
  { key: "MB_SMELTERS", name: "M.B. Smelters", type: "client", isTextOnly: true },

  /* ================= GOVERNMENT (AS CLIENTS) ================= */
  {
    key: "govt-karnataka",
    name: "Government of Karnataka",
    type: "authority",
    file: "govt-karnataka.png"
  },
  {
    key: "govt-andhra-pradesh",
    name: "Government of Andhra Pradesh",
    type: "authority",
    file: "govt-andhra-pradesh.jpg"
  },
  {
    key: "indian-railways",
    name: "Indian Railways",
    subtitle: "Government of India",
    type: "authority",
    file: "irctc.png"
  },

  /* ================= PARTNERS ================= */
  { key: "NSL", name: "NSL Constructions Pvt Ltd", type: "partner", file: "nsl.png" },
  { key: "IVRCL", name: "IVRCL", type: "partner", file: "ivrcl.png" },
  { key: "GVPR", name: "GVPR Engineers Limited", type: "partner", file: "gvpr.png" },
  { key: "LNT", name: "Larsen & Toubro", type: "partner", file: "lnt.png" },
  { key: "SHASHANK", name: "Shashank Constructions", type: "partner", isTextOnly: true }
];
