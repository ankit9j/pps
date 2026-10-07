import React from 'react';
import { Logo } from './Logo';
import { Briefcase, GraduationCap, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const brandPillars = [
    {
      title: 'Curious, but not chaotic',
      desc: 'Deep inquiry and unhurried wonder within a structured, calm sanctuary where children never feel overstimulated.',
      color: '#4F9CF8',
      bg: '#EBF3FE',
    },
    {
      title: 'Intelligent, but not serious',
      desc: 'Pedagogy grounded in 25 years of early childhood research, delivered through joyful discovery, laughter, and tactile play.',
      color: '#B8433C',
      bg: '#FBEAE8',
    },
    {
      title: 'Playful, but not childish',
      desc: 'Treating children with deep dignity as autonomous researchers capable of constructing their own theories and decisions.',
      color: '#48BF7B',
      bg: '#EAF8F1',
    },
    {
      title: 'Warm, but not overly sweet',
      desc: 'Genuine attunement, compassionate presence, and clean boundaries designed to build enduring emotional self-regulation.',
      color: '#1E232B',
      bg: '#F1F5F9',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Prescribed by Founders */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#B8433C] uppercase font-condensed">
            <span>SECTION 1: ABOUT US</span>
            <span aria-hidden="true">·</span>
            <span>GURGAON STUDIO PURPOSE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-bold text-slate-900 tracking-tight leading-tight">
            Building Spaces Where Children <br className="hidden sm:inline" />
            <span className="text-[#B8433C]">Lead and Discover</span>
          </h2>

          <p className="font-script text-2xl text-[#4F9CF8]">
            learn play explore
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Founded by a dedicated team combining strategic business vision with early-learning pedagogy, our studio was created to address a gap in Gurgaon’s early childhood landscape: spaces that balance unstructured creativity with science-backed child development, rigorous health standards, and uncompromising safety.
          </p>
        </div>

        {/* Founder Credibility Highlight Box */}
        <div className="mt-12 bg-gradient-to-br from-[#F8FAFC] to-[#F1F6FD] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4F9CF8]/10 via-[#B8433C]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <span className="text-xs font-bold font-condensed uppercase tracking-wider text-[#B8433C]">
                  LEADERSHIP &amp; PEDAGOGICAL VISION
                </span>
                <h3 className="text-2xl sm:text-3xl font-condensed font-bold text-slate-900 mt-0.5">
                  Founder Credibility
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                A Rare Blend of Strategy &amp; 40+ Years Cumulative Expertise
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-4xl">
              Led by a rare blend of <strong className="text-slate-900 font-bold">15 years of corporate strategy, marketing, and customer experience (Shipra)</strong> and <strong className="text-slate-900 font-bold">25 years of early childhood pedagogy (Ex-KLAY Regional Head) (Swati)</strong>.
            </p>

            {/* Founder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Shipra: Business & Strategy Lead */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] text-[#4F9CF8] flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-condensed font-bold text-slate-900 leading-tight">
                        Shipra
                      </h4>
                      <div className="text-xs font-semibold text-[#4F9CF8] uppercase font-condensed tracking-wider">
                        Business &amp; Strategy Lead
                      </div>
                    </div>
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-[#EBF3FE] text-[#1E60B5]">
                    15 Years Corporate Strategy, Marketing &amp; Customer Experience
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    Brings a comprehensive background in capital planning, real estate management, and customer experience, ensuring seamless operations, transparent parent communications, and legal/safety compliance across our Gurgaon centers.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#4F9CF8]" />
                  <span>Operations, Facility Scaling &amp; Parent Experience</span>
                </div>
              </div>

              {/* Swati: Pedagogy & Operations Lead */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FBEAE8] text-[#B8433C] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-condensed font-bold text-slate-900 leading-tight">
                        Swati
                      </h4>
                      <div className="text-xs font-semibold text-[#B8433C] uppercase font-condensed tracking-wider">
                        Pedagogy &amp; Operations Lead
                      </div>
                    </div>
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-[#FBEAE8] text-[#8B2C26]">
                    25 Years Early Childhood Pedagogy · Ex-KLAY Regional Head
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    An early childhood educator with specialized expertise in child psychology, curriculum design, and sensory-based developmental play. Formerly regional head at KLAY, overseeing top-tier pedagogical delivery and teacher coaching.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#B8433C]" />
                  <span>Curriculum Architecture &amp; Facilitator Mentorship</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Narrative Grid: The Story of the O & Brand Personality */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: The Story of the O (PDF Page 17) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <Logo variant="mark-only" size="md" colorTheme="wet-siana" />
                <div>
                  <h3 className="font-condensed font-bold text-2xl text-slate-900">
                    The Story of the &ldquo;O&rdquo;
                  </h3>
                  <p className="text-xs text-[#B8433C] font-semibold font-condensed tracking-wider uppercase">
                    Form Evolution · Discovering the Individual
                  </p>
                </div>
              </div>

              <blockquote className="space-y-3 text-slate-700 text-sm leading-relaxed font-light">
                <p className="font-medium text-slate-900">
                  &ldquo;It is not the O. It is from the O.&rdquo;
                </p>
                <p>
                  As part of a family, you are one of the many O’s — connected, nurtured and shaped by everything around you. But as you grow, you begin to discover the individual within.
                </p>
                <p>
                  <strong className="font-semibold text-slate-800">You are from the O, not simply the O.</strong> At Pitter Patter Studio, we believe that evolution is also about discovering that individual — the person you are becoming, in your own way.
                </p>
              </blockquote>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
                <span>Letters with stencil cut to let form breathe</span>
                <span className="font-bold text-[#4F9CF8]">Nothing feels trapped</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Brand Personality Pillars (PDF Page 8) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 border border-slate-200 hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between"
                style={{ backgroundColor: pillar.bg }}
              >
                <div>
                  <div
                    className="w-2.5 h-2.5 rounded-full mb-3"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <h4 className="font-condensed font-bold text-lg text-slate-900 mb-1 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-3 mt-1 border-t border-slate-900/5 text-right">
                  <span className="text-[10px] font-condensed font-bold uppercase tracking-wider text-slate-400">
                    Pillar 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
