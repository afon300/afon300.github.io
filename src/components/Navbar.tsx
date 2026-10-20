import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Language, portfolioData } from '../data/portfolio';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  scrolled: boolean;
}

const FlagFR: React.FC<{ className?: string }> = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 36 24" className={`${className} rounded-[2px] shadow-sm shrink-0`} aria-hidden="true">
    <rect width="12" height="24" x="0" y="0" fill="#002395" />
    <rect width="12" height="24" x="12" y="0" fill="#FFFFFF" />
    <rect width="12" height="24" x="24" y="0" fill="#ED2939" />
  </svg>
);

const FlagUK: React.FC<{ className?: string }> = ({ className = "w-4 h-3" }) => (
  <svg viewBox="0 0 60 36" className={`${className} rounded-[2px] shadow-sm shrink-0`} aria-hidden="true">
    <clipPath id="uk-clip">
      <rect width="60" height="36" rx="2" />
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <rect width="60" height="36" fill="#012169" />
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#FFFFFF" strokeWidth="7" />
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V36 M0,18 H60" stroke="#FFFFFF" strokeWidth="11" />
      <path d="M30,0 V36 M0,18 H60" stroke="#C8102E" strokeWidth="6.5" />
    </g>
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = portfolioData.ui[lang].nav;

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#projects", label: t.projects },
    { href: "#skills", label: t.skills },
    { href: "#path", label: t.path },
    { href: "#beyond", label: t.beyond },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border py-3'
          : 'bg-background/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand / Identity */}
        <a
          href="#about"
          className="group flex items-center gap-3 text-foreground hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-surface-elevated border border-border-strong flex items-center justify-center font-mono text-xs font-semibold text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            AF
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-foreground leading-none">
              Antoine Fourneyron
            </span>
            <span className="font-mono text-[11px] text-muted mt-1 leading-none">
              Paris · Ingénieur & Data
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-sm font-medium text-muted hover:text-foreground rounded-md hover:bg-surface transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions: FR/UK Flag Switcher + CV + Contact */}
        <div className="flex items-center gap-2.5">
          {/* Segmented FR / UK Flag Switcher */}
          <div
            className="inline-flex items-center p-0.5 rounded-lg bg-surface border border-border"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLang('fr')}
              title="Version Française"
              aria-pressed={lang === 'fr'}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                lang === 'fr'
                  ? 'bg-surface-elevated text-foreground border border-border-strong shadow-sm'
                  : 'text-muted hover:text-foreground border border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <FlagFR />
              <span>FR</span>
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              title="English Version"
              aria-pressed={lang === 'en'}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                lang === 'en'
                  ? 'bg-surface-elevated text-foreground border border-border-strong shadow-sm'
                  : 'text-muted hover:text-foreground border border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <FlagUK />
              <span>EN</span>
            </button>
          </div>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white bg-surface hover:bg-surface-hover border border-border rounded-lg transition-colors"
          >
            <FileText size={14} className="text-emerald-400" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold bg-foreground text-background rounded-lg hover:bg-slate-200 transition-colors"
          >
            {t.contact}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-surface border border-border text-muted hover:text-foreground"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-5 pt-3 pb-5 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-300 hover:text-white border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-slate-200 bg-surface border border-border rounded-lg"
            >
              <FileText size={14} className="text-emerald-400" />
              <span>CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 text-xs font-semibold bg-foreground text-background rounded-lg"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
