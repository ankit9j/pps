import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Layers, 
  Compass, 
  Brain, 
  Activity, 
  Ear, 
  Users, 
  CheckCircle2,
  Smile
} from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'space-works' | 'frameworks' | 'dimensions'>('space-works');

  // How Our Space Works (Prescribed by Founders)
  const spaceFeatures = [
    {
      id: 'intrapersonal-haven',
      title: 'The Intrapersonal Haven',
      subtitle: 'Emotional Grounding & Self-Regulation',
      tagline: 'Prioritizing emotional self-regulation over constant external performance',
      icon: Heart,
      color: '#B8433C',
      bgLight: '#FBEAE8',
      description:
        'A quiet, low-stimulation nook where children can pause, reflect, and reset when feeling overstimulated. Equipped with sound-softening felt, calming picture books, and weighted cushions, giving children autonomous space to breathe without performance anxiety.',
      pillars: [
        'Acoustically dampened sanctuary corner',
        'Quiet sensory reset without adult intrusion',
        'Honoring the child’s internal emotional rhythm',
      ],
    },
    {
      id: 'atelier-curiosity',
      title: 'The Atelier of Curiosity',
      subtitle: 'Process Art & Light Exploration',
      tagline: 'Celebrating discovery rather than demanding a uniform "take-home product"',
      icon: Sparkles,
      color: '#4F9CF8',
      bgLight: '#EBF3FE',
      description:
        'Open-ended exploration with clay, light, shadow, and natural botanical pigments. Inspired by the Reggio Emilia approach, we treat materials as communicative languages. Facilitators celebrate the questions children ask while sculpting or mixing rather than policing neatness.',
      pillars: [
        'Natural earthen terracotta and beeswax mediums',
        'Overhead and backlit shadow & transparency projection',
        'Zero templates, zero stencils, 100% individual voice',
      ],
    },
    {
      id: 'floor-play',
      title: 'Self-Directed Floor Play',
      subtitle: 'Tactile Autonomy & Loose Parts',
      tagline: 'Plastic-free, open shelving stocked with natural timber & loose parts',
      icon: Layers,
      color: '#48BF7B',
      bgLight: '#EAF8F1',
      description:
        'Plastic-free, low open shelving stocked with solid FSC-certified beechwood, polished river stones, and heuristic loose parts. Children build, sort, balance, and solve spatial problems on their own terms, developing intrinsic cognitive focus without flashing battery-powered noise.',
      pillars: [
        'European beechwood balance ramps & arches',
        'Geometric sorting and gravitational balance experiments',
        'Screen-free tactile sovereignty for growing brains',
      ],
    },
  ];

  // Synthesized Global Early-Learning Frameworks
  const globalFrameworks = [
    {
      name: 'Reggio Emilia ("The Studio of Curiosity")',
      focus: 'The Hundred Languages of Children',
      color: '#4F9CF8',
      desc: 'Viewing the child as an inherently curious, capable researcher. We value the process of creation over the final product, documenting their emergent theories.',
    },
    {
      name: 'Montessori Exploration',
      focus: 'Self-Directed Order & Autonomy',
      color: '#B8433C',
      desc: 'Self-directed sensory and cognitive toolsets arranged at child eye level, gently accompanied by certified early-learning facilitators.',
    },
    {
      name: 'Howard Gardner’s Multiple Intelligences',
      focus: 'Intrapersonal & Spatial Intelligence',
      color: '#48BF7B',
      desc: 'Featuring our dedicated Intrapersonal Haven—a quiet, low-stimulation sanctuary honoring internal emotional regulation, spatial intuition, and kinesthetic mastery.',
    },
    {
      name: 'Sensory Integration & Loose Parts',
      focus: 'Plastic-Free Motor & Proprioceptive Health',
      color: '#1E232B',
      desc: 'Open-ended play environments using tactile natural materials (timber, clay, seed pods) to build gross/fine motor skills, vestibular balance, and problem-solving without screens.',
    },
  ];

  // 6 Developmental Aspects (PDF Pages 6 & 7)
  const developmentalAspects = [
    { name: 'Cognitive', desc: 'Thinking · problem-solving · concentration · curiosity', color: '#4F9CF8', bg: '#EBF3FE' },
    { name: 'Creative', desc: 'Imagination · experimentation · expression · representation', color: '#B8433C', bg: '#FBEAE8' },
    { name: 'Physical', desc: 'Balance · Coordination · Strength · Fine & Gross Motor', color: '#48BF7B', bg: '#EAF8F1' },
    { name: 'Sensory', desc: 'Touch · Texture · Light · Sound · Movement · Space', color: '#4F9CF8', bg: '#EBF3FE' },
    { name: 'Social', desc: 'Shared Play · Communication · Cooperation · Relationships', color: '#B8433C', bg: '#FBEAE8' },
    { name: 'Emotional', desc: 'Self-awareness · Confidence · Managing Frustration · Pausing', color: '#48BF7B', bg: '#EAF8F1' },
  ];

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#F0F6FD]/60 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Prescribed by Founders */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F9CF8] uppercase font-condensed">
            <span>SECTION 2: OUR PHILOSOPHY</span>
            <span aria-hidden="true">·</span>
            <span>INTENTIONAL PEDAGOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-bold text-slate-900 tracking-tight leading-tight">
            Child-Led, Process-Focused, <br className="hidden sm:inline" />
            <span className="text-[#4F9CF8]">and Balanced Discovery</span>
          </h2>

          <p className="font-script text-2xl text-[#B8433C]">
            learn play explore
          </p>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            We operate at the sweet spot between unstructured play and intentional design—giving children freedom within a safe, thoughtfully curated environment.
          </p>
        </div>

        {/* Tab Controls for Section 2 */}
        <div className="mt-10 flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/80 rounded-2xl w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('space-works')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-condensed font-bold uppercase tracking-wider transition-all ${
              activeTab === 'space-works'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            How Our Space Works (3 Sanctuaries)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('frameworks')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-condensed font-bold uppercase tracking-wider transition-all ${
              activeTab === 'frameworks'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Global Learning Frameworks
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('dimensions')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-condensed font-bold uppercase tracking-wider transition-all ${
              activeTab === 'dimensions'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            6 Developmental Dimensions
          </button>
        </div>

        {/* Content View 1: How Our Space Works */}
        {activeTab === 'space-works' && (
          <div className="mt-8 space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {spaceFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: feat.bgLight, color: feat.color }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span
                          className="text-[11px] font-condensed font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                          style={{ backgroundColor: feat.bgLight, color: feat.color }}
                        >
                          {feat.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl font-condensed font-bold text-slate-900 mb-1">
                        {feat.title}
                      </h3>

                      <p className="font-script text-base text-slate-600 mb-3">
                        &ldquo;{feat.tagline}&rdquo;
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {feat.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      {feat.pillars.map((pil, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: feat.color }} />
                          <span>{pil}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Content View 2: Synthesized Global Frameworks */}
        {activeTab === 'frameworks' && (
          <div className="mt-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs animate-in fade-in duration-200 space-y-6">
            <div>
              <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#4F9CF8]">
                GLOBAL BEST PRACTICES
              </span>
              <h3 className="text-2xl sm:text-3xl font-condensed font-bold text-slate-900 mt-1">
                Synthesizing Leading Global Early-Learning Frameworks
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                Grounded in research from Reggio Emilia, Maria Montessori, and Howard Gardner’s Multiple Intelligences theory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {globalFrameworks.map((fw, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fw.color }} />
                    <h4 className="font-condensed font-bold text-xl text-slate-900">
                      {fw.name}
                    </h4>
                  </div>
                  <div
                    className="text-xs font-bold font-condensed uppercase tracking-wider px-2 py-0.5 rounded-md w-fit"
                    style={{ color: fw.color, backgroundColor: `${fw.color}15` }}
                  >
                    {fw.focus}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {fw.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content View 3: 6 Developmental Dimensions */}
        {activeTab === 'dimensions' && (
          <div className="mt-8 space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[#B8433C]">
                  THE BELIEF
                </span>
                <h3 className="text-2xl sm:text-3xl font-condensed font-bold text-slate-900 mt-1">
                  We believe learning happens across 6 simultaneous aspects
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                  Development begins with what they do, and goes deep into what we can feel from within.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {developmentalAspects.map((dim, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-5 rounded-2xl border border-slate-200 space-y-2"
                    style={{ backgroundColor: dim.bg }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-condensed font-bold text-xl text-slate-900">
                        {dim.name}
                      </span>
                      <span
                        className="text-[10px] font-condensed font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-white"
                        style={{ backgroundColor: dim.color }}
                      >
                        Aspect 0{dIdx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {dim.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
