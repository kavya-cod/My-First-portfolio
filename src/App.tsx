import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Coursework } from './components/Coursework';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'experience',
      'projects',
      'skills',
      'education',
      'certifications',
      'coursework',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090E] text-[#F8FAFC] flex flex-col selection:bg-violet-600/30 selection:text-violet-200">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Coursework />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
