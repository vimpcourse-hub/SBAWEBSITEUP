export interface EntityItem {
  key: string;
  name: string;
  type: "client" | "authority" | "partner";
  parent?: string;
  file?: string;
  subtitle?: string;
  isTextOnly?: boolean;
}

export const ENTITIES: EntityItem[] = [
  /* CLIENTS */
  { key: "BERGER", name: "Berger Paints Limited", type: "client", file: "berger.png" },
  { key: "WIPRO", name: "Wipro Enterprises Limited", type: "client", file: "wipro.png" },
  { key: "BRITISH", name: "British Paints", type: "client", file: "british-paints.png" },
  { key: "JOYALUKKAS", name: "Joyalukkas", type: "client", file: "joyalukkas.png" },
  { key: "SUZLON", name: "Suzlon Infrastructure Limited", type: "client", file: "suzlon.png" },
  { key: "BHORUKA", name: "Bhoruka Power Corporation", type: "client", file: "bhoruka.jpg" },
  { key: "TIRUPATI", name: "Tirupati Steels", type: "client", file: "tirupati-steels.png" },
  { key: "MB_SMELTERS", name: "M.B. Smelters", type: "client", isTextOnly: true },

  /* GOVT PARENTS */
  { key: "govt-karnataka", name: "Government of Karnataka", type: "authority", file: "govt-karnataka.png" },
  { key: "govt-andhra-pradesh", name: "Government of Andhra Pradesh", type: "authority", file: "govt-andhra-pradesh.jpg" },

  /* KARNATAKA – CHILDREN */
  { key: "pwd-ka", name: "Public Works Department", parent: "govt-karnataka", type: "authority" },
  { key: "kiadb", name: "KIADB", parent: "govt-karnataka", type: "authority", file: "kiadb.png" },
  { key: "hospet-mc", name: "Hospet Municipal Council", parent: "govt-karnataka", type: "authority", isTextOnly: true },
  { key: "chitradurga-mc", name: "Chitradurga Municipal Council", parent: "govt-karnataka", type: "authority", isTextOnly: true },
  { key: "irrigation-ka", name: "Irrigation Department", parent: "govt-karnataka", type: "authority" },

  /* ANDHRA – CHILDREN */
  { key: "hindupur-municipality", name: "Hindupur Municipality", parent: "govt-andhra-pradesh", type: "authority", isTextOnly: true },
  { key: "water-board-ap", name: "Government Water Board", parent: "govt-andhra-pradesh", type: "authority" },

  /* CENTRAL */
  { key: "indian-railways", name: "Indian Railways", type: "authority", file: "irctc.png" },

  /* PARTNERS */
  { key: "NSL", name: "NSL Constructions Pvt Ltd", type: "partner", file: "nsl.png" },
  { key: "IVRCL", name: "IVRCL", type: "partner", file: "ivrcl.png" },
  { key: "GVPR", name: "GVPR Engineers Ltd", type: "partner", file: "gvpr.png" },
  { key: "LNT", name: "Larsen & Toubro", type: "partner", file: "lnt.png" }
];
