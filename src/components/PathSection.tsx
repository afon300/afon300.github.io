import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Language, TimelineItem, portfolioData } from '../data/portfolio';

interface PathSectionProps {
  lang: Language;
}

const TimelineCard: React.FC<{ item: TimelineItem; lang: Language }> = ({
  item,
  lang,
}) => {
  const content = item[lang];
  return (
    <div className="relative pl-6 pb-8 last:pb-0 border-l border-border">
      {/* Timeline Node */}
      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-background" />

      <div className="rounded-xl bg-surface border border-border p-5 sm:p-6 hover:border-border-strong transition-colors">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="font-mono text-xs text-emerald-400 font-medium">
            {item.period[lang]}
          </span>
          {item.badge && (
            <span className="font-mono text-[11px] text-slate-300 bg-surface-elevated border border-border px-2 py-0.5 rounded">
              {item.badge[lang]}
            </span>
          )}
        </div>

        <h4 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
          {content.role}
        </h4>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400 mb-3">
          <span className="text-slate-200 font-medium">{item.organization}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} />
            {item.location[lang]}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3.5">
          {content.summary}
        </p>

        <ul className="space-y-2 border-t border-border/60 pt-3">
          {content.details.map((detail, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed"
            >
              <span className="font-mono text-emerald-400 mt-0.5 select-none">
                –
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const PathSection: React.FC<PathSectionProps> = ({ lang }) => {
  const { experience, education } = portfolioData;
  const t = portfolioData.ui[lang].path;

  return (
    <section
      id="path"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-b border-border/70"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
          03 // {t.label}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Dual Column Track: Experience & Education */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-start">
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-border">
            <Briefcase size={18} className="text-emerald-400" />
            <h3 className="text-base font-bold text-foreground tracking-tight">
              {t.experienceHeading}
            </h3>
          </div>
          <div>
            {experience.map((item, idx) => (
              <TimelineCard key={idx} item={item} lang={lang} />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-border">
            <GraduationCap size={18} className="text-emerald-400" />
            <h3 className="text-base font-bold text-foreground tracking-tight">
              {t.educationHeading}
            </h3>
          </div>
          <div>
            {education.map((item, idx) => (
              <TimelineCard key={idx} item={item} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
