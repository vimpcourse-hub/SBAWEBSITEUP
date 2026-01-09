import { Project } from "../types";

export const PROJECTS: Project[] = [
  
  // 1. Berger Scrap & Barrel Yard
  {
    id: "proj-berger-scrap-yard",
    slug: "berger-scrap-barrel-yard-hindupur",
    title: "Scrap & Barrel Yard Construction",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["fmcg", "industrial-yard", "concrete-works", "drainage"],
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 600, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2023", end: "2024", status: "Completed" },
    // Verified Path: berger-barrel-scrap-yard
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

  // 2. British Paints Manufacturing Unit
  {
    id: "proj-british-paints-unit",
    slug: "british-paints-manufacturing-unit-hindupur",
    title: "Manufacturing Unit Construction – British Paints",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "British Paints",
      slug: "british-paints",
      logo: "/images/entities/british-paints.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["manufacturing", "industrial-building", "flooring", "civil"],
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 140, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2022", end: "2023", status: "Completed" },
    // Verified Path: british-paints-manufacturing-unit-gollapuram-hindupur
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
    displayOnHomeHero: false
  },

  // 3. Sri Sathya Sai Public Park (CSR)
  {
    id: "proj-sathya-sai-park",
    slug: "sri-sathya-sai-public-park-puttaparthi",
    title: "Sri Sathya Sai Public Park Development",
    vertical: "Retail & CSR",
    client: {
      name: "Joyalukkas Foundation",
      slug: "joyalukkas-foundation",
      logo: "/images/entities/joyalukkas.png"
    },
    category: { primary: "Public Amenities", secondary: [] },
    tags: ["csr", "park", "landscaping", "public-utility"],
    location: { city: "Puttaparthi", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 0, currency: "INR", unit: "CSR" },
    timeline: { start: "2021", end: "2022", status: "Completed" },
    // Verified Path: sri-sathya-sai-park-work-supported-by-joyalukkas-foundation-at-puttaparthi
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
    displayOnHomeHero: false
  },

  // 4. Berger RMS Canopy
  {
    id: "proj-berger-rms-canopy",
    slug: "berger-rms-canopy",
    title: "RMS Canopy Structure",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger",
      logo: "/images/entities/berger.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["steel-structure", "canopy", "fabrication"],
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 0, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2023", end: "2023", status: "Completed" },
    // Verified Path: berger-rms-canopy
    heroImage: "/images/projects/berger-rms-canopy/hero.jpg",
    gallery: [],
    scopeOfWork: ["Steel Canopy Structure", "Fabrication"],
    description: "RMS steel canopy structure developed within Berger industrial premises.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 5. ECO STP – Berger
  {
    id: "proj-eco-stp-berger",
    slug: "eco-stp-berger-hindupur",
    title: "Eco STP Construction",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger-paints",
      logo: "/images/entities/berger.png"
    },
    category: { primary: "Water & STP", secondary: [] },
    tags: ["stp", "waste-water", "treatment-plant", "environment"],
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 300, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2022", end: "2023", status: "Completed" },
    // Verified Path: sewage-treatment-plant
    heroImage: "/images/projects/sewage-treatment-plant/hero.jpg",
    gallery: [],
    scopeOfWork: ["STP Installation", "Civil Works"],
    description: "Construction of ECO STP at Berger Paints Limited.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 6. Rain Water Harvesting – Berger
  {
    id: "proj-rainwater-harvesting-berger",
    slug: "rainwater-harvesting-berger-hindupur",
    title: "Rain Water Harvesting System",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger-paints",
      logo: "/images/entities/berger.png"
    },
    category: { primary: "Water & STP", secondary: [] },
    tags: ["rainwater-harvesting", "sustainability", "drainage"],
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

  // 7. Workshop Sheds – Berger
  {
    id: "proj-workshop-shed-berger",
    slug: "workshop-sheds-berger-hindupur",
    title: "Workshop Shed Construction",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger-paints",
      logo: "/images/entities/berger.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["workshop-shed", "steel-structure", "industrial"],
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

  // 8. R&D Center – Wipro Peenya
  {
    id: "proj-rnd-center-wipro",
    slug: "rnd-center-wipro-peenya",
    title: "R&D Development Center",
    vertical: "Machine & SPM",
    client: {
      name: "Wipro Enterprises",
      slug: "wipro",
      logo: "/images/entities/wipro.png"
    },
    category: { primary: "Institutional", secondary: [] },
    tags: ["rnd-lab", "institutional-building", "technology"],
    location: { city: "Peenya", state: "Karnataka", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2021", end: "2022", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Lab Construction", "Interiors"],
    description: "Construction of R&D Development Center at WIPRO Enterprises Limited, Peenya.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 9. Material Handling Tank Shed – Wipro
  {
    id: "proj-material-handling-wipro",
    slug: "material-handling-shed-wipro-hindupur",
    title: "Material Handling Tank Shed",
    vertical: "Machine & SPM",
    client: {
      name: "Wipro Enterprises",
      slug: "wipro",
      logo: "/images/entities/wipro.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["tank-shed", "material-handling", "industrial-structure"],
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

  // 10. Govt Tool Room – Gauribidanur (JV NSL)
  {
    id: "proj-gttc-gauribidanur",
    slug: "govt-tool-room-gauribidanur",
    title: "Government Tool Room Facility",
    vertical: "Public & Government",
    client: {
      name: "Govt Tool Room & Training Centre",
      slug: "gttc",
      logo: "/images/entities/govt-karnataka.png"
    },
    entities: { partners: ["NSL Constructions Private Limited"] },
    category: { primary: "Institutional", secondary: [] },
    tags: ["government", "training-facility", "institutional", "jv-project"],
    location: { city: "Gauribidanur", state: "Karnataka", country: "India" },
    projectValue: { amount: 1050, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2020", end: "2022", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Structural Works", "Facility Development"],
    description: "Construction of Govt Tool Room facility at Gauribidanur Ind. Estate with JV with NSL.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 11. Slum Upgradation – Hospet
  {
    id: "proj-slum-upgradation-hospet",
    slug: "slum-upgradation-hospet",
    title: "Slum Upgradation – Hospet Municipality",
    vertical: "Public & Government",
    client: {
      name: "Hospet Municipality",
      slug: "hospet-municipality",
      logo: "/images/entities/govt-karnataka.png"
    },
    entities: { partners: ["IVRCL"] },
    category: { primary: "Infrastructure", secondary: [] },
    tags: ["urban-development", "housing", "municipal-project"],
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

  // 12. Slum Upgradation – Chitradurga
  {
    id: "proj-slum-upgradation-chitradurga",
    slug: "slum-upgradation-chitradurga",
    title: "Slum Upgradation – Chitradurga Municipality",
    vertical: "Public & Government",
    client: {
      name: "Chitradurga Municipality",
      slug: "chitradurga-municipality",
      logo: "/images/entities/govt-karnataka.png"
    },
    entities: { partners: ["IVRCL"] },
    category: { primary: "Infrastructure", secondary: [] },
    tags: ["slum-rehabilitation", "urban-infra", "municipal"],
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

  // 13. Railway Ballast & Track Works
  {
    id: "proj-legacy-railways",
    slug: "railway-ballast-thornagallu-hospet",
    title: "Railway Ballast Supply & Track Works",
    vertical: "Public & Government",
    client: {
      name: "Indian Railways",
      slug: "indian-railways",
      logo: "/images/entities/indian-railways.png"
    },
    category: { primary: "Infrastructure", secondary: [] },
    tags: ["railway", "track-laying", "ballast", "transport-infra"],
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

  // 14. Overhead Reservoir – Hindupur
  {
    id: "proj-legacy-overhead-reservoir",
    slug: "overhead-reservoir-hindupur-constituency",
    title: "Overhead Sub-Reservoir Construction",
    vertical: "Public & Government",
    client: {
      name: "Hindupur Municipality",
      slug: "hindupur-municipality",
      logo: "/images/entities/govt-andhra-pradesh.png"
    },
    category: { primary: "Water & STP", secondary: [] },
    tags: ["water-supply", "overhead-tank", "drinking-water"],
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

  // 15. Windmill Ghat Road – Suzlon
  {
    id: "proj-legacy-suzlon",
    slug: "windmill-ghat-road-suzlon-gadag",
    title: "Windmill Ghat Road Construction – Suzlon",
    vertical: "Power & Energy",
    client: {
      name: "Suzlon Infrastructure",
      slug: "suzlon",
      logo: "/images/entities/suzlon.png"
    },
    category: { primary: "Roads", secondary: [] },
    tags: ["ghat-road", "wind-energy", "hill-roads"],
    location: { city: "Gadag", state: "Karnataka", country: "India" },
    projectValue: { amount: 350, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2015", end: "2016", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Ghat Road", "Excavation"],
    description: "Construction of Ghat Road for wind mills at Mundergi in Gadag District for Suzlon Infrastructure.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 16. Windmill Ghat Road – Barooka Power
  {
    id: "proj-legacy-barooka",
    slug: "windmill-ghat-road-barooka-power",
    title: "Windmill Ghat Road & Platform – Barooka Power",
    vertical: "Power & Energy",
    client: {
      name: "Barooka Power Corporation",
      slug: "barooka-power",
      logo: "/images/entities/bhoruka.png"
    },
    category: { primary: "Roads", secondary: [] },
    tags: ["windmill-foundation", "road-construction", "energy-project"],
    location: { city: "Karnataka", state: "Karnataka", country: "India" },
    projectValue: { amount: 450, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2008", end: "2008", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Ghat Road", "Turbine Foundation"],
    description: "Construction of Ghat Road and platform and foundation for wind mill projects for Barooka Power.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 17. Badra Canal No.13 – Shivamoga
  {
    id: "proj-legacy-badra-13",
    slug: "badra-canal-no-13-shivamoga",
    title: "Badra Canal – Canal No.13",
    vertical: "Public & Government",
    client: {
      name: "Irrigation Department",
      slug: "irrigation-dept",
      logo: "/images/entities/govt-karnataka.png"
    },
    entities: { partners: ["IVRCL", "GVPR"] },
    category: { primary: "Infrastructure", secondary: [] },
    tags: ["canal-lining", "irrigation", "water-management"],
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

  // 18. Badra Canal Multiple – Davanagere
  {
    id: "proj-legacy-badra-multi",
    slug: "badra-canal-multiple-davanagere",
    title: "Badra Canal – Multiple Canal Upgradation",
    vertical: "Public & Government",
    client: {
      name: "Irrigation Department",
      slug: "irrigation-dept",
      logo: "/images/entities/govt-karnataka.png"
    },
    entities: { partners: ["IVRCL", "GVPR"] },
    category: { primary: "Infrastructure", secondary: [] },
    tags: ["canal-upgradation", "irrigation-works"],
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

  // 19. Sri Rama Reddy Drinking Water Project (L&T)
  {
    id: "proj-legacy-sri-rama-reddy",
    slug: "drinking-water-sri-rama-reddy-project",
    title: "Sri Rama Reddy Drinking Water Project",
    vertical: "Public & Government",
    client: {
      name: "Government Water Board",
      slug: "govt-water-board",
      logo: "/images/entities/govt-andhra-pradesh.png"
    },
    entities: { partners: ["L&T"] },
    category: { primary: "Water & STP", secondary: [] },
    tags: ["drinking-water", "pipeline", "sublet-project"],
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

  // 20. Furnace Buildings & Industrial Sheds – MB Smelters
  {
    id: "proj-legacy-mb-smelters",
    slug: "furnace-slabs-mb-smelters",
    title: "Furnace Buildings & Industrial Sheds",
    vertical: "Machine & SPM",
    client: {
      name: "MB Smelters",
      slug: "mb-smeltors",
      logo: "/images/entities/mb-smeltors.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["furnace-foundation", "pump-house", "industrial-sheds"],
    location: { city: "Karnataka", state: "Karnataka", country: "India" },
    projectValue: { amount: 145, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2018", end: "2019", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Industrial Slabs", "Pump Houses", "Storage Sheds"],
    description: "Construction of Slabs for Furnace Buildings, Pump Houses, Panel Rooms, Storage Sheds for M.B.Smeltors.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 21. Compound Wall & Pump Houses – Berger
  {
    id: "proj-legacy-berger-wall",
    slug: "compound-wall-pump-house-berger",
    title: "Compound Wall & Pump Houses",
    vertical: "FMCG & Consumer Goods",
    client: {
      name: "Berger Paints Limited",
      slug: "berger-paints",
      logo: "/images/entities/berger.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["compound-wall", "pump-house", "civil-works"],
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

  // 22. Canteen & Expansion Sheds – Wipro (Mapped to CSR Food Court images as closest fit)
  {
    id: "proj-legacy-wipro-canteen",
    slug: "canteen-expansion-sheds-wipro",
    title: "Canteen & Expansion Sheds",
    vertical: "Machine & SPM",
    client: {
      name: "Wipro Infrastructure",
      slug: "wipro",
      logo: "/images/entities/wipro.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["canteen-building", "shed-expansion", "factory-infra"],
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2020", end: "2021", status: "Completed" },
    // Verified Path: berger-csr-food-court (Using these images as they are the only "Canteen/Food" related ones available)
    heroImage: "/images/projects/berger-csr-food-court/hero.jpg",
    gallery: [
      "/images/projects/berger-csr-food-court/1.jpg"
    ],
    scopeOfWork: ["Building Construction", "Shed Expansion"],
    description: "Construction of Canteen Buildings and Expansion Sheds for Wipro Infrastructure.",
    isFeatured: true,
    displayOnHomeHero: false
  },

  // 23. KIADB Industrial Estate Roads – Gauribidanur
  {
    id: "proj-kiadb-gauribidanur",
    slug: "kiadb-industrial-estate-gauribidanur",
    title: "KIADB Industrial Estate Roads",
    vertical: "Public & Government",
    client: {
      name: "KIADB",
      slug: "kiadb",
      logo: "/images/entities/kiadb.png"
    },
    category: { primary: "Infrastructure", secondary: [] },
    tags: ["industrial-layout", "internal-roads", "drainage"],
    location: { city: "Gauribidanur", state: "Karnataka", country: "India" },
    projectValue: { amount: 710, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2019", end: "2021", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Road Development", "Drainage"],
    description: "Development of Layout and Construction of Roads in J.V at KIADB at Gauribidanur Industrial Estate.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 24. Furnace Construction – Tirupati Steels
  {
    id: "proj-legacy-tirupati-steels",
    slug: "furnace-tirupati-steels",
    title: "Furnace Construction – Tirupati Steels",
    vertical: "Machine & SPM",
    client: {
      name: "Tirupati Steels",
      slug: "tirupati-steels",
      logo: "/images/entities/tirupati-steels.png"
    },
    category: { primary: "Industrial", secondary: [] },
    tags: ["furnace-installation", "refractory", "steel-plant"],
    location: { city: "Hindupur", state: "Andhra Pradesh", country: "India" },
    projectValue: { amount: 150, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2017", end: "2018", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Furnace Construction", "Refractory Works"],
    description: "Construction of Furnace at Tirupati Steels, Hindupur.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 25. KIADB Industrial Estate – Narasapur
  {
    id: "proj-kiadb-narasapur",
    slug: "kiadb-industrial-estate-narasapur",
    title: "KIADB Industrial Estate – Narasapur",
    vertical: "Public & Government",
    client: {
      name: "KIADB",
      slug: "kiadb",
      logo: "/images/entities/kiadb.png"
    },
    category: { primary: "Infrastructure", secondary: [] },
    tags: ["industrial-layout", "plot-development", "road-works"],
    location: { city: "Narasapur", state: "Karnataka", country: "India" },
    projectValue: { amount: 400, currency: "INR", unit: "Lakhs" },
    timeline: { start: "2019", end: "2020", status: "Completed" },
    heroImage: "/images/projects/project-placeholder.jpg",
    gallery: [],
    scopeOfWork: ["Road Works", "Plot Development"],
    description: "Development of Layout and Construction of Roads in J.V at KIADB at Narasapur in Kolar Dt.",
    isFeatured: false,
    displayOnHomeHero: false
  },

  // 26. State Highway – Yelburga to Cocoonor
  {
    id: "proj-state-highway-koppal",
    slug: "state-highway-yelburga-cocoonor",
    title: "State Highway Construction – Yelburga to Cocoonor",
    vertical: "Public & Government",
    client: {
      name: "Public Works Department",
      slug: "pwd-karnataka",
      logo: "/images/entities/govt-karnataka.png"
    },
    category: { primary: "Roads", secondary: ["Infrastructure"] },
    tags: ["highway", "roads", "infrastructure"],
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
];
