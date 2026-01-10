import { Industry } from "../types";

export const INDUSTRIES: Industry[] = [
  {
    id: "fmcg",
    title: "FMCG & Consumer Goods",
    slug: "fmcg-consumer-goods",
    description: "Industrial infrastructure for FMCG and consumer product companies.",
    iconName: "Package",
    image: "/industries/fmcg.jpg",
    categoryMapping: "FMCG & Consumer Goods"
  },
  {
    id: "automobile",
    title: "Automobile & Auto Ancillaries",
    slug: "automobile-auto-ancillaries",
    description: "Manufacturing and R&D facilities for automotive companies.",
    iconName: "Settings",
    image: "/industries/automobile.jpg",
    categoryMapping: "Automobile & Auto Ancillaries"
  },
  {
    id: "machine",
    title: "Machine & SPM",
    slug: "machine-spm",
    description: "Heavy engineering, machine tooling, and SPM infrastructure projects.",
    iconName: "Truck",
    image: "/industries/machine-spm.jpg",
    categoryMapping: "Machine & SPM"
  },
  {
    id: "public",
    title: "Public & Government",
    slug: "public-government",
    description: "Government, public sector, and infrastructure development projects.",
    iconName: "HardHat",
    image: "/industries/public-government.jpg",
    categoryMapping: "Public & Government"
  },
  {
    id: "retail",
    title: "Retail & CSR",
    slug: "retail-csr",
    description: "Retail developments and CSR-led public amenities.",
    iconName: "ShoppingCart",
    image: "/industries/retail-csr.jpg",
    categoryMapping: "Retail & CSR"
  },
];
