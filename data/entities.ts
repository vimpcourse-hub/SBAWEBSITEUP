export interface EntityItem {
  key: string;                           // 🔑 canonical ID (used in projects)
  name: string;                          // Display name
  type: "client" | "authority" | "partner";
  parent?: string;                      // Govt hierarchy only
  file?: string;                        // Logo (optional)
  subtitle?: string;                    // Dept / Govt info
  isTextOnly?: boolean;                 // No logo
}

export const ENTITIES: EntityItem[] = [

  /* ===================== CLIENTS ===================== */

  { key: "BERGER", name: "Berger Paints Limited", type: "client", file: "berger.png" },
  { key: "WIPRO", name: "Wipro Enterprises Limited", type: "client", file: "wipro.png" },
  { key: "BRITISH", name: "British Paints", type: "client", file: "british-paints.png" },
  { key: "JOYALUKKAS", name: "Joyalukkas", type: "client", file: "joyalukkas.png" },
  { key: "SUZLON", name: "Suzlon Infrastructure Limited", type: "client", file: "suzlon.png" },
  { key: "BHORUKA", name: "Bhoruka Power Corporation", type: "client", file: "bhoruka.jpg" },
  { key: "TIRUPATI", name: "Tirupati Steels", type: "client", file: "tirupati-steels.png" },
  { key: "MB_SMELTERS", name: "M.B. Smelters", type: "client", isTextOnly: true },

  /* ===================== GOVERNMENT (PARENTS – FILTER ONLY) ===================== */

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

  /* ===================== KARNATAKA GOVERNMENT (CHILDREN) ===================== */

  {
    key: "pwd-ka",
    name: "Public Works Department",
    subtitle: "Government of Karnataka",
    parent: "govt-karnataka",
    type: "authority"
  },
  {
    key: "kiadb",
    name: "KIADB",
    subtitle: "Government of Karnataka",
    parent: "govt-karnataka",
    type: "authority",
    file: "kiadb.png"
  },
  {
    key: "hospet-mc",
    name: "Hospet Municipal Council",
    subtitle: "Government of Karnataka",
    parent: "govt-karnataka",
    type: "authority",
    isTextOnly: true
  },
  {
    key: "chitradurga-mc",
    name: "Chitradurga Municipal Council",
    subtitle: "Government of Karnataka",
    parent: "govt-karnataka",
    type: "authority",
    isTextOnly: true
  },
  {
    key: "gttc",
    name: "Govt Tool Room & Training Centre",
    subtitle: "Government of Karnataka",
    parent: "govt-karnataka",
    type: "authority",
    isTextOnly: true
  },
  {
    key: "irrigation-ka",
    name: "Irrigation Department",
    subtitle: "Government of Karnataka",
    parent: "govt-karnataka",
    type: "authority"
  },

  /* ===================== ANDHRA PRADESH GOVERNMENT (CHILDREN) ===================== */

  {
    key: "hindupur-municipality",
    name: "Hindupur Municipality",
    subtitle: "Government of Andhra Pradesh",
    parent: "govt-andhra-pradesh",
    type: "authority",
    isTextOnly: true
  },
  {
    key: "water-board-ap",
    name: "Government Water Board",
    subtitle: "Government of Andhra Pradesh",
    parent: "govt-andhra-pradesh",
    type: "authority"
  },
  {
    key: "pwd-ap",
    name: "Public Works Department",
    subtitle: "Government of Andhra Pradesh",
    parent: "govt-andhra-pradesh",
    type: "authority"
  },

  /* ===================== CENTRAL GOVERNMENT ===================== */

  {
    key: "indian-railways",
    name: "Indian Railways",
    subtitle: "Government of India",
    type: "authority",
    file: "indian-railways.png"
  },

  /* ===================== PARTNERS / JV ===================== */

  { key: "NSL", name: "NSL Constructions Private Limited", type: "partner", file: "nsl.png" },
  { key: "IVRCL", name: "IVRCL", type: "partner", file: "ivrcl.png" },
  { key: "GVPR", name: "GVPR Engineers Limited", type: "partner", file: "gvpr.png" },
  { key: "LNT", name: "Larsen & Toubro", type: "partner", file: "lnt.png" },
  { key: "SHASHANK", name: "Shashank Constructions", type: "partner", isTextOnly: true }

];
