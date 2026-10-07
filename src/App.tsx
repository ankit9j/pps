/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { PhilosophySection } from './components/PhilosophySection';
import { TheSpaceSection } from './components/TheSpaceSection';
import { SafetySection } from './components/SafetySection';
import { ProgramsSection } from './components/ProgramsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BrochureModal } from './components/BrochureModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedProgramForContact, setSelectedProgramForContact] = useState<string>('');

  const handleOpenBookingModal = (programName?: string) => {
    if (programName) {
      setSelectedProgramForContact(programName);
    }
    setIsBookingModalOpen(true);
  };

  const handleJoinCommunity = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const handleSelectProgram = (programName: string) => {
    setSelectedProgramForContact(programName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#4F9CF8] selection:text-white flex flex-col">
      {/* Top Navbar adhering to the Founder Architecture */}
      <Navbar onJoinCommunityClick={handleJoinCommunity} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onBookVisitClick={() => handleOpenBookingModal('Studio Visit & Experiential Tour')} 
          onDownloadBrochureClick={() => setIsBrochureModalOpen(true)}
        />

        {/* Section 1: About Us (Building Spaces Where Children Lead and Discover & Founder Credibility) */}
        <AboutUs />

        {/* Section 2: Our Philosophy (Child-Led, Process-Focused, and Balanced Discovery) */}
        <PhilosophySection />

        {/* Section 3: The Physical Space (Designed as the "Third Teacher") */}
        <TheSpaceSection />

        {/* Section 4: Health, Safety & AQI Standards (Peace of Mind for Every Parent) */}
        <SafetySection />

        {/* Section 5: Programs & Access Options (Flexible options tailored for neighborhood families) */}
        <ProgramsSection onSelectProgram={handleSelectProgram} />

        {/* Section 6: Sign-Up & Registration / Contact (Join the Community / Register Your Interest) */}
        <ContactSection preselectedProgram={selectedProgramForContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Visit / Slot Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultProgram={selectedProgramForContact}
      />

      {/* Studio Information Brochure Download Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />
    </div>
  );
}
