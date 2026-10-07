/**
 * ==============================================================================
 * 🔴 PITTER PATTER STUDIO - VANILLA JAVASCRIPT CONTROL SCRIPT 🔴
 * ==============================================================================
 * Clean, lightweight, 100% vanilla JavaScript.
 * Zero frameworks, zero external dependencies.
 * Ready for GitHub Pages and any standard static web hosting.
 */

/* 1. Mobile Menu Toggle */
function toggleMobileMenu() {
  var drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    var isOpen = drawer.classList.contains('open') || drawer.style.display === 'block';
    if (isOpen) {
      drawer.classList.remove('open');
      drawer.style.display = 'none';
    } else {
      drawer.classList.add('open');
      drawer.style.display = 'block';
    }
  }
}

/* 2. Age Bracket Switcher Data */
var ageData = {
  '1.5-2.5': {
    title: 'Toddler Sanctuary (Ages 1.5–2.5)',
    tagline: 'Sensory grounding, tactile floor autonomy & emotional regulation',
    focus: 'Gentle, low-stimulation exploration with natural non-toxic timbers, soft climbing arches, and soothing acoustic textures.',
    color: '#4F9CF8',
    bg: '#EBF3FE',
    highlights: [
      'Plastic-free loose parts & natural materials',
      'Intrapersonal haven for quiet pauses',
      '1:4 educator-to-child ratio'
    ]
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
      'Guided by certified Montessori facilitators'
    ]
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
      'High-order curiosity & vocabulary building'
    ]
  }
};

function switchAgeTier(ageKey) {
  var data = ageData[ageKey];
  if (!data) return;

  var b1 = document.getElementById('btnAge1');
  var b2 = document.getElementById('btnAge2');
  var b3 = document.getElementById('btnAge3');
  if (b1) b1.classList.remove('active');
  if (b2) b2.classList.remove('active');
  if (b3) b3.classList.remove('active');

  if (ageKey === '1.5-2.5' && b1) b1.classList.add('active');
  if (ageKey === '2.5-4' && b2) b2.classList.add('active');
  if (ageKey === '4-6' && b3) b3.classList.add('active');

  var box = document.getElementById('heroTierBox');
  var title = document.getElementById('heroTierTitle');
  var tagline = document.getElementById('heroTierTagline');
  var focus = document.getElementById('heroTierFocus');
  var highlights = document.getElementById('heroTierHighlights');

  if (box) box.style.backgroundColor = data.bg;
  if (title) title.textContent = data.title;
  if (tagline) tagline.textContent = '"' + data.tagline + '"';
  if (focus) focus.textContent = data.focus;

  if (highlights) {
    var html = '';
    for (var i = 0; i < data.highlights.length; i++) {
      html += '<div style="display:flex;align-items:center;gap:6px;font-size:0.8rem;font-weight:600;margin-top:4px;">' +
        '<span style="color:' + data.color + ';">✓</span> <span>' + data.highlights[i] + '</span></div>';
    }
    highlights.innerHTML = html;
  }
}

/* 3. Philosophy Section Tabs */
function switchPhilosophyTab(targetId, btnElem) {
  var allBtns = document.querySelectorAll('.tab-nav-btn');
  allBtns.forEach(function(b) { b.classList.remove('active'); });
  if (btnElem) btnElem.classList.add('active');

  var allPanels = document.querySelectorAll('.tab-content-panel');
  allPanels.forEach(function(p) { p.classList.remove('active'); p.style.display = 'none'; });

  var target = document.getElementById(targetId);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
  }
}

/* 4. The Physical Space Zone Tabs */
var zoneData = [
  {
    title: 'The Create Studio (Clay, Art & Sound)',
    tagline: 'Tactile exploration where discovery matters more than perfection',
    description: 'Equipped with natural terracotta clay, child-height light tables, shadow projection easels, and organic rhythm instruments. Children experiment with pigment density, form transformation, and acoustic pitch in an open, spill-friendly atelier.',
    color: '#4F9CF8',
    materials: [
      'Pure earth non-toxic modeling clay & carving tools',
      'Backlit sensory light tables for translucency and color mixing',
      'Rhythmic sound play with rainsticks, woodblocks & Tibetan singing bowls'
    ]
  },
  {
    title: 'Montessori & Cognitive Nook',
    tagline: 'Self-directed order, concentration and spatial logic',
    description: 'Arranged strictly at toddler and preschooler eye levels. Trays of mortise-and-tenon wood cylinders, color graduated tablets, tactile weight sorting scales, and counting beads encourage repetitive trial-and-error without adult correction.',
    color: '#B8433C',
    materials: [
      'FSC-certified European beechwood geometric solids',
      'Self-correcting Montessori sensory knobbed cylinders',
      'Weight balances, tongs, pincer tweezers & grain transfer trays'
    ]
  },
  {
    title: 'The Intrapersonal & Reading Haven',
    tagline: 'A sanctuary for emotional regulation and quiet observation',
    description: 'A cozy, acoustically protected alcove designed for children who need a pause from high sensory stimulation. Low shatterproof mirrors foster facial emotional recognition, while curated wordless picture books offer peaceful solace.',
    color: '#48BF7B',
    materials: [
      'Acoustic sound-absorbing felt panels in soothing warm tones',
      'Organic sheepskin floor rugs and weighted linen cushions',
      'Curated picture library focused on emotions, nature, and wonder'
    ]
  },
  {
    title: 'Sensory & Active Discovery Path',
    tagline: 'Vestibular balance and natural gross motor progression',
    description: 'Children shed their shoes to experience river-stone barefoot paths, gentle curved wooden balance beams, soft-angle Pikler climbing triangles, and padded landing zones, cultivating spatial awareness and body confidence.',
    color: '#1E232B',
    materials: [
      'Textured natural stepping stones (bamboo, cork, smooth pebble)',
      'Low-rise Pikler climbing frames with gentle incline ramps',
      'High-density shock-absorbing EVA underlay beneath organic rugs'
    ]
  }
];

