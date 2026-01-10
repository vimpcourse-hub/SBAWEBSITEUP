import { Project } from "../types";

export const PROJECTS: Project[] = [

  // ---------------- FMCG / BERGER ----------------

  {
    id: "proj-berger-scrap-yard",
    slug: "berger-scrap-barrel-yard-hindupur",
    title: "Scrap & Barrel Yard Construction",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png",
      group: "BERGER"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 600, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2023", end: "2024", status: "Completed" },
    heroImage: "/images/projects/berger-barrel-scrap-yard/hero.jpg",
    gallery: [
      "/images/projects/berger-barrel-scrap-yard/1.jpg",
      "/images/projects/berger-barrel-scrap-yard/2.jpg"
    ],
    scopeOfWork: ["Yard Development", "Concrete Works", "Drainage"],
    description: "Construction of Scrap and Barrel Yard at Berger Paints Limited, Hindupur.",
    isFeatured: true,
    displayOnHomeHero: true
  },

  {
    id: "proj-berger-rms-canopy",
    slug: "berger-rms-canopy",
    title: "RMS Canopy Structure",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png",
      group: "BERGER"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 0, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2023", end: "2023", status: "Completed" },
    heroImage: "/images/projects/berger-rms-canopy/hero.jpg",
    gallery: [],
    scopeOfWork: ["Steel Canopy Structure", "Fabrication"],
    description: "RMS steel canopy structure developed within Berger industrial premises.",
    isFeatured: false,
    displayOnHomeHero: true
  },

  {
    id: "proj-eco-stp-berger",
    slug: "eco-stp-berger-hindupur",
    title: "Eco STP Construction",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png",
      group: "BERGER"
    },
    category: { primary: "Water & STP", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 300, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2022", end: "2023", status: "Completed" },
    heroImage: "/images/projects/sewage-treatment-plant/hero.jpg",
    gallery: [],
    scopeOfWork: ["STP Installation", "Civil Works"],
    description: "Construction of ECO STP at Berger Paints Limited.",
    isFeatured: false,
    displayOnHomeHero: true
  },

  {
    id: "proj-british-paints-unit",
    slug: "british-paints-manufacturing-unit-hindupur",
    title: "Manufacturing Unit Construction – British Paints",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "British Paints",
      slug: "british-paints",
      logo: "/images/entities/british-paints.png",
      group: "BRITISH"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 140, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2022", end: "2023", status: "Completed" },
    heroImage: "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/hero.jpg",
    gallery: [
      "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/1.jpg",
      "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/2.jpg",
      "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/3.jpg",
      "/images/projects/british-paints-manufacturing-unit-gollapuram-hindupur/4.jpg"
    ],
    scopeOfWork: ["Civil Construction", "Industrial Flooring", "Structural Works"],
    description: "Construction of facilities for British Paints at Hindupur.",
    isFeatured: true,
    displayOnHomeHero: true
  },

  {
    id: "proj-rainwater-harvesting-berger",
    slug: "rainwater-harvesting-berger-hindupur",
    title: "Rain Water Harvesting System",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png",
      group: "BERGER"
    },
    category: { primary: "Water & STP", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 200, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2022", end: "2023", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Water Collection Systems", "Drainage"],
    description: "Construction of Rain Water Harvesting System at Berger Paints Limited.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-workshop-shed-berger",
    slug: "workshop-sheds-berger-hindupur",
    title: "Workshop Shed Construction",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png",
      group: "BERGER"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2021", end: "2022", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Steel Fabrication", "Civil Works"],
    description: "Construction of Work Shop Sheds at Berger Paints Limited.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-berger-wall",
    slug: "compound-wall-pump-house-berger",
    title: "Compound Wall & Pump Houses",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png",
      group: "BERGER"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 145, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2021", end: "2022", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Boundary Wall", "Pump House Construction"],
    description: "Construction of Compound wall for Berger and construction of Pump Houses.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // ---------------- CSR & INSTITUTIONAL ----------------

  {
    id: "proj-sathya-sai-park",
    slug: "sri-sathya-sai-public-park-puttaparthi",
    title: "Sri Sathya Sai Public Park Development",
    vertical: "Retail & CSR",
    client: {
      name: "Joyalukkas Foundation",
      slug: "joyalukkas-foundation",
      logo: "/images/entities/joyalukkas.png",
      group: "JOYALUKKAS"
    },
    category: { primary: "Public Amenities", secondary: [] },
    location: { city: "Puttaparthi", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 0, currency: "INR", unit: "CSR" },
    timeline: { start: "2021", end: "2022", status: "Completed" },
    heroImage: "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/hero.jpg",
    gallery: [
      "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/1.jpg",
      "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/2.jpg",
      "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/3.jpg",
      "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/4.jpg",
      "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/5.jpg",
      "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/6.jpg",
      "/images/projects/sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi/7.jpg"
    ],
    scopeOfWork: ["Landscaping", "Civil Walkways", "Public Utilities"],
    description: "Public park development project supported by Joyalukkas Foundation at Puttaparthi.",
    isFeatured: true,
    displayOnHomeHero: true
  },

  {
    id: "proj-berger-csr-food-court",
    slug: "berger-csr-food-court-thumakunta",
    title: "Food Court – Thumakunta Govt High School",
    vertical: "Retail & CSR",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png",
      group: "BERGER"
    },
    category: { primary: "Public Amenities", secondary: ["CSR", "Institutional"] },
    location: { city: "Thumakunta", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 0, currency: "INR", unit: "CSR" },
    timeline: { start: "2023", end: "2023", status: "Completed" },
    heroImage: "/images/projects/berger-csr-food-court/hero.jpg",
    gallery: [
      "/images/projects/berger-csr-food-court/1.jpg"
    ],
    scopeOfWork: ["Civil Construction", "Roofing", "Finishing"],
    description: "Berger Paints India Limited CSR Initiative: Construction of Food Court for Thumakunta Government High School.",
    isFeatured: true,
    displayOnHomeHero: true
  },

  // ---------------- WIPRO ----------------

  {
    id: "proj-rnd-center-wipro",
    slug: "rnd-center-wipro-peenya",
    title: "R&D Development Center",
    vertical: "Machine & SPM",
    client: {
      name: "Wipro Enterprises",
      slug: "wipro",
      logo: "/images/entities/wipro.png",
      group: "WIPRO"
    },
    category: { primary: "Institutional", secondary: [] },
    location: { city: "Peenya", state: "Karnataka", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2021", end: "2022", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Lab Construction", "Interiors"],
    description: "Construction of R&D Development Center at WIPRO Enterprises Limited.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-material-handling-wipro",
    slug: "material-handling-shed-wipro-hindupur",
    title: "Material Handling Tank Shed",
    vertical: "Machine & SPM",
    client: {
      name: "Wipro Enterprises",
      slug: "wipro",
      logo: "/images/entities/wipro.png",
      group: "WIPRO"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 100, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2021", end: "2022", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Structural Works", "Roofing"],
    description: "Construction of Material Handling Tank Shed at WIPRO Enterprises Limited.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-wipro-canteen",
    slug: "canteen-expansion-sheds-wipro",
    title: "Canteen & Expansion Sheds",
    vertical: "Machine & SPM",
    client: {
      name: "Wipro Infrastructure",
      slug: "wipro",
      logo: "/images/entities/wipro.png",
      group: "WIPRO"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2020", end: "2021", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Building Construction", "Shed Expansion"],
    description: "Construction of Canteen Buildings and Expansion Sheds for Wipro Infrastructure.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // ---------------- GOVERNMENT & INFRASTRUCTURE ----------------

  {
    id: "proj-gttc-gauribidanur",
    slug: "govt-tool-room-gauribidanur",
    title: "Government Tool Room Facility",
    vertical: "Public & Government",
    client: {
      name: "Govt Tool Room & Training Centre",
      slug: "gttc",
      logo: "/images/entities/govt-karnataka.png",
      group: "GOVT_KA"
    },
    entities: { partners: ["NSL Constructions Private Limited"] },
    category: { primary: "Institutional", secondary: [] },
    location: { city: "Gauribidanur", state: "Karnataka", country: "India" },
    projectValue: { amount: 1050, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2020", end: "2022", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Structural Works", "Facility Development"],
    description: "Construction of Govt Tool Room facility with JV with NSL.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-slum-upgradation-hospet",
    slug: "slum-upgradation-hospet",
    title: "Slum Upgradation – Hospet",
    vertical: "Public & Government",
    client: {
      name: "Hospet Municipality",
      slug: "hospet-municipality",
      logo: "/images/entities/govt-karnataka.png",
      group: "GOVT_KA"
    },
    entities: { partners: ["IVRCL"] },
    category: { primary: "Infrastructure", secondary: [] },
    location: { city: "Hospet", state: "Karnataka", country: "India" },
    projectValue: { amount: 660, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2019", end: "2021", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Housing", "Drainage", "Roads"],
    description: "Up gradation of 35 slums in Hospet municipality under sublet of IVRCL.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-slum-upgradation-chitradurga",
    slug: "slum-upgradation-chitradurga",
    title: "Slum Upgradation – Chitradurga",
    vertical: "Public & Government",
    client: {
      name: "Chitradurga Municipality",
      slug: "chitradurga-municipality",
      logo: "/images/entities/govt-karnataka.png",
      group: "GOVT_KA"
    },
    entities: { partners: ["IVRCL"] },
    category: { primary: "Infrastructure", secondary: [] },
    location: { city: "Chitradurga", state: "Karnataka", country: "India" },
    projectValue: { amount: 330, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2019", end: "2021", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Housing", "Drainage"],
    description: "Up gradation of 13 Slums in Chitradurga Municipality under sublet of IVRCL.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-kiadb-gauribidanur",
    slug: "kiadb-industrial-estate-gauribidanur",
    title: "KIADB Industrial Estate Roads",
    vertical: "Public & Government",
    client: {
      name: "KIADB",
      slug: "kiadb",
      logo: "/images/entities/kiadb.png",
      group: "KIADB"
    },
    category: { primary: "Infrastructure", secondary: [] },
    location: { city: "Gauribidanur", state: "Karnataka", country: "India" },
    projectValue: { amount: 710, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2019", end: "2021", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Road Development", "Drainage"],
    description: "Development of Layout and Construction of Roads in J.V at KIADB at Gauribidanur.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-kiadb-narasapur",
    slug: "kiadb-industrial-estate-narasapur",
    title: "KIADB Industrial Estate – Narasapur",
    vertical: "Public & Government",
    client: {
      name: "KIADB",
      slug: "kiadb",
      logo: "/images/entities/kiadb.png",
      group: "KIADB"
    },
    category: { primary: "Infrastructure", secondary: [] },
    location: { city: "Narasapur", state: "Karnataka", country: "India" },
    projectValue: { amount: 400, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2019", end: "2020", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Road Works", "Plot Development"],
    description: "Development of Layout and Construction of Roads in J.V at KIADB at Narasapur.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-state-highway-koppal",
    slug: "state-highway-yelburga-cocoonor",
    title: "State Highway – Yelburga to Cocoonor",
    vertical: "Public & Government",
    client: {
      name: "Public Works Department",
      slug: "pwd-karnataka",
      logo: "/images/entities/govt-karnataka.png",
      group: "GOVT_KA"
    },
    category: { primary: "Roads", secondary: ["Infrastructure"] },
    location: { city: "Koppal", state: "Karnataka", country: "India" },
    projectValue: { amount: 1750, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2018", end: "2020", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Road Widening", "Culverts"],
    description: "Construction of StateHighway from Yelburga to Cocoonor at Koppal Dt.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-railways",
    slug: "railway-ballast-thornagallu-hospet",
    title: "Railway Ballast Supply & Track Works",
    vertical: "Public & Government",
    client: {
      name: "Indian Railways",
      slug: "indian-railways",
      logo: "/images/entities/indian-railways.png",
      group: "RAILWAYS"
    },
    category: { primary: "Infrastructure", secondary: [] },
    location: { city: "Hospet", state: "Karnataka", country: "India" },
    projectValue: { amount: 155, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2015", end: "2017", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Track Construction", "Ballast Laying"],
    description: "Construction of Railway lines with supply and laying of ballast from reach Thornagal to Hospet.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-overhead-reservoir",
    slug: "overhead-reservoir-hindupur-constituency",
    title: "Overhead Sub-Reservoir Construction",
    vertical: "Public & Government",
    client: {
      name: "Hindupur Municipality",
      slug: "hindupur-municipality",
      logo: "/images/entities/govt-andhra-pradesh.jpg",
      group: "GOVT_AP"
    },
    category: { primary: "Water & STP", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2006", end: "2006", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Reservoir Construction", "Civil Works"],
    description: "Construction over head sub reservoir in Hindupur Constituency in 2006.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-badra-13",
    slug: "badra-canal-no-13-shivamoga",
    title: "Badra Canal – Canal No.13",
    vertical: "Public & Government",
    client: {
      name: "Irrigation Department",
      slug: "irrigation-dept",
      logo: "/images/entities/govt-karnataka.png",
      group: "GOVT_KA"
    },
    entities: { partners: ["IVRCL", "GVPR"] },
    category: { primary: "Infrastructure", secondary: [] },
    location: { city: "Shivamoga", state: "Karnataka", country: "India" },
    projectValue: { amount: 110, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2014", end: "2015", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Canal Lining", "Concrete Works"],
    description: "Up gradation of Canal No. 13 Badra Canal project at Shivamoga.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-badra-multi",
    slug: "badra-canal-multiple-davanagere",
    title: "Badra Canal – Multiple Canal Upgradation",
    vertical: "Public & Government",
    client: {
      name: "Irrigation Department",
      slug: "irrigation-dept",
      logo: "/images/entities/govt-karnataka.png",
      group: "GOVT_KA"
    },
    entities: { partners: ["IVRCL", "GVPR"] },
    category: { primary: "Infrastructure", secondary: [] },
    location: { city: "Davanagere", state: "Karnataka", country: "India" },
    projectValue: { amount: 350, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2014", end: "2015", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Canal Upgradation", "Civil Works"],
    description: "Up gradation of canal 9C, 7C, 150C, 135C, Badra Canal project near Davanagere.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-sri-rama-reddy",
    slug: "drinking-water-sri-rama-reddy-project",
    title: "Sri Rama Reddy Drinking Water Project",
    vertical: "Public & Government",
    client: {
      name: "Government Water Board",
      slug: "govt-water-board",
      logo: "/images/entities/govt-andhra-pradesh.jpg",
      group: "GOVT_AP"
    },
    entities: { partners: ["L&T"] },
    category: { primary: "Water & STP", secondary: [] },
    location: { city: "Andhra Pradesh", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 100, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2013", end: "2014", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Reservoir Construction", "Piping"],
    description: "Construction of over subhead reservoirs in Sri Rama Reddy Drinking Water project.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // ---------------- PRIVATE INFRA / INDUSTRIAL ----------------

  {
    id: "proj-legacy-suzlon",
    slug: "windmill-ghat-road-suzlon-gadag",
    title: "Windmill Ghat Road Construction – Suzlon",
    vertical: "Power & Energy",
    client: {
      name: "Suzlon Infrastructure",
      slug: "suzlon",
      logo: "/images/entities/suzlon.png",
      group: "SUZLON"
    },
    category: { primary: "Roads", secondary: [] },
    location: { city: "Gadag", state: "Karnataka", country: "India" },
    projectValue: { amount: 350, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2015", end: "2016", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Ghat Road", "Excavation"],
    description: "Construction of Ghat Road for wind mills at Mundergi in Gadag District.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-barooka",
    slug: "windmill-ghat-road-barooka-power",
    title: "Windmill Ghat Road & Platform – Barooka Power",
    vertical: "Power & Energy",
    client: {
      name: "Barooka Power Corporation",
      slug: "barooka-power",
      logo: "/images/entities/bhoruka.jpg",
      group: "BHORUKA"
    },
    category: { primary: "Roads", secondary: [] },
    location: { city: "Karnataka", state: "Karnataka", country: "India" },
    projectValue: { amount: 450, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2008", end: "2008", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Ghat Road", "Turbine Foundation"],
    description: "Construction of Ghat Road and platform for wind mill projects for Barooka Power.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-mb-smelters",
    slug: "furnace-slabs-mb-smelters",
    title: "Furnace Buildings & Industrial Sheds",
    vertical: "Machine & SPM",
    client: {
      name: "MB Smelters",
      slug: "mb-smeltors",
      logo: "/images/entities/mb-smeltors.png",
      group: "MB_SMELTERS"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Karnataka", state: "Karnataka", country: "India" },
    projectValue: { amount: 145, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2018", end: "2019", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Industrial Slabs", "Pump Houses", "Storage Sheds"],
    description: "Construction of Slabs for Furnace Buildings and Storage Sheds for M.B.Smeltors.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  {
    id: "proj-legacy-tirupati-steels",
    slug: "furnace-tirupati-steels",
    title: "Furnace Construction – Tirupati Steels",
    vertical: "Machine & SPM",
    client: {
      name: "Tirupati Steels",
      slug: "tirupati-steels",
      logo: "/images/entities/tirupati-steels.png",
      group: "TIRUPATI"
    },
    category: { primary: "Industrial", secondary: [] },
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2017", end: "2018", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Furnace Construction", "Refractory Works"],
    description: "Construction of Furnace at Tirupati Steels, Hindupur.",
    isFeatured: false,
    displayOnHomeHero: false
  }

];
