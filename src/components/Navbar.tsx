import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Users, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onJoinCommunityClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinCommunityClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'The Physical Space', href: '#space' },
    { label: 'Programs & Options', href: '#programs' },
    { label: 'Safety & Standards', href: '#safety' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-xs border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Title & Logo */}
        <a
          href="#"
          className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#4F9CF8] rounded-lg group"
          aria-label="Pitter Patter Studio Gurgaon"
        >
          <Logo size="sm" variant="horizontal" />
        </a>

        {/* Zone 2: 4-6 Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs xl:text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#4F9CF8] transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#4F9CF8] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Direct Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919871350426"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2 px-2.5 rounded-lg border border-slate-200 bg-slate-50"
            title="Call Studio in Gurgaon"
          >
            <Phone className="w-3.5 h-3.5 text-[#4F9CF8]" />
            <span className="font-condensed text-xs tracking-wide">9871350426</span>
          </a>

          <button
            onClick={onJoinCommunityClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#4F9CF8] hover:bg-[#3b87e6] rounded-xl shadow-xs transition-all transform active:scale-95 whitespace-nowrap"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Join the Community</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onJoinCommunityClick}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#4F9CF8] rounded-lg"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#4F9CF8] py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-3 flex flex-col gap-3">
            <a
              href="tel:+919871350426"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#4F9CF8]" />
              Call Studio (Gurgaon): +91 9871350426
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinCommunityClick();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#4F9CF8] hover:bg-[#3b87e6] rounded-xl"
            >
              Join the Community / Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
