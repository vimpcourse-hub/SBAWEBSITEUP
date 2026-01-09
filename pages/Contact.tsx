
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { config } from '../config';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    try {
      if (config.FORM_ENDPOINT.includes("your-form-id")) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
        const response = await fetch(config.FORM_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (!response.ok) throw new Error('Submission failed');
      }
      setSubmitted(true);
      formElement.reset();
    } catch (err) {
      setError("Transmission error. Please email us directly at " + config.SUPPORT_EMAIL);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 md:pt-36">
      <section className="bg-gray-900 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Contact BG" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="text-blue-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Corporate Channels</div>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 tracking-tighter uppercase leading-none">Connect With <br className="hidden md:block" />SBA.</h1>
          <p className="text-blue-400 font-bold uppercase tracking-[0.4em] text-xs md:text-sm">Industrial Expertise At Your Service</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">Inquiry Portal</h2>
              <p className="text-gray-600 mb-12 font-light text-base md:text-lg leading-relaxed">
                Whether you are planning a new industrial facility or a large-scale infrastructure project, our team is ready to deliver with technical precision.
              </p>
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 flex items-center justify-center text-blue-900 rounded-sm mr-6 group-hover:bg-blue-900 group-hover:text-white transition-colors"><MapPin size={24} /></div>
                  <div><h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] mb-2">Registered Office</h4><p className="text-gray-600 font-light text-sm"># 26-4-1978, Melapur, Hindupur – 515 201, AP</p></div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 flex items-center justify-center text-blue-900 rounded-sm mr-6 group-hover:bg-blue-900 group-hover:text-white transition-colors"><Phone size={24} /></div>
                  <div><h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] mb-2">Executive Line</h4><p className="text-gray-900 font-bold text-xl">{config.CONTACT_PHONE}</p></div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 flex items-center justify-center text-blue-900 rounded-sm mr-6 group-hover:bg-blue-900 group-hover:text-white transition-colors"><Mail size={24} /></div>
                  <div><h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] mb-2">Email</h4><p className="text-gray-600 font-light underline text-sm">{config.SUPPORT_EMAIL}</p></div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="relative">
              <div className="bg-white border border-gray-100 shadow-2xl p-8 md:p-12 relative z-10">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-700">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-white mb-8 shadow-xl"><CheckCircle2 size={32} /></div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tighter uppercase">Dispatched</h3>
                    <p className="text-gray-500 text-xs font-light mb-8">Your inquiry has been logged. A representative will contact you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="text-blue-900 font-bold uppercase text-[9px] tracking-widest border-b border-blue-900 pb-1">Send New Brief</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div><label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label><input name="fullName" type="text" required className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none transition-all text-sm" placeholder="John Doe" /></div>
                      <div><label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Company</label><input name="company" type="text" required className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none transition-all text-sm" placeholder="Enterprise Ltd" /></div>
                    </div>
                    <div><label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Corporate Email</label><input name="email" type="email" required className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none transition-all text-sm" placeholder="j.doe@company.com" /></div>
                    <div><label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Brief Description</label><textarea name="message" rows={4} required className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none transition-all text-sm resize-none" placeholder="Scope of inquiry..."></textarea></div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-900 text-white py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-xl flex items-center justify-center">
                      {isSubmitting ? <><Loader2 className="mr-3 w-4 h-4 animate-spin" /> Transmitting</> : <>Submit Brief <Send className="ml-3 w-4 h-4" /></>}
                    </button>
                    {error && <p className="text-red-600 text-[10px] font-bold uppercase mt-4">{error}</p>}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
