// src/data/entities.ts

export interface EntityItem {
  key: string;
  name: string;
  type: "client" | "authority" | "partner";
  file?: string;
  isTextOnly?: boolean;
  parent?: string;
  subtitle?: string;
}

export const ENTITIES: EntityItem[] = [

  /* ===== CLIENTS ===== */

  { key: "BERGER", name: "Berger Paints Limited", type: "client", file: "berger.png" },

  { key: "WIPRO", name: "Wipro Enterprises Limited", type: "client", file: "wipro.png" },

  { key: "BRITISH_PAINTS", name: "British Paints", type: "client", file: "british-paints.png" },

  { key: "JOYALUKKAS", name: "Joyalukkas Foundation", type: "client", file: "joyalukkas.png" },

  { key: "SUZLON", name: "Suzlon Infrastructure Limited", type: "client", file: "suzlon.png" },

  { key: "BHORUKA", name: "Bhoruka Power Corporation", type: "client", file: "bhoruka.jpg" },

  { key: "TIRUPATI", name: "Tirupati Steels", type: "client", file: "tirupati-steels.png" },

  { key: "MB_SMELTERS", name: "M.B. Smelters", type: "client", isTextOnly: true },

  /* ===== GOVT PARENTS ===== */

  { key: "GOVT_KA", name: "Government of Karnataka", type: "authority", file: "govt-karnataka.png" },

  { key: "GOVT_AP", name: "Government of Andhra Pradesh", type: "authority", file: "govt-andhra-pradesh.jpg" },

  /* ===== GOVT CHILDREN — KA ===== */

  { key: "PWD_KA", name: "Public Works Department", type: "authority", parent: "GOVT_KA", isTextOnly: true, subtitle: "Govt of Karnataka" },

  { key: "KIADB", name: "KIADB", type: "authority", parent: "GOVT_KA", file: "kiadb.png", subtitle: "Govt of Karnataka" },

  { key: "HOSPET_MC", name: "Hospet Municipal Council", type: "authority", parent: "GOVT_KA", isTextOnly: true, subtitle: "Govt of Karnataka" },

  { key: "CHITRADURGA_MC", name: "Chitradurga Municipal Council", type: "authority", parent: "GOVT_KA", isTextOnly: true, subtitle: "Govt of Karnataka" },

  { key: "GTTC", name: "Govt Tool Room & Training Centre", type: "authority", parent: "GOVT_KA", isTextOnly: true, subtitle: "Govt of Karnataka" },

  { key: "IRRIGATION_KA", name: "Irrigation Department", type: "authority", parent: "GOVT_KA", isTextOnly: true, subtitle: "Govt of Karnataka" },

  /* ===== GOVT CHILDREN — AP ===== */

  { key: "HINDUPUR_MC", name: "Hindupur Municipality", type: "authority", parent: "GOVT_AP", isTextOnly: true, subtitle: "Govt of Andhra Pradesh" },

  { key: "WATER_BOARD_AP", name: "Government Water Board", type: "authority", parent: "GOVT_AP", isTextOnly: true, subtitle: "Govt of Andhra Pradesh" },

  /* ===== CENTRAL GOVT ===== */

  { key: "INDIAN_RAILWAYS", name: "Indian Railways", type: "authority", file: "irctc.png", subtitle: "Govt of India" },

  /* ===== PARTNERS ===== */

  { key: "NSL", name: "NSL Constructions Pvt Ltd", type: "partner", file: "nsl.png" },

  { key: "IVRCL", name: "IVRCL", type: "partner", file: "ivrcl.png" },

  { key: "GVPR", name: "GVPR Engineers Ltd", type: "partner", file: "gvpr.png" },

  { key: "LNT", name: "Larsen & Toubro", type: "partner", file: "lnt.png" },

];
