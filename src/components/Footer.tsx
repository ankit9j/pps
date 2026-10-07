import React from 'react';
import { Logo } from './Logo';
import { Heart, ArrowUp, ShieldCheck, Wind } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Gurgaon Premise */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="tagline-stacked" colorTheme="white" size="md" />

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm pt-2">
              A mindful, child-led early learning &amp; play studio in Gurgaon. Merging process-focused art, sensory integration, and Montessori-inspired exploration for ages 1.5 to 6 in safe, sanctuary-like environments.
            </p>

            {/* Founder Credibility Note */}
            <div className="text-xs text-slate-400 border-l-2 border-[#B8433C] pl-3 py-0.5 space-y-0.5">
              <span className="font-bold text-white font-condensed uppercase">Founder Credibility:</span>
              <p className="text-slate-400">
                Led by Shipra (15 yrs Corporate Strategy &amp; CX) and Swati (25 yrs Early Childhood Pedagogy, Ex-KLAY Regional Head).
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-condensed font-bold text-sm tracking-wider uppercase text-slate-300">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us &amp; Founders
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#space" className="hover:text-white transition-colors">
                  The Physical Space
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Programs &amp; Options
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors">
                  Safety &amp; AQI Standards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Join the Community
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Access */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-condensed font-bold text-sm tracking-wider uppercase text-slate-300">
              ACCESS OPTIONS
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Quarterly Pass (Tier 1–3)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Pay-as-you-Go Walk-In (₹1,500)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  10-Session Punch Pass (₹13,000)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Weekend Masterclasses (₹2,000)
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors">
                  Winter AQI Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Palette & Gurgaon Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-condensed font-bold text-sm tracking-wider uppercase text-slate-300">
              BRAND PALETTE &amp; CONTACT
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#4F9CF8] shrink-0" />
                <span className="font-medium text-slate-200">The Rain Blue</span>
                <span className="text-slate-500">— Wonder &amp; Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#B8433C] shrink-0" />
                <span className="font-medium text-slate-200">Wet Land Siana</span>
                <span className="text-slate-500">— Grounded Warmth</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#48BF7B] shrink-0" />
                <span className="font-medium text-slate-200">New Grow Green</span>
                <span className="text-slate-500">— Gentle Flourishing</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 leading-normal">
              Gurgaon Studios: Golf Course Road &amp; Partner Facilities <br />
              Direct / WhatsApp: +91 9871350426 <br />
              workshop@pitterpatterstudio.in
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Pitter Patter Studio Gurgaon. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>learn play explore</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
