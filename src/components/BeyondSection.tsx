import React from 'react';
import { Compass, Music, BookOpen } from 'lucide-react';
import { Language, portfolioData } from '../data/portfolio';

interface BeyondSectionProps {
  lang: Language;
}

export const BeyondSection: React.FC<BeyondSectionProps> = ({ lang }) => {
  const { interests } = portfolioData;
  const t = portfolioData.ui[lang].beyond;

  const getIcon = (id: string) => {
    switch (id) {
      case 'cycling-climbing':
        return <Compass size={18} className="text-emerald-400" />;
      case 'piano':
        return <Music size={18} className="text-emerald-400" />;
      default:
        return <BookOpen size={18} className="text-emerald-400" />;
    }
  };

  return (
    <section
      id="beyond"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-b border-border/70"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
          04 // {t.label}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* 3-Card Personal Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {interests.map((item) => {
          const content = item[lang];
          return (
            <div
              key={item.id}
              className="rounded-xl bg-surface border border-border p-6 flex flex-col justify-between hover:border-border-strong transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-surface-elevated border border-border">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {content.period}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {content.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {content.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
