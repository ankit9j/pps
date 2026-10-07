import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Sparkles, Wind } from 'lucide-react';
import { Logo } from './Logo';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip in PDF Brand Colors */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4F9CF8] via-[#B8433C] to-[#48BF7B]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EAF8F1] text-[#48BF7B] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-condensed font-bold text-slate-900">
              Brochure Dispatched!
            </h3>
            <p className="font-script text-xl text-[#4F9CF8]">
              learn play explore
            </p>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              We have emailed the comprehensive <strong>Pitter Patter Studio Information Kit</strong> to <strong>{email}</strong> and shared a WhatsApp copy at <strong>{phone}</strong>.
            </p>

            <div className="bg-[#F8FAFC] rounded-2xl p-4 text-xs text-left text-slate-700 space-y-1.5 border border-slate-200">
              <div className="font-bold text-slate-900 font-condensed uppercase">Kit Contents:</div>
              <p>• 2026 Curriculum Guide &amp; Reggio-Montessori Framework</p>
              <p>• Gurgaon Winter AQI Protocol &amp; Multi-Stage HEPA Specs</p>
              <p>• Detailed Fee Schedule for Quarterly Passes &amp; Punch Cards</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setDownloaded(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-condensed font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Logo variant="mark-only" size="sm" colorTheme="wet-siana" />
                <span className="font-condensed font-bold text-xs uppercase tracking-wider text-[#B8433C]">
                  Gurgaon Studio Kit
                </span>
              </div>
              <h3 className="text-2xl font-condensed font-bold text-slate-900">
                Download Studio Information Brochure
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Receive our complete pedagogical dossier, air filtration standards, and program fee guide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2 text-[11px] text-slate-700">
              <div className="p-2 rounded-lg bg-[#EBF3FE] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#4F9CF8]" />
                <span>Pedagogy Guide</span>
              </div>
              <div className="p-2 rounded-lg bg-[#EAF8F1] flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-[#48BF7B]" />
                <span>AQI Standards</span>
              </div>
              <div className="p-2 rounded-lg bg-[#FBEAE8] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8433C]" />
                <span>Pricing Tiers</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                Parent Name *
              </label>
              <input
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8] focus:ring-1 focus:ring-[#4F9CF8]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8] focus:ring-1 focus:ring-[#4F9CF8]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                Contact Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9871350426"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8] focus:ring-1 focus:ring-[#4F9CF8]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-condensed font-bold text-xs uppercase tracking-wider text-white bg-[#4F9CF8] hover:bg-[#3b87e6] transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Studio Brochure</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
