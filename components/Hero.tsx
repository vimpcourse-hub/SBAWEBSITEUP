import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ClientCarousel from '../components/ClientCarousel';
import PartnerCarousel from '../components/PartnerCarousel';
import { PROJECTS } from '../data/projects';
import { INDUSTRIES } from '../data/industries';
import { 
  Users, HardHat, TrendingUp, Clock, CheckCircle, 
  Package, Settings, Truck, ShoppingCart, Wind, 
  Dna, ArrowRight, Droplets, GraduationCap, FlaskConical, ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  // ✅ AUTO HERO SLIDES — ANY PROJECT WITH heroImage WILL SHOW
  const heroSlides = PROJECTS.filter(
    p => p.heroImage && p.heroImage.trim() !== ""
  );

  // ✅ FEATURED PROJECTS (UNCHANGED)
  const featuredProjects = PROJECTS.filter(p => p.isFeatured).slice(0, 3);

  const stats = [
    { label: 'Asset Valuation', value: '40+', unit: 'Crore', icon: TrendingUp },
    { label: 'Technical Team', value: '25+', unit: 'Experts', icon: Users },
    { label: 'Heritage', value: '13+', unit: 'Years', icon: Clock },
    { label: 'Compliance', value: '100%', unit: 'Rate', icon: CheckCircle },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Package': return <Package size={32} />;
      case 'Settings': return <Settings size={32} />;
      case 'Truck': return <Truck size={32} />;
      case 'ShoppingCart': return <ShoppingCart size={32} />;
      case 'Wind': return <Wind size={32} />;
      case 'Dna': return <Dna size={32} />;
      case 'Droplets': return <Droplets size={32} />;
      case 'GraduationCap': return <GraduationCap size={32} />;
      case 'FlaskConical': return <FlaskConical size={32} />;
      default: return <HardHat size={32} />;
    }
  };

  return (
    <div className="bg-white pt-16 md:pt-20">

      {/* ================= HERO ================= */}
      <Hero slides={heroSlides} />

      {/* ================= TRUST STATS ================= */}
      <section id="trust-stats" className="bg-blue-900 text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:border-r border-white/10 last:border-0 px-2">
                <stat.icon className="mx-auto mb-4 w-8 h-8 md:w-10 md:h-10 text-blue-300 opacity-80" />
                <div className="text-3xl md:text-5xl font-black mb-1 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 mt-2">
                  {stat.label}
                  <span className="block opacity-60">{stat.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <div className="text-blue-900 font-bold tracking-[0.5em] uppercase text-[10px] mb-6">
              Established 2011
            </div>

            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">
              Technical <br className="hidden md:block" />
              <span className="text-blue-900 font-black">Contracting.</span>
            </h2>

            <div className="space-y-6 text-base md:text-xl text-gray-600">
              <p>
                Sri Balaji Associates is a premier civil and industrial firm specializing in
                high-stakes infrastructure.
              </p>
              <p>
                Trusted by <strong>Berger Paints</strong> and <strong>Wipro Enterprises</strong>,
                we maintain a 100% safety record.
              </p>
            </div>

            <div className="mt-12">
              <Link
                to="/about"
                className="inline-flex items-center bg-blue-900 text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-all"
              >
                Capability Profile
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <img 
                src="/images/about/precison.jpg"
                alt="Precision Construction"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-12 -right-12 bg-blue-900 p-10 shadow-2xl max-w-sm hidden sm:block">
              <p className="text-white italic text-xl mb-4">
                "Precision is our fundamental currency."
              </p>
              <div className="font-bold text-blue-300 uppercase text-[10px] tracking-[0.4em]">
                — C. Krishna Kumar
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-[10px] font-bold text-blue-900 uppercase tracking-[0.5em] mb-4">
                Operational Sectors
              </h2>
              <h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">
                Specialized Verticals
              </h3>
            </div>
            <p className="text-gray-500 max-w-sm mt-4 text-sm">
              Select a sector to explore verified constructed assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200">
            {INDUSTRIES.map((industry) => (
              <Link 
                key={industry.id} 
                to={`/projects?vertical=${encodeURIComponent(industry.title.toUpperCase())}`}
                className="group bg-white p-8 hover:bg-blue-900 transition-all border-b border-gray-100 md:border-r block"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-900 flex items-center justify-center mb-6">
                  {getIcon(industry.iconName)}
                </div>

                <h4 className="text-xl font-bold mb-4 group-hover:text-white">
                  {industry.title}
                </h4>

                <p className="text-gray-500 text-sm mb-6 group-hover:text-blue-100">
                  {industry.description}
                </p>

                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                  />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between mb-16 items-end">
            <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">
              Portfolio Highlights
            </h2>
            <Link to="/projects" className="bg-blue-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= CLIENTS & PARTNERS ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <ClientCarousel />
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <PartnerCarousel />
      </section>

    </div>
  );
};

export default Home;
