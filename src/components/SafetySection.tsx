import React from 'react';
import { Wind, Sparkles, ShieldAlert, Camera, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

export const SafetySection: React.FC = () => {
  const safetyProtocols = [
    {
      title: 'Winter AQI & Air Management',
      subtitle: 'Commercial Multi-Stage HEPA Filtration',
      tag: 'Critical Gurgaon Standard',
      icon: Wind,
      color: '#4F9CF8',
      bgLight: '#EBF3FE',
      description:
        'High-capacity commercial HEPA air filtration units maintaining optimal indoor air quality (PM2.5 < 25) during Gurgaon winter months. Sealed thermal double-glazed windows ensure clean, fresh, oxygen-rich airflow all day.',
      features: [
        'Commercial true-HEPA 14 & activated carbon filters',
        'Continuous live indoor AQI wall monitors with public visibility',
        'Positive air pressure displacement in play sanctuaries',
      ],
    },
    {
      title: 'Hygiene & Sanitization',
      subtitle: 'Medical-Grade UV-C & Non-Toxic Sanitation',
      tag: 'Chemical-Free Purity',
      icon: Sparkles,
      color: '#48BF7B',
      bgLight: '#EAF8F1',
      description:
        'Continuous cleaning schedules, UV-C light sterilization chambers for toys and natural loose parts after every session, non-toxic plant-based sanitizers, and mandatory anti-skid socks for both children and accompanying adults.',
      features: [
        'Dedicated nightly UV-C toy sterilization cycle',
        '100% plant-based food-grade sanitizing solutions',
        'Shoe-free barefoot/anti-skid sock hygiene perimeter',
      ],
    },
    {
      title: 'Child Safety Retrofitting',
      subtitle: 'Zero-Hazard Architectural Engineering',
      tag: 'Toddler-Tested Security',
      icon: ShieldAlert,
      color: '#B8433C',
      bgLight: '#FBEAE8',
      description:
        'Engineered specifically for active 1.5 to 6 year olds. Double-gated entry/exit points, finger-pinch guards on every door hinge, child-proof electrical socket covers, curved edge guards on all furniture, and high-density EVA soft play underlay.',
      features: [
        'Magnetic double latch entry & exit airlock gates',
        'Full-height silicone door hinge pinch preventers',
        'Shock-absorbing high-density EVA foam sub-flooring',
      ],
    },
    {
      title: 'Secure Access & CCTV',
      subtitle: 'Strict Identity Verification & 24/7 Monitoring',
      tag: 'Complete Transparency',
      icon: Camera,
      color: '#1E232B',
      bgLight: '#F1F5F9',
      description:
        '24/7 internal CCTV camera coverage with strict child check-in and check-out verification protocols. Only pre-authorized primary guardians and caregivers are granted hand-over clearance.',
      features: [
        'Strict digital guardian OTP / photo sign-in & sign-out',
        'Comprehensive 24/7 security recording',
        'Background-verified female support staff & facilitators',
      ],
    },
  ];

  return (
    <section id="safety" className="py-20 md:py-28 bg-[#F8FAFC] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Prescribed by Founders */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#B8433C] uppercase font-condensed">
            <span>SECTION 4: HEALTH, SAFETY &amp; AQI STANDARDS</span>
            <span aria-hidden="true">·</span>
            <span>PARENT TRUST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-bold text-slate-900 tracking-tight leading-tight">
            Peace of Mind for <br className="hidden sm:inline" />
            <span className="text-[#B8433C]">Every Parent</span>
          </h2>

          <p className="font-script text-2xl text-[#4F9CF8]">
            learn play explore
          </p>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            In a city like Gurgaon, uncompromising environmental safety and indoor air hygiene are non-negotiable foundations for fearless, joyful play.
          </p>
        </div>

        {/* Live Gurgaon Winter AQI Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#48BF7B] animate-pulse" />
              <span className="text-xs font-bold font-condensed uppercase tracking-wider text-[#48BF7B]">
                INDOOR AIR PURITY COMMITMENT
              </span>
            </div>
            <h3 className="text-2xl font-condensed font-bold text-slate-900">
              Guaranteed Clean Air During Peak Winter Months
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              While outdoor Gurgaon AQI often surges above 400+, our multi-stage HEPA filters keep indoor studio air below PM2.5 &lt; 25.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#EAF8F1] px-5 py-3 rounded-2xl border border-[#BBF7D0] shrink-0">
            <Activity className="w-8 h-8 text-[#48BF7B]" />
            <div>
              <div className="text-[11px] font-condensed font-bold uppercase text-slate-600">INDOOR AQI TARGET</div>
              <div className="text-2xl font-condensed font-bold text-[#2F8754] leading-none">&lt; 25 PM2.5</div>
              <div className="text-[10px] text-slate-500 font-sans">Clean Room Standard</div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyProtocols.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: item.bgLight, color: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-xs font-condensed font-bold uppercase tracking-wider px-3 py-1 rounded-md"
                      style={{ backgroundColor: item.bgLight, color: item.color }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-condensed font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 font-condensed uppercase tracking-wider mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: item.color }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
