import { useState, useEffect } from 'react';
import { Language } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { PathSection } from './components/PathSection';
import { BeyondSection } from './components/BeyondSection';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'fr'
        ? 'Antoine Fourneyron — Ingénieur Logiciel, Data & Systèmes'
        : 'Antoine Fourneyron — Software, Data & Systems Engineer';
  }, [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      {/* Subtle architectural grid fade at the top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-grid-pattern [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"
        aria-hidden="true"
      />

      <Navbar lang={lang} setLang={setLang} scrolled={scrolled} />

      <main className="relative z-10">
        <Hero lang={lang} />
        <ProjectsSection lang={lang} />
        <SkillsSection lang={lang} />
        <PathSection lang={lang} />
        <BeyondSection lang={lang} />
      </main>

      <ContactFooter lang={lang} />
    </div>
  );
}
