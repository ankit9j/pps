import React, { useState } from 'react';
import { ArrowRight, Download, CheckCircle2, ShieldCheck, Wind, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookVisitClick: () => void;
  onDownloadBrochureClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookVisitClick, onDownloadBrochureClick }) => {
  const [selectedAge, setSelectedAge] = useState<'1.5-2.5' | '2.5-4' | '4-6'>('2.5-4');

  const ageDetails = {
    '1.5-2.5': {
      title: 'Toddler Sanctuary (Ages 1.5–2.5)',
      tagline: 'Sensory grounding, tactile floor autonomy & emotional regulation',
      focus: 'Gentle, low-stimulation exploration with natural non-toxic timbers, soft climbing arches, and soothing acoustic textures.',
      highlights: ['Plastic-free loose parts & natural materials', 'Intrapersonal haven for quiet pauses', '1:4 educator-to-child ratio'],
      accentColor: '#4F9CF8',
      accentBg: '#EBF3FE',
    },
    '2.5-4': {
      title: 'Curious Explorers (Ages 2.5–4)',
      tagline: 'Process art, sensory integration & Montessori toolsets',
      focus: 'Open-ended clay work, shadow & light tables, and self-correcting wooden puzzles celebrating the process of discovery.',
      highlights: ['Atelier of Curiosity (no rigid templates)', 'Collaborative loose-parts architecture', 'Guided by certified Montessori facilitators'],
      accentColor: '#B8433C',
      accentBg: '#FBEAE8',
    },
    '4-6': {
      title: 'Creative Inquirers (Ages 4–6)',
      tagline: 'Spatial problem solving, paper engineering & social dialogue',
      focus: 'Hands-on construction, 3D paper folding and origami, natural botanical sciences, and collaborative peer inquiry.',
      highlights: ['Origami & 3D tactile paper sculpting', 'Multiple Intelligences holistic tracking', 'High-order curiosity & vocabulary building'],
      accentColor: '#48BF7B',
      accentBg: '#EAF8F1',
    },
  };

  const currentAge = ageDetails[selectedAge];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F8FE] via-white to-[#F8FAFC]">
      {/* Decorative Brand Color Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#4F9CF8]/10 via-[#48BF7B]/10 to-[#B8433C]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Founder-Prescribed Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Age Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 tracking-wider uppercase font-condensed">
              <span className="text-[#4F9CF8] font-bold text-sm">GURGAON STUDIO</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-700 font-bold">Ages 1.5 to 6 Years</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-[#B8433C] font-medium">Child-Led Sanctuary</span>
            </div>

            {/* Headline Prescribed by Founders */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-bold tracking-tight text-slate-900 leading-[1.12] text-balance">
                A Mindful, Child-Led Early Learning &amp; Play Studio in{' '}
                <span className="text-[#4F9CF8] relative inline-block">
                  Gurgaon.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#4F9CF8]/40"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>

              {/* Tagline Cursive Script */}
              <div className="font-script text-2xl sm:text-3xl text-[#B8433C] font-semibold pt-1">
                learn play explore
              </div>
            </div>

            {/* Sub-headline Prescribed by Founders */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
              Merging <strong className="font-semibold text-slate-800">process-focused art</strong>, <strong className="font-semibold text-slate-800">sensory integration</strong>, and <strong className="font-semibold text-slate-800">Montessori-inspired exploration</strong> for ages 1.5 to 6 in safe, sanctuary-like environments.
            </p>

            {/* 3 Pillar Micro Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#4F9CF8] shrink-0" />
                <span>Process Art over Product</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Wind className="w-4 h-4 text-[#48BF7B] shrink-0" />
                <span>Gurgaon Winter AQI Filtered</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#B8433C] shrink-0" />
                <span>Non-Toxic &amp; Plastic-Free</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs Prescribed by Founders */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookVisitClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#4F9CF8] hover:bg-[#3b87e6] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <span>Book a Visit / Reserve a Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDownloadBrochureClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-xs whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#B8433C]" />
                <span>Download Studio Information Brochure</span>
              </button>
            </div>

            {/* Founder Credibility Teaser */}
            <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs text-slate-500">
              <span className="text-[#B8433C] font-bold font-condensed tracking-wide">FOUNDER CREDIBILITY:</span>
              <span className="line-clamp-1">
                15 yrs Corporate Strategy &amp; CX (Shipra) + 25 yrs Early Childhood Pedagogy (Ex-KLAY Regional Head, Swati).
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Age & Studio Sanctuary Explorer */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/80 overflow-hidden">
              
              {/* Top Accent Strip in PDF Brand Colors */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4F9CF8] via-[#B8433C] to-[#48BF7B]" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  {/* Curled O Smile Mark */}
                  <div className="w-11 h-11 rounded-full bg-[#EBF3FE] flex items-center justify-center text-[#4F9CF8]">
                    <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                      <path
                        d="M68 36.5C64.5 27 55.5 20.5 45 20.5C28.7 20.5 15.5 33.7 15.5 50C15.5 66.3 28.7 79.5 45 79.5C61.3 79.5 74.5 66.3 74.5 50C74.5 45.2 73.3 40.7 71.2 36.8C69.5 33.7 71.8 30 75.3 30C83.5 30 87 23.5 86 16C73 17 69 22 68 36.5Z"
                        fill="#4F9CF8"
                      />
                      <circle cx="45" cy="50" r="18.5" fill="#FFFFFF" />
                      <path d="M37.5 45.5C37.5 43 40.5 41 43.5 43C44 43.3 43.8 45.8 42 45.8C39.5 45.8 38 45.8 37.5 45.5Z" fill="#4F9CF8" />
                      <path d="M48.5 43C51.5 41 54.5 43 54.5 45.5C54 45.8 52.5 45.8 50 45.8C48.2 45.8 48 43.3 48.5 43Z" fill="#4F9CF8" />
                      <path d="M40 52C42 56 48 56 50 52" stroke="#4F9CF8" strokeWidth="2.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-condensed font-bold text-lg text-slate-900 leading-none">
                      DEVELOPMENTAL TIERS
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">Ages 1.5 to 6 in Gurgaon</p>
                  </div>
                </div>

                <span className="font-script text-base text-[#4F9CF8] font-bold">Child-Led</span>
              </div>

              {/* Age Bracket Selector */}
              <div className="grid grid-cols-3 gap-2 my-5 p-1 bg-slate-100 rounded-xl">
                {(['1.5-2.5', '2.5-4', '4-6'] as const).map((ageKey) => (
                  <button
                    key={ageKey}
                    type="button"
                    onClick={() => setSelectedAge(ageKey)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-condensed font-bold tracking-wider uppercase transition-all ${
                      selectedAge === ageKey
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {ageKey} Yrs
                  </button>
                ))}
              </div>

              {/* Dynamic Age Tier Content */}
              <div
                className="rounded-2xl p-4 transition-all duration-300 space-y-3"
                style={{ backgroundColor: currentAge.accentBg }}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-condensed font-bold text-lg text-slate-900">
                    {currentAge.title}
                  </h4>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md text-white font-condensed uppercase tracking-wider"
                    style={{ backgroundColor: currentAge.accentColor }}
                  >
                    Montessori &amp; Reggio
                  </span>
                </div>

                <p className="font-script text-lg text-slate-800 font-medium">
                  &ldquo;{currentAge.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  {currentAge.focus}
                </p>

                <div className="pt-2 border-t border-slate-900/10 space-y-1.5">
                  {currentAge.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: currentAge.accentColor }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action in Card */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Small cohorts (Max 8 children)</span>
                <button
                  onClick={onBookVisitClick}
                  className="font-bold text-[#4F9CF8] hover:text-[#3b87e6] hover:underline"
                >
                  Schedule Gurgaon Walkthrough &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
