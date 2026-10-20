import React from 'react';
import { Language, portfolioData } from '../data/portfolio';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const { skillGroups, languagesAndCerts } = portfolioData;
  const t = portfolioData.ui[lang].skills;
  const certs = languagesAndCerts[lang];

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-b border-border/70"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
          02 // {t.label}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {skillGroups.map((group, idx) => {
          const content = group[lang];
          return (
            <div
              key={group.id}
              className="rounded-xl bg-surface border border-border p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-border">
                  <h3 className="text-base font-bold text-foreground">
                    {content.title}
                  </h3>
                  <span className="font-mono text-xs text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {content.subtitle}
                </p>

                <div className="space-y-5">
                  {content.items.map((item) => (
                    <div
                      key={item.name}
                      className="pb-4 border-b border-border/50 last:border-b-0 last:pb-0"
                    >
                      <div className="text-sm font-semibold text-slate-200 mb-1">
                        {item.name}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-2.5">
                        {item.context}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-background border border-border rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Languages & Certifications Strip */}
      <div className="rounded-xl bg-surface border border-border p-6">
        <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4">
          {t.certificationsLabel}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((item) => (
            <div
              key={item.title}
              className="p-3.5 rounded-lg bg-background/60 border border-border/80"
            >
              <div className="text-xs font-mono font-semibold text-emerald-400 mb-1">
                {item.title}
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