function switchZone(index, btnElem) {
  var btns = document.querySelectorAll('.zone-tab-btn');
  btns.forEach(function(b) { b.classList.remove('active'); });
  if (btnElem) btnElem.classList.add('active');

  var z = zoneData[index];
  if (!z) return;

  var titleElem = document.getElementById('zoneDisplayTitle');
  var taglineElem = document.getElementById('zoneDisplayTagline');
  var descElem = document.getElementById('zoneDisplayDesc');
  var matElem = document.getElementById('zoneDisplayMaterials');

  if (titleElem) titleElem.textContent = z.title;
  if (taglineElem) taglineElem.textContent = '"' + z.tagline + '"';
  if (descElem) descElem.textContent = z.description;

  if (matElem) {
    var html = '';
    for (var i = 0; i < z.materials.length; i++) {
      html += '<div style="display:flex;align-items:flex-start;gap:8px;font-size:0.85rem;margin-bottom:6px;">' +
        '<span style="color:' + z.color + ';margin-top:2px;">•</span>' +
        '<span>' + z.materials[i] + '</span></div>';
    }
    matElem.innerHTML = html;
  }
}

/* 5. Program Selection Pre-filling */
function selectProgram(programName) {
  var contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  var cards = document.querySelectorAll('.checkbox-card');
  cards.forEach(function(card) {
    var box = card.querySelector('input[type="checkbox"]');
    if (box && box.value === programName) {
      box.checked = true;
      card.classList.add('selected');
    }
  });
}

function toggleProgramCheckbox(checkboxId, cardElem) {
  var checkbox = document.getElementById(checkboxId);
  if (checkbox) {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      cardElem.classList.add('selected');
    } else {
      cardElem.classList.remove('selected');
    }
  }
}

/* 6. Form Handlers */
function handleRegistrationSubmit(e) {
  e.preventDefault();
  var nameInput = document.getElementById('parentName');
  var name = nameInput ? nameInput.value : 'Parent';
  var nameElem = document.getElementById('registeredParentName');
  if (nameElem) nameElem.textContent = name;

  var form = document.getElementById('registrationForm');
  var success = document.getElementById('formSuccessBox');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
}

function resetRegistrationForm() {
  var form = document.getElementById('registrationForm');
  var success = document.getElementById('formSuccessBox');
  if (form) {
    form.reset();
    form.style.display = 'block';
  }
  if (success) success.style.display = 'none';
}

/* 7. Modals */
function openBookingModal(defaultOption) {
  var modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
    if (defaultOption) {
      var sel = document.getElementById('modalProgramSelect');
      if (sel) sel.value = defaultOption;
    }
  }
}

function closeBookingModal() {
  var modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
}

function openBrochureModal() {
  var modal = document.getElementById('brochureModal');
  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
  }
}

function closeBrochureModal() {
  var modal = document.getElementById('brochureModal');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
}

function handleModalBookingSubmit(e) {
  e.preventDefault();
  var form = document.getElementById('modalBookingForm');
  var success = document.getElementById('modalBookingSuccess');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
}

function handleModalBrochureSubmit(e) {
  e.preventDefault();
  var form = document.getElementById('modalBrochureForm');
  var success = document.getElementById('modalBrochureSuccess');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
}

/* Keydown & Window Listeners */
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeBookingModal();
    closeBrochureModal();
  }
});

window.addEventListener('click', function(e) {
  var booking = document.getElementById('bookingModal');
  var brochure = document.getElementById('brochureModal');
  if (e.target === booking) closeBookingModal();
  if (e.target === brochure) closeBrochureModal();
});

/* Sticky Header on Scroll */
window.addEventListener('scroll', function() {
  var hdr = document.getElementById('siteHeader');
  if (hdr) {
    if (window.scrollY > 20) {
      hdr.classList.add('scrolled');
    } else {
      hdr.classList.remove('scrolled');
    }
  }
}, { passive: true });
