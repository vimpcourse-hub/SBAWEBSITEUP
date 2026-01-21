// data/entities.ts

export interface EntityItem {
  key: string;
  name: string;
  type: "client" | "authority" | "partner";

  file?: string;
  isTextOnly?: boolean;

  parent?: string;     // for govt hierarchy
  subtitle?: string;   // ✅ shown below logo (Govt of AP / Govt of KA)
}

export const ENTITIES: EntityItem[] = [

  /* ================= CLIENTS ================= */

  { key: "BERGER", name: "Berger Paints Limited", type: "client", file: "berger.png" },
  { key: "WIPRO", name: "Wipro Enterprises Limited", type: "client", file: "wipro.png" },
  { key: "BRITISH", name: "British Paints", type: "client", file: "british-paints.png" },
  { key: "JOYALUKKAS", name: "Joyalukkas Foundation", type: "client", file: "joyalukkas.png" },
  { key: "SUZLON", name: "Suzlon Infrastructure Limited", type: "client", file: "suzlon.png" },
  { key: "BHORUKA", name: "Bhoruka Power Corporation", type: "client", file: "bhoruka.jpg" },
  { key: "TIRUPATI", name: "Tirupati Steels", type: "client", file: "tirupati-steels.png" },
  { key: "MB_SMELTERS", name: "M.B. Smelters", type: "client", isTextOnly: true },

  /* ================= GOVT PARENTS ================= */

  {
    key: "govt-ka",
    name: "Government of Karnataka",
    type: "authority",
    file: "govt-karnataka.png"
  },

  {
    key: "govt-ap",
    name: "Government of Andhra Pradesh",
    type: "authority",
    file: "govt-andhra-pradesh.jpg"
  },

  /* ================= GOVT CHILDREN — KARNATAKA ================= */

  {
    key: "pwd-ka",
    name: "Public Works Department",
    type: "authority",
    parent: "govt-ka",
    subtitle: "Govt of Karnataka"
  },

  {
    key: "kiadb",
    name: "KIADB",
    type: "authority",
    parent: "govt-ka",
    file: "kiadb.png",
    subtitle: "Govt of Karnataka"
  },

  {
    key: "hospet-mc",
    name: "Hospet Municipality",
    type: "authority",
    parent: "govt-ka",
    isTextOnly: true,
    subtitle: "Govt of Karnataka"
  },

  {
    key: "chitradurga-mc",
    name: "Chitradurga Municipality",
    type: "authority",
    parent: "govt-ka",
    isTextOnly: true,
    subtitle: "Govt of Karnataka"
  },

  {
    key: "gttc",
    name: "Govt Tool Room & Training Centre",
    type: "authority",
    parent: "govt-ka",
    isTextOnly: true,
    subtitle: "Govt of Karnataka"
  },

  {
    key: "irrigation-ka",
    name: "Irrigation Department",
    type: "authority",
    parent: "govt-ka",
    subtitle: "Govt of Karnataka"
  },

  /* ================= GOVT CHILDREN — ANDHRA PRADESH ================= */

  {
    key: "hindupur-municipality",
    name: "Hindupur Municipality",
    type: "authority",
    parent: "govt-ap",
    isTextOnly: true,
    subtitle: "Govt of Andhra Pradesh"
  },

  {
    key: "water-board-ap",
    name: "Government Water Board",
    type: "authority",
    parent: "govt-ap",
    subtitle: "Govt of Andhra Pradesh"
  },

  /* ================= CENTRAL GOVT ================= */

  {
    key: "indian-railways",
    name: "Indian Railways",
    type: "authority",
    file: "indian-railways.png",
    subtitle: "Govt of India"
  },

  /* ================= PARTNERS ================= */

  { key: "NSL", name: "NSL Constructions Pvt Ltd", type: "partner", file: "nsl.png" },
  { key: "IVRCL", name: "IVRCL", type: "partner", file: "ivrcl.png" },
  { key: "GVPR", name: "GVPR Engineers Ltd", type: "partner", file: "gvpr.png" },
  { key: "LNT", name: "Larsen & Toubro", type: "partner", file: "lnt.png" }

];
