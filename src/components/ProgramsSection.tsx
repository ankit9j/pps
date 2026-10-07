import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Tag, 
  Repeat, 
  CreditCard,
  Layers
} from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (programName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'passes' | 'workshops'>('all');

  // Founder-Prescribed Pricing & Access Options
  const accessTiers = [
    {
      id: 'quarterly-pass',
      category: 'passes',
      title: 'Quarterly Pass (Tier 1–3)',
      subtitle: 'Consistent developmental growth and routine',
      pricing: 'Tiered Passes (Monthly / Quarterly)',
      priceNote: 'Best value for continuous child-led milestone tracking',
      idealFor: 'Families seeking predictable weekly rhythms & community bonding',
      schedule: 'Unlimited weekday access or 3 sessions/week tiers',
      color: '#4F9CF8',
      bgLight: '#EBF3FE',
      popular: true,
      features: [
        'Dedicated educator observation & developmental logs',
        'Guaranteed small cohort slots (max 8 children)',
        'Priority access to seasonal guest workshops',
        'Full access to all 4 studio zones',
      ],
    },
    {
      id: 'walk-in',
      category: 'passes',
      title: 'Pay-as-you-Go Walk-In',
      subtitle: 'Flexible drop-in play for busy schedules',
      pricing: '₹1,500',
      priceUnit: '/ 1-Hour Session',
      priceNote: 'Instant booking based on real-time slot availability',
      idealFor: 'Busy weekend schedules, visiting families, or initial studio trials',
      schedule: 'Slots available Mon–Sat (advance slot booking recommended)',
      color: '#B8433C',
      bgLight: '#FBEAE8',
      popular: false,
      features: [
        'Complete 1-hour immersion in Create & Sensory zones',
        'Full guidance by certified Montessori & Reggio facilitators',
        'Sanitized non-toxic loose parts & materials included',
        'AQI-protected indoor play sanctuary',
      ],
    },
    {
      id: 'punch-pass',
      category: 'passes',
      title: '10-Session Punch Pass',
      subtitle: 'Flex-visits valid for 60 days',
      pricing: '₹13,000',
      priceUnit: 'total (₹1,300/session)',
      priceNote: 'Saves ₹2,000 compared to individual drop-in rates',
      idealFor: 'Families wanting flexibility without rigid weekly commitments',
      schedule: 'Book any available weekday or Saturday session over 60 days',
      color: '#48BF7B',
      bgLight: '#EAF8F1',
      popular: false,
      features: [
        'Valid for 60 calendar days from first visit',
        'Transferable between siblings in the 1.5–6 age range',
        'Easy online / WhatsApp session reservation',
        'Complimentary entry for 1 accompanying parent/caregiver',
      ],
    },
    {
      id: 'weekend-workshops',
      category: 'workshops',
      title: 'Weekend Workshops',
      subtitle: 'Deep-dive sensory art, clay, and theme sessions',
      pricing: '₹2,000',
      priceUnit: '/ Session',
      priceNote: 'Small intensive cohorts limited to 8 participants',
      idealFor: 'Immersive creative exploration with master guest mentors',
      schedule: 'Dedicated Saturday & Sunday Morning / Afternoon Slots',
      color: '#1E232B',
      bgLight: '#F1F5F9',
      popular: false,
      features: [
        'Workshop 01: "How The Mind Works" (Mrs. Nita Soni)',
        'Workshop 02: "Art of Paper: Fold & Repeat" (Mr. Raju Sri)',
        'All raw materials (clay, washi paper, natural dyes) included',
        'Detailed documentation of your child’s creative process',
      ],
    },
  ];

  const filteredTiers = accessTiers.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="programs" className="py-20 md:py-28 bg-[#F0F6FD]/60 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Prescribed by Founders */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F9CF8] uppercase font-condensed">
              <span>SECTION 5: PROGRAMS &amp; ACCESS OPTIONS</span>
              <span aria-hidden="true">·</span>
              <span>NEIGHBORHOOD FAMILIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-bold text-slate-900 tracking-tight leading-tight">
              Flexible options tailored for <br className="hidden sm:inline" />
              <span className="text-[#4F9CF8]">neighborhood families.</span>
            </h2>

            <p className="font-script text-2xl text-[#B8433C]">
              learn play explore
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-condensed font-bold uppercase tracking-wider rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Options ({accessTiers.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('passes')}
              className={`px-4 py-2 text-xs font-condensed font-bold uppercase tracking-wider rounded-lg transition-all ${
                selectedCategory === 'passes'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Passes &amp; Drop-in
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('workshops')}
              className={`px-4 py-2 text-xs font-condensed font-bold uppercase tracking-wider rounded-lg transition-all ${
                selectedCategory === 'workshops'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Weekend Workshops
            </button>
          </div>
        </div>

        {/* Founder Recommended Comparison Table */}
        <div className="mt-12 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-condensed font-bold uppercase tracking-wider text-slate-600">
                <th className="py-4 px-6">Option</th>
                <th className="py-4 px-6">Ideal For</th>
                <th className="py-4 px-6">Schedule / Pricing</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-6 font-condensed font-bold text-slate-900 text-base">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4F9CF8]" />
                    <span>Quarterly Pass (Tier 1–3)</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-600 font-sans">
                  Consistent developmental growth and routine
                </td>
                <td className="py-4 px-6 font-semibold text-slate-800">
                  Tiered access passes (Monthly / Quarterly)
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    type="button"
                    onClick={() => onSelectProgram('Quarterly Subscription')}
                    className="px-3.5 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider text-white bg-[#4F9CF8] hover:bg-[#3b87e6] rounded-lg transition-all"
                  >
                    Select Pass
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-6 font-condensed font-bold text-slate-900 text-base">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B8433C]" />
                    <span>Pay-as-you-Go Walk-In</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-600 font-sans">
                  Flexible drop-in play for busy schedules
                </td>
                <td className="py-4 px-6 font-semibold text-slate-800">
                  ₹1,500 / 1-hour session
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    type="button"
                    onClick={() => onSelectProgram('Drop-in')}
                    className="px-3.5 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider text-white bg-[#B8433C] hover:bg-[#a1352f] rounded-lg transition-all"
                  >
                    Book Walk-In
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-6 font-condensed font-bold text-slate-900 text-base">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#48BF7B]" />
                    <span>10-Session Punch Pass</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-600 font-sans">
                  Flex-visits valid for 60 days
                </td>
                <td className="py-4 px-6 font-semibold text-slate-800">
                  ₹13,000 (valid 60 days)
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    type="button"
                    onClick={() => onSelectProgram('10-Session Punch Pass')}
                    className="px-3.5 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider text-white bg-[#48BF7B] hover:bg-[#3AA769] rounded-lg transition-all"
                  >
                    Buy 10-Pass
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-6 font-condensed font-bold text-slate-900 text-base">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1E232B]" />
                    <span>Weekend Workshops</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-600 font-sans">
                  Deep-dive sensory art, clay, and theme sessions
                </td>
                <td className="py-4 px-6 font-semibold text-slate-800">
                  Dedicated weekend slots, ₹2,000 / session
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    type="button"
                    onClick={() => onSelectProgram('Weekend Workshops')}
                    className="px-3.5 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all"
                  >
                    Reserve Workshop
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-3xl p-6 border transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                tier.popular
                  ? 'border-[#4F9CF8] shadow-md ring-2 ring-[#4F9CF8]/20'
                  : 'border-slate-200 shadow-2xs'
              }`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-condensed font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: tier.bgLight, color: tier.color }}
                  >
                    {tier.popular ? 'Most Recommended' : 'Neighborhood Option'}
                  </span>
                </div>

                <h3 className="text-2xl font-condensed font-bold text-slate-900 mb-1 leading-snug">
                  {tier.title}
                </h3>

                <p className="text-xs text-slate-500 font-sans mb-4">
                  {tier.subtitle}
                </p>

                {/* Price Display */}
                <div className="pb-4 mb-4 border-b border-slate-100">
                  <div className="text-2xl sm:text-3xl font-condensed font-bold text-slate-900 leading-none">
                    {tier.pricing}
                    {tier.priceUnit && (
                      <span className="text-xs font-sans font-normal text-slate-500 ml-1">
                        {tier.priceUnit}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-sans">
                    {tier.priceNote}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700 font-sans">
                      <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: tier.color }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectProgram(tier.title)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:brightness-95 active:scale-98"
                style={{
                  backgroundColor: tier.color,
                  color: '#FFFFFF',
                }}
              >
                <span>Select &amp; Register</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
