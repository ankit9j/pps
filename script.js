/**
 * ==============================================================================
 * 🔴 PITTER PATTER STUDIO - VANILLA JAVASCRIPT CONTROL SCRIPT 🔴
 * ==============================================================================
 * Clean, lightweight, 100% vanilla JavaScript.
 * Zero frameworks, zero external dependencies.
 * Ready for GitHub Pages and any standard static web hosting.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------------------------
     1. 📱 MOBILE NAVIGATION DRAWER TOGGLE
     ---------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  /* ----------------------------------------------------------------------------
     2. 📜 STICKY HEADER SCROLL SHADOW
     ---------------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ----------------------------------------------------------------------------
     3. 👶 HERO AGE BRACKET SWITCHER (1.5-2.5, 2.5-4, 4-6)
     ---------------------------------------------------------------------------- */
  const ageData = {
    '1.5-2.5': {
      title: 'Toddler Sanctuary (Ages 1.5–2.5)',
      tagline: 'Sensory grounding, tactile floor autonomy & emotional regulation',
      focus: 'Gentle, low-stimulation exploration with natural non-toxic timbers, soft climbing arches, and soothing acoustic textures.',
      color: '#4F9CF8',
      bg: '#EBF3FE',
      highlights: [
        'Plastic-free loose parts & natural materials',
        'Intrapersonal haven for quiet pauses',
        '1:4 educator-to-child ratio',
      ],
    },
    '2.5-4': {
      title: 'Curious Explorers (Ages 2.5–4)',
      tagline: 'Process art, sensory integration & Montessori toolsets',
      focus: 'Open-ended clay work, shadow & light tables, and self-correcting wooden puzzles celebrating the process of discovery.',
      color: '#B8433C',
      bg: '#FBEAE8',
      highlights: [
        'Atelier of Curiosity (no rigid templates)',
        'Collaborative loose-parts architecture',
        'Guided by certified Montessori facilitators',
      ],
    },
    '4-6': {
      title: 'Creative Inquirers (Ages 4–6)',
      tagline: 'Spatial problem solving, paper engineering & social dialogue',
      focus: 'Hands-on construction, 3D paper folding and origami, natural botanical sciences, and collaborative peer inquiry.',
      color: '#48BF7B',
      bg: '#EAF8F1',
      highlights: [
        'Origami & 3D tactile paper sculpting',
        'Multiple Intelligences holistic tracking',
        'High-order curiosity & vocabulary building',
      ],
    },
  };

  const ageButtons = document.querySelectorAll('.hero-age-btn');
  const heroTierBox = document.getElementById('heroTierBox');
  const heroTierTitle = document.getElementById('heroTierTitle');
  const heroTierTagline = document.getElementById('heroTierTagline');
  const heroTierFocus = document.getElementById('heroTierFocus');
  const heroTierHighlights = document.getElementById('heroTierHighlights');

  ageButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedKey = btn.getAttribute('data-age');
      if (!selectedKey || !ageData[selectedKey]) return;

      ageButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const data = ageData[selectedKey];
      if (heroTierBox) heroTierBox.style.backgroundColor = data.bg;
      if (heroTierTitle) heroTierTitle.textContent = data.title;
      if (heroTierTagline) heroTierTagline.textContent = `"${data.tagline}"`;
      if (heroTierFocus) heroTierFocus.textContent = data.focus;

      if (heroTierHighlights) {
        heroTierHighlights.innerHTML = data.highlights
          .map((h) => `<div style="display:flex;align-items:center;gap:6px;font-size:0.8rem;font-weight:600;margin-top:4px;">
            <span style="color:${data.color};">✓</span> <span>${h}</span>
          </div>`)
          .join('');
      }
    });
  });

  /* ----------------------------------------------------------------------------
     4. 🧠 PHILOSOPHY SECTION TABS (Space Works, Frameworks, Dimensions)
     ---------------------------------------------------------------------------- */
  const tabBtns = document.querySelectorAll('.tab-nav-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;

      tabBtns.forEach((b) => b.classList.remove('active'));
      tabPanels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });

  /* ----------------------------------------------------------------------------
     5. 🏛️ THE PHYSICAL SPACE ZONE TABS (Create Studio, Montessori, Haven, Path)
     ---------------------------------------------------------------------------- */
  const zoneData = [
    {
      title: 'The Create Studio (Clay, Art & Sound)',
      subtitle: 'Process art stations, light tables & non-toxic clay modeling',
      tagline: 'Tactile exploration where discovery matters more than perfection',
      description: 'Equipped with natural terracotta clay, child-height light tables, shadow projection easels, and organic rhythm instruments. Children experiment with pigment density, form transformation, and acoustic pitch in an open, spill-friendly atelier.',
      color: '#4F9CF8',
      bgLight: '#EBF3FE',
      materials: [
        'Pure earth non-toxic modeling clay & carving tools',
        'Backlit sensory light tables for translucency and color mixing',
        'Rhythmic sound play with rainsticks, woodblocks & Tibetan singing bowls',
      ],
    },
    {
      title: 'Montessori & Cognitive Nook',
      subtitle: 'Low-level wooden shelving, tactile sorting tools & self-correcting puzzles',
      tagline: 'Self-directed order, concentration and spatial logic',
      description: 'Arranged strictly at toddler and preschooler eye levels. Trays of mortise-and-tenon wood cylinders, color graduated tablets, tactile weight sorting scales, and counting beads encourage repetitive trial-and-error without adult correction.',
      color: '#B8433C',
      bgLight: '#FBEAE8',
      materials: [
        'FSC-certified European beechwood geometric solids',
        'Self-correcting Montessori sensory knobbed cylinders',
        'Weight balances, tongs, pincer tweezers & grain transfer trays',
      ],
    },
    {
      title: 'The Intrapersonal & Reading Haven',
      subtitle: 'Sound-dampening felt, sheepskin rugs, floor cushions & low mirrors',
      tagline: 'A sanctuary for emotional regulation and quiet observation',
      description: 'A cozy, acoustically protected alcove designed for children who need a pause from high sensory stimulation. Low shatterproof mirrors foster facial emotional recognition, while curated wordless picture books offer peaceful solace.',
      color: '#48BF7B',
      bgLight: '#EAF8F1',
      materials: [
        'Acoustic sound-absorbing felt panels in soothing warm tones',
        'Organic sheepskin floor rugs and weighted linen cushions',
        'Curated picture library focused on emotions, nature, and wonder',
      ],
    },
    {
      title: 'Sensory & Active Discovery Path',
      subtitle: 'Textured walking pathways, Pikler-inspired climbing & balance stations',
      tagline: 'Vestibular balance and natural gross motor progression',
      description: 'Children shed their shoes to experience river-stone barefoot paths, gentle curved wooden balance beams, soft-angle Pikler climbing triangles, and padded landing zones, cultivating spatial awareness and body confidence.',
      color: '#1E232B',
      bgLight: '#F1F5F9',
      materials: [
        'Textured natural stepping stones (bamboo, cork, smooth pebble)',
        'Low-rise Pikler climbing frames with gentle incline ramps',
        'High-density shock-absorbing EVA underlay beneath organic rugs',
      ],
    },
  ];

  const zoneButtons = document.querySelectorAll('.zone-tab-btn');
  const zoneTitleElem = document.getElementById('zoneDisplayTitle');
  const zoneTaglineElem = document.getElementById('zoneDisplayTagline');
  const zoneDescElem = document.getElementById('zoneDisplayDesc');
  const zoneMaterialsElem = document.getElementById('zoneDisplayMaterials');

  zoneButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      zoneButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const z = zoneData[index];
      if (!z) return;

      if (zoneTitleElem) zoneTitleElem.textContent = z.title;
      if (zoneTaglineElem) zoneTaglineElem.textContent = `"${z.tagline}"`;
      if (zoneDescElem) zoneDescElem.textContent = z.description;

      if (zoneMaterialsElem) {
        zoneMaterialsElem.innerHTML = z.materials
          .map((m) => `<div style="display:flex;align-items:flex-start;gap:8px;font-size:0.85rem;margin-bottom:6px;">
            <span style="color:${z.color};margin-top:2px;">•</span>
            <span>${m}</span>
          </div>`)
          .join('');
      }
    });
  });

  /* ----------------------------------------------------------------------------
     6. 📝 PROGRAM SELECTION PRE-FILLING
     ---------------------------------------------------------------------------- */
  window.selectProgram = function(programName) {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    const checkboxCards = document.querySelectorAll('.checkbox-card');
    checkboxCards.forEach((card) => {
      const input = card.querySelector('input[type="checkbox"]');
      if (input && card.getAttribute('data-program')?.includes(programName)) {
        input.checked = true;
        card.classList.add('selected');
      }
    });
  };

  // Interactive Checkbox Cards in Form
  const checkboxCards = document.querySelectorAll('.checkbox-card');
  checkboxCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      if (checkbox && e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      if (checkbox?.checked) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  });

  /* ----------------------------------------------------------------------------
     7. ✉️ MAIN REGISTRATION FORM SUBMISSION
     ---------------------------------------------------------------------------- */
  const registrationForm = document.getElementById('registrationForm');
  const formSuccessBox = document.getElementById('formSuccessBox');
  const registeredParentName = document.getElementById('registeredParentName');

  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentNameInput = document.getElementById('parentName');
      const name = parentNameInput?.value || 'Parent';

      if (registeredParentName) {
        registeredParentName.textContent = name;
      }

      registrationForm.style.display = 'none';
      if (formSuccessBox) {
        formSuccessBox.style.display = 'block';
      }
    });
  }

  window.resetRegistrationForm = function() {
    if (registrationForm) {
      registrationForm.reset();
      registrationForm.style.display = 'block';
    }
    if (formSuccessBox) {
      formSuccessBox.style.display = 'none';
    }
  };

  /* ----------------------------------------------------------------------------
     8. 📅 BOOKING MODAL & BROCHURE MODAL HANDLERS
     ---------------------------------------------------------------------------- */
  const bookingModal = document.getElementById('bookingModal');
  const brochureModal = document.getElementById('brochureModal');

  window.openBookingModal = function(defaultOption) {
    if (bookingModal) {
      bookingModal.classList.add('open');
      if (defaultOption) {
        const optionSelect = document.getElementById('modalProgramSelect');
        if (optionSelect) optionSelect.value = defaultOption;
      }
    }
  };

  window.closeBookingModal = function() {
    bookingModal?.classList.remove('open');
  };

  window.openBrochureModal = function() {
    brochureModal?.classList.add('open');
  };

  window.closeBrochureModal = function() {
    brochureModal?.classList.remove('open');
  };

  // Close modals on Escape key or backdrop click
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeBrochureModal();
    }
  });

  [bookingModal, brochureModal].forEach((modal) => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  // Modal Form Submissions
  const modalBookingForm = document.getElementById('modalBookingForm');
  const modalBookingSuccess = document.getElementById('modalBookingSuccess');
  if (modalBookingForm) {
    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalBookingForm.style.display = 'none';
      if (modalBookingSuccess) modalBookingSuccess.style.display = 'block';
    });
  }

  const modalBrochureForm = document.getElementById('modalBrochureForm');
  const modalBrochureSuccess = document.getElementById('modalBrochureSuccess');
  if (modalBrochureForm) {
    modalBrochureForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalBrochureForm.style.display = 'none';
      if (modalBrochureSuccess) modalBrochureSuccess.style.display = 'block';
    });
  }

});
