
import React from 'react';
import { I18nProvider } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SetupGuide from './components/SetupGuide';
import Footer from './components/Footer';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <SetupGuide />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
