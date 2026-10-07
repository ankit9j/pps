import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  AlertCircle,
  Quote,
  Star
} from 'lucide-react';

interface ContactSectionProps {
  preselectedProgram?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedProgram = '' }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '3',
    location: 'Golf Course Road Studio (Flagship)',
    programInterest: ['Drop-in'],
    referralSource: 'Word of Mouth / Parent Recommendation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if preselectedProgram is passed
  React.useEffect(() => {
    if (preselectedProgram) {
      if (preselectedProgram.includes('Quarterly')) {
        setFormData((prev) => ({ ...prev, programInterest: ['Quarterly Subscription'] }));
      } else if (preselectedProgram.includes('10-Session') || preselectedProgram.includes('Punch')) {
        setFormData((prev) => ({ ...prev, programInterest: ['10-Session Punch Pass'] }));
      } else if (preselectedProgram.includes('Weekend') || preselectedProgram.includes('Workshop') || preselectedProgram.includes('Mind') || preselectedProgram.includes('Paper')) {
        setFormData((prev) => ({ ...prev, programInterest: ['Weekend Workshops'] }));
      } else {
        setFormData((prev) => ({ ...prev, programInterest: ['Drop-in'] }));
      }
    }
  }, [preselectedProgram]);

  const handleCheckboxChange = (programName: string) => {
    setFormData((prev) => {
      const exists = prev.programInterest.includes(programName);
      if (exists) {
        // Keep at least one checked
        if (prev.programInterest.length === 1) return prev;
        return { ...prev, programInterest: prev.programInterest.filter((p) => p !== programName) };
      } else {
        return { ...prev, programInterest: [...prev.programInterest, programName] };
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName.trim()) {
      setErrorMsg("Please enter parent's full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid contact phone or WhatsApp number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  // Testimonials or what parents have to say
  const parentTestimonials = [
    {
      name: 'Rhea Sengupta',
      location: 'DLF Phase 5, Gurgaon',
      child: 'Mother of Kabir (3.5 yrs)',
      text: 'During Gurgaon’s smoggy winter, finding a space where the indoor AQI is monitored and kept strictly under 25 was an answered prayer. But beyond the air quality, the Intrapersonal Haven gave my shy toddler room to breathe and observe without being pressured to perform. Unmatched in the city.',
      tag: 'Winter AQI & Haven',
    },
    {
      name: 'Ananya & Vikram Malik',
      location: 'Golf Course Extension, Gurgaon',
      child: 'Parents of Tara (2.5 yrs)',
      text: 'We were tired of commercial soft-play centers with noisy arcade games and synthetic plastic ball pits. Pitter Patter Studio is a true Reggio-Montessori sanctuary: solid beechwood, natural clay, real loose parts, and educators who genuinely observe your child.',
      tag: 'Plastic-Free Pedagogy',
    },
    {
      name: 'Karan Mehra',
      location: 'Sohna Road, Gurgaon',
      child: 'Father of Ayaan (4 yrs)',
      text: 'Swati’s 25 years of pedagogy background shows in every single detail. The facilitators do not dictate what a child must make. My son explored shadow projection and origami folds for an hour with zero distractions. The 10-session punch pass gives us complete flexibility.',
      tag: 'Process Art Focus',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F0F6FD]/70 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Prescribed by Founders */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F9CF8] uppercase font-condensed">
            <span>SECTION 6: REGISTRATION &amp; VISITS</span>
            <span aria-hidden="true">·</span>
            <span>GURGAON STUDIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-condensed font-bold text-slate-900 tracking-tight leading-tight">
            Join the Community / <br className="hidden sm:inline" />
            <span className="text-[#4F9CF8]">Register Your Interest</span>
          </h2>

          <p className="font-script text-2xl text-[#B8433C]">
            learn play explore
          </p>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Bring your child for an experiential tour or sign up for a session.
          </p>
        </div>

        {/* Main Grid: Form on Left/Center, Studio Contact on Right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Prescribed Registration Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md relative">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#EAF8F1] text-[#48BF7B] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-condensed font-bold text-slate-900">
                      Thank You, {formData.parentName}!
                    </h3>
                    <p className="font-script text-2xl text-[#4F9CF8]">
                      learn play explore
                    </p>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                      We have received your registration for <strong>{formData.childName || 'your child'}</strong> (Age {formData.childAge}) at our <strong>{formData.location}</strong>.
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                    <div className="font-condensed font-bold uppercase text-slate-800 text-sm">
                      Confirmed Program Interests:
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                      {formData.programInterest.map((p, idx) => (
                        <li key={idx} className="font-semibold text-slate-900">
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 text-slate-500">
                      Our Gurgaon studio team will reach out to <strong>{formData.phone}</strong> on WhatsApp/Phone to confirm your preferred orientation slot.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        phone: '',
                        email: '',
                        childName: '',
                        childAge: '3',
                        location: 'Golf Course Road Studio (Flagship)',
                        programInterest: ['Drop-in'],
                        referralSource: 'Word of Mouth / Parent Recommendation',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold font-condensed uppercase tracking-wider hover:bg-slate-800 transition-colors"
                  >
                    <span>Register Another Sibling / Session</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-condensed font-bold text-slate-900">
                      Book an Experiential Tour or Reserve a Slot
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Fill out the fields below. Cohorts are strictly limited to 8 children to maintain safety and pedagogical attunement.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs font-medium text-red-700">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Row 1: Parent's Full Name & Contact Phone / WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Parent&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Shipra or Rahul"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9871350426"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Child's Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Child&apos;s Name &amp; Age (1.5 to 6) *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          name="childName"
                          value={formData.childName}
                          onChange={handleChange}
                          placeholder="Child's Name"
                          className="col-span-2 px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white"
                        />
                        <select
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleChange}
                          className="col-span-1 px-2 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white font-condensed font-bold"
                        >
                          <option value="1.5">1.5 Yrs</option>
                          <option value="2">2 Yrs</option>
                          <option value="2.5">2.5 Yrs</option>
                          <option value="3">3 Yrs</option>
                          <option value="3.5">3.5 Yrs</option>
                          <option value="4">4 Yrs</option>
                          <option value="5">5 Yrs</option>
                          <option value="6">6 Yrs</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Preferred Location / Partner Facility */}
                  <div>
                    <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Location / Partner Facility *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white"
                    >
                      <option value="Golf Course Road Studio (Flagship)">
                        Golf Course Road Studio (Flagship Sanctuary)
                      </option>
                      <option value="DLF Phase 5 Neighborhood Hub">
                        DLF Phase 5 Neighborhood Hub (Partner Facility)
                      </option>
                      <option value="Sohna Road Partner Clubhouse">
                        Sohna Road Partner Clubhouse Studio
                      </option>
                      <option value="Nirvana Country / South City II Center">
                        Nirvana Country / South City II Center
                      </option>
                    </select>
                  </div>

                  {/* Row 4: Program Interest (Checkboxes Prescribed by Founders) */}
                  <div>
                    <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Program Interest * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { label: 'Quarterly Subscription', sub: 'Consistent routine & growth' },
                        { label: '10-Session Punch Pass', sub: 'Flex-visits valid 60 days' },
                        { label: 'Drop-in', sub: '₹1,500 / 1-hour session' },
                        { label: 'Weekend Workshops', sub: '₹2,000 / masterclass session' },
                      ].map((item) => {
                        const isChecked = formData.programInterest.includes(item.label);
                        return (
                          <div
                            key={item.label}
                            onClick={() => handleCheckboxChange(item.label)}
                            className={`cursor-pointer p-3 rounded-xl border transition-all flex items-start gap-3 select-none ${
                              isChecked
                                ? 'border-[#4F9CF8] bg-[#EBF3FE] shadow-2xs'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}} // handled by wrapper
                              className="mt-0.5 w-4 h-4 text-[#4F9CF8] rounded-sm focus:ring-[#4F9CF8]"
                            />
                            <div>
                              <div className="text-xs font-bold text-slate-900 font-condensed">
                                {item.label}
                              </div>
                              <div className="text-[11px] text-slate-500 font-sans">
                                {item.sub}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: How did you hear about us? */}
                  <div>
                    <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      How did you hear about us? *
                    </label>
                    <select
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white"
                    >
                      <option value="Word of Mouth / Parent Recommendation">
                        Word of Mouth / Parent Recommendation
                      </option>
                      <option value="Preschool / Nursery Teacher">
                        Preschool / Nursery Teacher
                      </option>
                      <option value="Instagram / Social Media">
                        Instagram / Social Media
                      </option>
                      <option value="Gurgaon RWA / Society Community Group">
                        Gurgaon RWA / Society Community Group
                      </option>
                      <option value="Google Search">
                        Google Search
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Row 6: Additional Note */}
                  <div>
                    <label className="block text-xs font-condensed font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Notes / Any specific sensory or emotional needs? (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let us know what fascinates your child or your preferred visiting day..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#4F9CF8] focus:ring-2 focus:ring-[#4F9CF8]/20 transition-all bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button Prescribed by Founders */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-condensed font-bold text-sm uppercase tracking-wider text-white bg-[#4F9CF8] hover:bg-[#3b87e6] shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Reserving Slot...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit &amp; Reserve Slot</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-sans">
                    We maintain strict confidentiality. Your details will only be used to organize your child’s studio visit.
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Coordinates & Quick Call */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-xl font-condensed font-bold text-slate-900">
                Studio Concierge
              </h3>

              <div className="space-y-4 text-xs">
                <a
                  href="tel:+919871350426"
                  className="flex items-start gap-3 text-slate-700 hover:text-[#4F9CF8] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EBF3FE] text-[#4F9CF8] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-condensed font-bold uppercase text-slate-400">
                      Phone / WhatsApp
                    </div>
                    <div className="font-bold text-sm text-slate-900">
                      +91 9871350426
                    </div>
                    <div className="text-slate-500">
                      Direct line for admissions &amp; tours
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:workshop@pitterpatterstudio.in"
                  className="flex items-start gap-3 text-slate-700 hover:text-[#4F9CF8] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FBEAE8] text-[#B8433C] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-condensed font-bold uppercase text-slate-400">
                      Email
                    </div>
                    <div className="font-bold text-slate-900">
                      workshop@pitterpatterstudio.in
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF8F1] text-[#48BF7B] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-condensed font-bold uppercase text-slate-400">
                      Studio Hours
                    </div>
                    <div className="font-bold text-slate-900">
                      Mon–Sat: 9:00 AM – 6:30 PM
                    </div>
                    <div className="text-slate-500">
                      Sun: Dedicated Weekend Workshops
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-condensed font-bold uppercase text-slate-400">
                      Gurgaon Studio
                    </div>
                    <div className="font-bold text-slate-900">
                      Golf Course Road &amp; Partner Facilities
                    </div>
                    <div className="text-slate-500">
                      Dedicated stroller check-in available
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Color Swatch Preview from PDF */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-condensed font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Official Brand Palette
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-condensed font-bold text-white">
                  <div className="p-1.5 rounded-lg bg-[#4F9CF8]">THE RAIN BLUE</div>
                  <div className="p-1.5 rounded-lg bg-[#B8433C]">WET LAND SIANA</div>
                  <div className="p-1.5 rounded-lg bg-[#48BF7B]">NEW GROW GREEN</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials or What Parents Have to Say */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold font-condensed uppercase tracking-widest text-[#B8433C]">
              COMMUNITY VOICES
            </span>
            <h3 className="text-2xl sm:text-3xl font-condensed font-bold text-slate-900 mt-1">
              Testimonials or What Parents Have to Say
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
              Observations from Gurgaon parents who value child-led discovery, clean air, and emotional grounding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parentTestimonials.map((review, rIdx) => (
              <div
                key={rIdx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-condensed font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {review.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="font-condensed font-bold text-base text-slate-900 leading-tight">
                    {review.name}
                  </div>
                  <div className="text-xs text-[#4F9CF8] font-medium font-condensed">
                    {review.child}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {review.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
