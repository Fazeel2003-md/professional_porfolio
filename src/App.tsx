/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { QDelta } from './components/QDelta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080A] text-[#E5E7EB] selection:bg-red-600/30 selection:text-white relative overflow-x-hidden font-sans">
      {/* Subtle global ambient glow points */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] max-w-[100vw] h-[400px] bg-red-600/[0.04] rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Primary Navigation */}
      <Navbar onOpenConnect={() => setConnectModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenConnect={() => setConnectModalOpen(true)} />

        {/* 2. Professional Introduction / Philosophy */}
        <About />

        {/* 3. Technical Skills Arsenal */}
        <Skills />

        {/* 4. Featured Production Projects & Case Studies */}
        <Projects />

        {/* 5. Specialized Engineering & AI Services */}
        <Services onOpenConnect={() => setConnectModalOpen(true)} />

        {/* 6. QDelta Venture & Innovation */}
        <QDelta onOpenConnect={() => setConnectModalOpen(true)} />

        {/* 7. Contact & Social Channels */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Connect Modal */}
      {connectModalOpen && (
        <Contact
          isOpenModal={true}
          onCloseModal={() => setConnectModalOpen(false)}
        />
      )}
    </div>
  );
}
