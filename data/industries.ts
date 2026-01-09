import { Industry } from "../types";

export const INDUSTRIES: Industry[] = [
  {
    id: "ind-fmcg",
    title: "FMCG & Consumer Goods",
    slug: "fmcg",
    description: "Industrial infrastructure for FMCG and consumer product companies.",
    iconName: "Package",
    image: "/images/industries/fmcg.jpg",
    categoryMapping: "Industrial"
  },
  {
    id: "ind-automobile",
    title: "Automobile & Auto Ancillaries",
    slug: "automobile",
    description: "Manufacturing and R&D facilities for automotive companies.",
    iconName: "Car",
    image: "/images/industries/automobile.jpg",
    categoryMapping: "Institutional"
  },
  {
    id: "ind-machine-spm",
    title: "Machine & SPM",
    slug: "machine-spm",
    description: "Heavy engineering, machine tooling, and SPM infrastructure projects.",
    iconName: "Cog",
    image: "/images/industries/machine-spm.jpg",
    categoryMapping: "Infrastructure"
  },
  {
    id: "ind-public",
    title: "Public & Government",
    slug: "public-government",
    description: "Government, public sector, and infrastructure development projects.",
    iconName: "Landmark",
    image: "/images/industries/public.jpg",
    categoryMapping: "Infrastructure"
  },
  {
    id: "ind-retail",
    title: "Retail & CSR",
    slug: "retail",
    description: "Retail developments and CSR-led public amenities.",
    iconName: "ShoppingBag",
    image: "/images/industries/retail.jpg",
    categoryMapping: "Public Amenities"
  }
];
