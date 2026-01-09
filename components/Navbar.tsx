
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Use a string path for the logo instead of a module import to prevent resolution errors
const logoPath = "/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileClientsOpen, setMobileClientsOpen] = useState(false);

  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const aboutLinks = [
    { name: 'CORPORATE PROFILE', to: '/about#profile' },
    { name: 'WHY SBA?', to: '/about#why-us' },
    { name: 'FOUNDER MESSAGE', to: '/about#founder-message' },
    { name: 'OUR HISTORY', to: '/about#history' },
    { name: 'AWARDS & RECOGNITION', to: '/awards' },
  ];

  const clientLinks = [
    { name: 'OUR CLIENTS', to: '/clients' },
    { name: 'TESTIMONIALS', to: '/testimonials' },
    { name: 'PARTNERSHIPS', to: '/partnerships' },
  ];

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileAboutOpen(false);
    setMobileClientsOpen(false);
  }, [location]);

  const BrandLogo = ({ className = "h-12 md:h-16" }: { className?: string }) => (
    <div className={`flex items-center py-1 ${className}`}>
      <img 
        src={logoPath} 
        alt="Sri Balaji Associates" 
        className="h-full w-auto object-contain transition-transform group-hover:scale-105 duration-500"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.fallback-text')) {
            const fallback = document.createElement('div');
            fallback.className = "fallback-text flex flex-col";
            fallback.innerHTML = `<span class="text-2xl font-black text-[#002366] leading-none">SBA</span><span class="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">Sri Balaji Associates</span>`;
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );

  return (
    <nav ref={navRef} className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <BrandLogo />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 h-full">
            <Link to="/" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${location.pathname === '/' ? 'text-[#002366] border-b-2 border-[#002366] pb-1' : 'text-slate-500 hover:text-[#002366]'}`}>HOME</Link>
            
            <div className="relative h-full flex items-center group" 
                 onMouseEnter={() => setActiveDropdown('about')} 
                 onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`flex items-center text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${location.pathname.startsWith('/about') || location.pathname === '/awards' ? 'text-[#002366]' : 'text-slate-500 hover:text-[#002366]'}`}>
                ABOUT US <ChevronDown className={`ml-1.5 w-3 h-3 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 w-72 bg-white border border-gray-100 shadow-2xl transition-all origin-top pt-2 ${activeDropdown === 'about' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'}`}>
                <div className="bg-white border-t-2 border-[#002366]">
                  {aboutLinks.map((link) => (
                    <Link key={link.name} to={link.to} className="flex items-center px-8 py-5 text-[10px] font-bold text-slate-600 hover:text-[#002366] hover:bg-slate-50 border-b border-gray-50 last:border-0 uppercase tracking-widest transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/projects" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${location.pathname === '/projects' ? 'text-[#002366] border-b-2 border-[#002366] pb-1' : 'text-slate-500 hover:text-[#002366]'}`}>THE ARCHIVE</Link>
            
            <div className="relative h-full flex items-center group" 
                 onMouseEnter={() => setActiveDropdown('clients')} 
                 onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`flex items-center text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${['/clients', '/testimonials', '/partnerships'].includes(location.pathname) ? 'text-[#002366]' : 'text-slate-500 hover:text-[#002366]'}`}>
                CLIENTS <ChevronDown className={`ml-1.5 w-3 h-3 transition-transform ${activeDropdown === 'clients' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 w-72 bg-white border border-gray-100 shadow-2xl transition-all origin-top pt-2 ${activeDropdown === 'clients' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'}`}>
                <div className="bg-white border-t-2 border-[#002366]">
                  {clientLinks.map((link) => (
                    <Link key={link.name} to={link.to} className="flex items-center px-8 py-5 text-[10px] font-bold text-slate-600 hover:text-[#002366] hover:bg-slate-50 border-b border-gray-50 last:border-0 uppercase tracking-widest transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/mission" className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${location.pathname === '/mission' ? 'text-[#002366] border-b-2 border-[#002366] pb-1' : 'text-slate-500 hover:text-[#002366]'}`}>PRINCIPLES</Link>
            
            <Link to="/contact" className="bg-[#002366] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg ml-4">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="text-[#002366] p-2" aria-label="Open Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-white z-[60] lg:hidden transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 border-b border-gray-100">
          <BrandLogo className="h-10" />
          <button onClick={() => setIsOpen(false)} className="text-[#002366] p-2" aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-6 h-[calc(100vh-80px)] flex flex-col overflow-y-auto">
          <div className="flex flex-col">
            <Link to="/" className={`py-6 text-[11px] font-bold border-b border-gray-50 uppercase tracking-[0.2em] ${location.pathname === '/' ? 'text-[#002366]' : 'text-slate-700'}`}>HOME</Link>
            <Link to="/projects" className={`py-6 text-[11px] font-bold border-b border-gray-50 uppercase tracking-[0.2em] ${location.pathname === '/projects' ? 'text-[#002366]' : 'text-slate-700'}`}>THE ARCHIVE</Link>
            <Link to="/mission" className={`py-6 text-[11px] font-bold border-b border-gray-50 uppercase tracking-[0.2em] ${location.pathname === '/mission' ? 'text-[#002366]' : 'text-slate-700'}`}>PRINCIPLES</Link>
            
            <div className="border-b border-gray-50">
              <button 
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between py-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700"
              >
                ABOUT US <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? 'max-h-[500px] bg-slate-50' : 'max-h-0'}`}>
                {aboutLinks.map(link => (
                  <Link key={link.name} to={link.to} className="flex items-center py-4 pl-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-[#002366] border-b border-white last:border-0">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-b border-gray-50">
              <button 
                onClick={() => setMobileClientsOpen(!mobileClientsOpen)}
                className="w-full flex items-center justify-between py-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700"
              >
                CLIENTS <ChevronDown size={16} className={`transition-transform duration-300 ${mobileClientsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileClientsOpen ? 'max-h-[500px] bg-slate-50' : 'max-h-0'}`}>
                {clientLinks.map(link => (
                  <Link key={link.name} to={link.to} className="flex items-center py-4 pl-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-[#002366] border-b border-white last:border-0">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10 pb-6">
            <Link to="/contact" className="block w-full bg-[#002366] text-white py-5 text-center text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-black transition-colors">
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
