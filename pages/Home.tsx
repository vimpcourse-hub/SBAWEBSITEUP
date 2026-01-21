import React from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ClientCarousel from "../components/ClientCarousel";
import PartnerCarousel from "../components/PartnerCarousel";
import { PROJECTS } from "../data/projects";
import { INDUSTRIES } from "../data/industries";
import {
  Users, HardHat, TrendingUp, Clock, CheckCircle,
  Package, Settings, Truck, ShoppingCart, Wind,
  Dna, ArrowRight, Droplets, GraduationCap, FlaskConical, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {

  /* ================= HERO SLIDES ================= */
  const heroSlides = PROJECTS
    .filter(
      p =>
        (p.displayOnHomeHero || p.isFeatured) &&
        p.heroImage &&
        p.heroImage.trim() !== ""
    )
    .slice(0, 6);

  const featuredProjects = PROJECTS
    .filter(p => p.isFeatured)
    .slice(0, 3);

  /* ================= STATS ================= */
  const stats = [
    { label: "Asset Valuation", value: "40+", unit: "Crore", icon: TrendingUp },
    { label: "Technical Team", value: "25+", unit: "Experts", icon: Users },
    { label: "Heritage", value: "13+", unit: "Years", icon: Clock },
    { label: "Compliance", value: "100%", unit: "Rate", icon: CheckCircle },
  ];

  /* ================= ICON MAP ================= */
  const getIcon = (name: string) => {
    switch (name) {
      case "Package": return <Package size={32} />;
      case "Settings": return <Settings size={32} />;
      case "Truck": return <Truck size={32} />;
      case "ShoppingCart": return <ShoppingCart size={32} />;
      case "Wind": return <Wind size={32} />;
      case "Dna": return <Dna size={32} />;
      case "Droplets": return <Droplets size={32} />;
      case "GraduationCap": return <GraduationCap size={32} />;
      case "FlaskConical": return <FlaskConical size={32} />;
      default: return <HardHat size={32} />;
    }
  };

  return (
    <div className="bg-white pt-16 md:pt-20">

      {/* ================= HERO ================= */}
      <Hero slides={heroSlides} />

      {/* ================= TRUST STATS ================= */}
      <section className="bg-blue-900 text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto mb-4 w-8 h-8 text-blue-300 opacity-70" />
                <div className="text-3xl md:text-5xl font-black mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-blue-200">
                  {stat.label}
                  <div className="opacity-50">{stat.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <div className="text-blue-900 tracking-[0.4em] text-[10px] uppercase mb-6">
            Established 2011
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-8">
            Technical <br />
            <span className="text-blue-900">Contracting</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Sri Balaji Associates is a premier civil and industrial firm
            specializing in high-stakes infrastructure.
          </p>
          <p className="text-gray-600 mb-10">
            Trusted by <b>Berger Paints</b> and <b>Wipro Enterprises</b>, we
            maintain a 100% safety record.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-blue-900 text-white px-10 py-5 uppercase text-[10px] tracking-widest"
          >
            Capability Profile
            <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>

        <div className="aspect-[4/5] bg-gray-200 overflow-hidden border-8 border-white shadow-xl">
          <img src="/about/precision.jpg" className="w-full h-full object-cover" />
        </div>

      </section>

      {/* ================= VERTICALS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20 flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-blue-900 mb-4">
                Operational Sectors
              </h2>
              <h3 className="text-3xl md:text-6xl font-black uppercase">
                Specialized Verticals
              </h3>
            </div>
            <p className="text-gray-500 max-w-sm mt-6 md:mt-0">
              Select a sector to explore verified constructed assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gray-200">

            {INDUSTRIES.map(industry => (
              <Link
                key={industry.id}
                to={`/projects?vertical=${encodeURIComponent(industry.title)}`}
                className="group p-10 bg-white hover:bg-blue-900 transition border-b border-r"
              >

                <div className="mb-8 flex justify-between">
                  <div className="w-14 h-14 bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-white">
                    {getIcon(industry.iconName)}
                  </div>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-white uppercase">
                  {industry.title}
                </h4>

                <p className="text-gray-500 text-sm mb-8 group-hover:text-blue-200">
                  {industry.description}
                </p>

                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={industry.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between mb-16">
            <h2 className="text-3xl md:text-6xl font-black uppercase">
              Portfolio Highlights
            </h2>
            <Link
              to="/projects"
              className="bg-blue-900 text-white px-10 py-4 text-[10px] uppercase tracking-widest"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <ClientCarousel />

      {/* ================= PARTNERS ================= */}
      <PartnerCarousel />

      {/* ================= CTA ================= */}
      <section className="py-32 bg-blue-900 text-white text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase mb-10">
          Build Greatness
        </h2>
        <p className="text-blue-200 mb-10 max-w-2xl mx-auto">
          Commission a technical consultation for your next industrial asset.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-12 py-5 uppercase text-[10px] tracking-widest"
          >
            Initiate Inquiry
          </Link>
          <Link
            to="/about"
            className="border border-white px-12 py-5 uppercase text-[10px] tracking-widest"
          >
            Learn Methodology
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
