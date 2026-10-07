import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, MapPin, Users } from 'lucide-react';
import { Logo } from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = 'Studio Visit & Experiential Tour',
}) => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('3');
  const [location, setLocation] = useState('Golf Course Road Studio (Flagship)');
  const [sessionType, setSessionType] = useState(defaultProgram);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:30 AM');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProgram) {
      setSessionType(defaultProgram);
    }
  }, [defaultProgram]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EAF8F1] text-[#48BF7B] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-condensed font-bold text-slate-900">
              Visit Slot Requested!
            </h3>
            <p className="font-script text-xl text-[#4F9CF8]">
              learn play explore
            </p>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              We look forward to welcoming you and {childName || 'your child'} for <strong>{sessionType}</strong> at <strong>{location}</strong> on{' '}
              <strong>{preferredDate || 'your selected date'}</strong>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-condensed font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Logo variant="mark-only" size="sm" colorTheme="rain-blue" />
                <span className="font-condensed font-bold text-xs uppercase tracking-wider text-[#4F9CF8]">
                  Pitter Patter Studio Gurgaon
                </span>
              </div>
              <h3 className="text-2xl font-condensed font-bold text-slate-900">
                Book a Visit / Reserve a Slot
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Experience our AQI-filtered sanctuary, process art atelier, and child-led play zones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8] focus:ring-1 focus:ring-[#4F9CF8]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp *
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  Child&apos;s Name &amp; Age (1.5–6)
                </label>
                <div className="grid grid-cols-3 gap-1">
                  <input
                    type="text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Child Name"
                    className="col-span-2 px-2 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8]"
                  />
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="col-span-1 px-1 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8] font-bold"
                  >
                    <option value="1.5">1.5 Y</option>
                    <option value="2">2 Y</option>
                    <option value="2.5">2.5 Y</option>
                    <option value="3">3 Y</option>
                    <option value="4">4 Y</option>
                    <option value="5">5 Y</option>
                    <option value="6">6 Y</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                Preferred Gurgaon Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8]"
              >
                <option value="Golf Course Road Studio (Flagship)">Golf Course Road Studio (Flagship)</option>
                <option value="DLF Phase 5 Neighborhood Hub">DLF Phase 5 Neighborhood Hub</option>
                <option value="Sohna Road Partner Clubhouse">Sohna Road Partner Clubhouse</option>
                <option value="Nirvana Country / South City II Center">Nirvana Country / South City II Center</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Program Option
                </label>
                <select
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8]"
                >
                  <option value="Studio Visit & Experiential Tour">Studio Walkthrough (Free)</option>
                  <option value="Pay-as-you-Go Walk-In (₹1,500)">Pay-as-you-Go Walk-In (₹1,500)</option>
                  <option value="Quarterly Pass Subscription">Quarterly Pass Subscription</option>
                  <option value="10-Session Punch Pass (₹13,000)">10-Session Punch Pass (₹13,000)</option>
                  <option value="Weekend Workshops (₹2,000)">Weekend Workshops (₹2,000)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-[#4F9CF8]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-condensed font-bold text-xs uppercase tracking-wider text-white bg-[#4F9CF8] hover:bg-[#3b87e6] transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Reserve Studio Slot</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
