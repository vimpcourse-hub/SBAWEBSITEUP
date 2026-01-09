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

  const heroSlides = PROJECTS
    .filter(p => p.displayOnHomeHero || p.isFeatured)
    .slice(0, 5);

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

      {/* HERO */}
      <Hero slides={heroSlides} />

      {/* TRUST STATS */}
      <section id="trust-stats" className="bg-blue-900 text-white py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group md:border-r border-white/10 last:border-0 px-2">
                <stat.icon className="mx-auto mb-4 w-8 h-8 md:w-10 md:h-10 text-blue-300 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl md:text-5xl font-black mb-1 tracking-tighter tabular-nums leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 mt-2">
                  {stat.label}
                  <span className="block font-normal mt-0.5 opacity-40 lowercase tracking-widest">{stat.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <div className="text-blue-900 font-bold tracking-[0.5em] uppercase text-[10px] mb-6">Established 2011</div>
            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight uppercase tracking-tighter">
              Technical <br className="hidden md:block" />
              <span className="text-blue-900 font-black">Contracting.</span>
            </h2>
            <div className="space-y-6 text-base md:text-xl text-gray-600 font-light leading-relaxed">
              <p>
                Sri Balaji Associates is a premier civil and industrial firm specializing in high-stakes infrastructure.
              </p>
              <p>
                Trusted by <strong>Berger Paints</strong> and <strong>Wipro Enterprises</strong>, we maintain a 100% safety record.
              </p>
            </div>
            <div className="mt-12">
              <Link to="/about" className="group inline-flex items-center justify-center bg-blue-900 text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-all shadow-2xl">
                Capability Profile
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <img 
                src="/images/about/precison.jpg"
                alt="Precision Construction"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* QUOTE BOX */}
            <div className="absolute -bottom-12 -right-12 bg-blue-900 p-12 shadow-2xl max-w-sm hidden sm:block">
              <p className="text-white italic text-xl leading-relaxed mb-4 font-light">
                "Precision is our fundamental currency."
              </p>
              <div className="font-bold text-blue-300 uppercase text-[10px] tracking-[0.4em]">
                — C. Krishna Kumar
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-[10px] font-bold text-blue-900 uppercase tracking-[0.5em] mb-4">Operational Sectors</h2>
              <h3 className="text-3xl md:text-6xl font-bold text-gray-900 uppercase tracking-tighter leading-none">
                Specialized Verticals
              </h3>
            </div>
            <p className="text-gray-500 max-w-sm mt-4 md:mt-0 text-sm font-light">
              Select a sector below to explore verified constructed assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200">
            {INDUSTRIES.map((industry) => (
              <Link 
                key={industry.id} 
                to={`/projects?vertical=${encodeURIComponent(industry.title.toUpperCase())}`}
                className="group relative bg-white p-8 md:p-12 hover:bg-blue-900 transition-all duration-500 overflow-hidden border-b border-gray-100 md:border-r block"
              >
                <div className="relative z-10">

                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-white transition-all rounded-sm">
                      {getIcon(industry.iconName)}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500 text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 flex items-center">
                      Explore <ExternalLink size={10} className="ml-1" />
                    </div>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors uppercase tracking-tight">
                    {industry.title}
                  </h4>

                  <p className="text-gray-500 font-light text-xs md:text-sm mb-8 group-hover:text-blue-100 transition-colors">
                    {industry.description}
                  </p>

                  <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/40 px-4 py-2 bg-blue-900/60 backdrop-blur-sm">
                        View Projects
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
            <div>
              <div className="text-blue-900 font-bold tracking-[0.5em] uppercase text-[10px] mb-4">The Archive</div>
              <h2 className="text-3xl md:text-6xl font-bold text-gray-900 uppercase tracking-tighter">
                Portfolio Highlights
              </h2>
            </div>
            <Link to="/projects" className="mt-6 md:mt-0 bg-blue-900 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl">
              View All Assets
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <ClientCarousel />
      </section>

      {/* PARTNERS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <PartnerCarousel />
      </section>

      {/* CONTACT CTA */}
      <section className="py-32 md:py-48 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            Build <br className="md:hidden" /> Greatness.
          </h2>
          <p className="text-lg md:text-2xl text-blue-200 mb-12 font-light opacity-80 max-w-2xl mx-auto">
            Commission a technical consultation for your next industrial infrastructure asset.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto bg-white text-blue-900 px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-blue-50 transition-all shadow-2xl">
              Initiate Inquiry
            </Link>
            <Link to="/about" className="w-full sm:w-auto border border-white/40 text-white px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all backdrop-blur-md">
              Learn Methodology
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
