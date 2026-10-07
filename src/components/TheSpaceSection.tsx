import React, { useState } from 'react';
import { Palette, Box, BookOpen, Footprints, Shield, Sparkles } from 'lucide-react';

export const TheSpaceSection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<number>(0);

  const zones = [
    {
      title: 'The Create Studio (Clay, Art & Sound)',
      subtitle: 'Process art stations, light tables & non-toxic clay modeling',
      tagline: 'Tactile exploration where discovery matters more than perfection',
      description:
        'Equipped with natural terracotta clay, child-height light tables, shadow projection easels, and organic rhythm instruments. Children experiment with pigment density, form transformation, and acoustic pitch in an open, spill-friendly atelier.',
      materials: [
        'Pure earth non-toxic modeling clay & carving tools',
        'Backlit sensory light tables for translucency and color mixing',
        'Rhythmic resonant sound play with rainsticks, woodblocks & Tibetan singing bowls',
      ],
      color: '#4F9CF8',
      bgLight: '#EBF3FE',
      icon: Palette,
    },
    {
      title: 'Montessori & Cognitive Nook',
      subtitle: 'Low-level wooden shelving, tactile sorting tools & self-correcting puzzles',
      tagline: 'Self-directed order, concentration and spatial logic',
      description:
        'Arranged strictly at toddler and preschooler eye levels. Trays of mortise-and-tenon wood cylinders, color graduated tablets, tactile weight sorting scales, and counting beads encourage repetitive trial-and-error without adult correction.',
      materials: [
        'FSC-certified European beechwood geometric solids',
        'Self-correcting Montessori sensory knobbed cylinders',
        'Weight balances, tongs, pincer tweezers & grain transfer trays',
      ],
      color: '#B8433C',
      bgLight: '#FBEAE8',
      icon: Box,
    },
    {
      title: 'The Intrapersonal & Reading Haven',
      subtitle: 'Sound-dampening felt, sheepskin rugs, floor cushions & low mirrors',
      tagline: 'A sanctuary for emotional regulation and quiet observation',
      description:
        'A cozy, acoustically protected alcove designed for children who need a pause from high sensory stimulation. Low shatterproof mirrors foster facial emotional recognition, while curated wordless picture books offer peaceful solace.',
      materials: [
        'Acoustic sound-absorbing felt panels in soothing warm tones',
        'Organic sheepskin floor rugs and weighted linen cushions',
        'Curated picture library focused on emotions, nature, and wonder',
      ],
      color: '#48BF7B',
      bgLight: '#EAF8F1',
      icon: BookOpen,
    },
    {
      title: 'Sensory & Active Discovery Path',
      subtitle: 'Textured walking pathways, Pikler-inspired climbing & balance stations',
      tagline: 'Vestibular balance and natural gross motor progression',
      description:
        'Children shed their shoes to experience river-stone barefoot paths, gentle curved wooden balance beams, soft-angle Pikler climbing triangles, and padded landing zones, cultivating spatial awareness and body confidence.',
      materials: [
        'Textured natural stepping stones (bamboo, cork, smooth pebble)',
        'Low-rise Pikler climbing frames with gentle incline ramps',
        'High-density shock-absorbing EVA underlay beneath organic rugs',
      ],
      color: '#1E232B',
      bgLight: '#F1F5F9',
      icon: Footprints,
    },
  ];

  const activeZone = zones[selectedZone];

  return (
    <section id="space" className="py-20 md:py-28 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Prescribed by Founders */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#48BF7B] uppercase font-condensed">
            <span>SECTION 3: THE PHYSICAL SPACE</span>
            <span aria-hidden="true">·</span>
            <span>INSPIRATION &amp; DESIGN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-bold text-slate-900 tracking-tight leading-tight">
            Designed as the <br className="hidden sm:inline" />
            <span className="text-[#48BF7B]">&ldquo;Third Teacher&rdquo;</span>
          </h2>

          <p className="font-script text-2xl text-[#4F9CF8]">
            learn play explore
          </p>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Our physical studio prioritizes natural lighting, non-toxic materials, warm tones, modular setups, and acoustic soundproofing.
          </p>
        </div>

        {/* 4 Studio Zone Selector Tabs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {zones.map((zone, idx) => {
            const Icon = zone.icon;
            const isSelected = selectedZone === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedZone(idx)}
                className={`text-left rounded-2xl p-5 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md border-slate-900 -translate-y-1'
                    : 'bg-[#F8FAFC] text-slate-800 hover:bg-white border-slate-200/90 hover:shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-white text-slate-700 shadow-2xs'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-condensed font-bold uppercase tracking-wider ${
                      isSelected ? 'text-white/70' : 'text-slate-400'
                    }`}
                  >
                    Zone 0{idx + 1}
                  </span>
                </div>

                <h3
                  className={`text-lg font-condensed font-bold mb-1 leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {zone.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed font-sans line-clamp-2 ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {zone.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Zone Detail Showcase */}
        <div className="mt-8 bg-[#F8FAFC] rounded-3xl p-7 sm:p-9 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Display Container */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl bg-white p-7 border border-slate-200/90 shadow-xs min-h-[340px] flex flex-col justify-between">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: activeZone.color }}
                    />
                    <span className="text-xs font-bold font-condensed uppercase tracking-wider text-slate-600">
                      Gurgaon Studio Environment
                    </span>
                  </div>
                  <span className="font-script text-base text-[#4F9CF8] font-bold">
                    Acoustically Dampened &amp; HEPA Filtered
                  </span>
                </div>

                {/* Illustrated Scene Block */}
                <div className="my-6 py-6 px-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-3">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: activeZone.bgLight, color: activeZone.color }}
                  >
                    <activeZone.icon className="w-8 h-8" />
                  </div>
                  <div className="max-w-md">
                    <h4 className="font-condensed font-bold text-2xl text-slate-900">
                      {activeZone.title}
                    </h4>
                    <p className="font-script text-xl text-[#B8433C] mt-0.5">
                      &ldquo;{activeZone.tagline}&rdquo;
                    </p>
                    <p className="text-xs text-slate-600 mt-2 font-sans">
                      Natural illumination · Low-VOC beeswax and organic milk paints · Non-toxic surfaces
                    </p>
                  </div>
                </div>

                {/* Footer Badges */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <span className="font-medium text-slate-700">Strict UV-C Sanitization Cycle</span>
                  <span className="font-bold text-[#48BF7B]">Child-Safe Tested</span>
                </div>

              </div>
            </div>

            {/* Right Information & Materials */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold font-condensed uppercase tracking-widest text-slate-400">
                  Architectural Specifications
                </span>
                <h3 className="text-2xl sm:text-3xl font-condensed font-bold text-slate-900 mt-0.5">
                  The Environment Guides the Child
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {activeZone.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-condensed font-bold uppercase tracking-wider text-slate-800">
                  Curated Tools &amp; Loose Parts:
                </div>
                {activeZone.materials.map((mat, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: activeZone.color }}
                    />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold font-condensed uppercase tracking-wider text-[#4F9CF8] hover:text-[#3b87e6]"
                >
                  <span>Book an in-person walkthrough of this zone</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
