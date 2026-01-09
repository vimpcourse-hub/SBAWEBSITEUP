
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Use a string path for the logo instead of a module import to prevent resolution errors
const logoPath = "/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t-4 border-[#002366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-8 p-3 bg-white inline-block rounded-sm">
              <img 
                src={logoPath} 
                alt="SBA Footer Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const fallback = document.createElement('div');
                    fallback.className = "fallback-text flex flex-col";
                    fallback.innerHTML = `<span class="text-3xl font-black text-slate-900 tracking-tighter leading-none">SBA</span><span class="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-900 mt-2">Sri Balaji Associates</span>`;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-8 font-light text-slate-400">
              Technical civil contracting and industrial infrastructure assets. Delivering engineering integrity since 2011.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-8">Capabilities</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><Link to="/projects?category=Industrial" className="hover:text-blue-400 transition-colors block">Industrial Yards</Link></li>
              <li><Link to="/projects?category=Infrastructure" className="hover:text-blue-400 transition-colors block">Public Assets</Link></li>
              <li><Link to="/projects?category=Roads" className="hover:text-blue-400 transition-colors block">Highways & Ghats</Link></li>
              <li><Link to="/projects?category=Sewage / STP / Water" className="hover:text-blue-400 transition-colors block">Eco-STP Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-8">Corporate</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><Link to="/clients" className="hover:text-blue-400 transition-colors">Client Archive</Link></li>
              <li><Link to="/partnerships" className="hover:text-blue-400 transition-colors">JV Alliances</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-400 transition-colors">Verified Feedback</Link></li>
              <li><Link to="/awards" className="hover:text-blue-400 transition-colors">Standards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-6 text-[11px] font-bold tracking-widest uppercase">
              <li className="flex items-start"><MapPin className="w-5 h-5 mr-4 text-blue-400 flex-shrink-0" /><span className="font-light normal-case"># 26-4-1978, Melapur, Hindupur, AP</span></li>
              <li className="flex items-center"><Phone className="w-5 h-5 mr-4 text-blue-400" />+91 99634 62203</li>
              <li className="flex items-center"><Mail className="w-5 h-5 mr-4 text-blue-400" /><span className="font-light normal-case">sribalajiassociates256@gmail.com</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-800 text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Sri Balaji Associates. Technical Execution Integrity.</p>
          <div className="space-x-8"><Link to="/mission" className="hover:text-white">Our Mandate</Link></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
