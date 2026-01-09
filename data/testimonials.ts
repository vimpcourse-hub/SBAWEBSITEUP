
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  company: string;
  logo: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Sri Balaji Associates' commitment to safety and engineering precision during the construction of our Scrap and Barrel yard was exemplary. They handled complex industrial requirements with absolute professionalism.",
    author: "Technical Director",
    designation: "Operations Head",
    company: "Berger Paints Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Berger_Paints_Logo.svg"
  },
  {
    id: 't2',
    quote: "Working with SBA on our R&D facility in Peenya was a seamless experience. Their attention to detail in technical laboratory infrastructure sets them apart from standard civil contractors.",
    author: "Infrastructure Lead",
    designation: "Global Real Estate",
    company: "Wipro Enterprises Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo.svg"
  },
  {
    id: 't3',
    quote: "The Suzlon Ghat Road project required executing works in extremely difficult terrain. SBA delivered the road infrastructure on time, enabling our wind turbine logistics to proceed without delay.",
    author: "Project Manager",
    designation: "Wind Energy Division",
    company: "Suzlon Infrastructure Ltd",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Suzlon_Logo.svg/1200px-Suzlon_Logo.svg.png"
  },
  {
    id: 't4',
    quote: "The KIADB layout road development project was managed with high diligence. SBA's ability to coordinate public infrastructure needs while maintaining quality is commendable.",
    author: "Zonal Engineer",
    designation: "Industrial Development",
    company: "KIADB",
    logo: "https://picsum.photos/id/2/200/200"
  }
];
