import React from 'react';
import { ArrowDownRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Language, portfolioData } from '../data/portfolio';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { personal } = portfolioData;
  const t = portfolioData.ui[lang].hero;

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8 max-w-6xl mx-auto border-b border-border/70"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* Main Editorial Column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-surface border border-border text-xs font-mono text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{t.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.14] mb-5">
            {t.headline}
          </h1>

          <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug mb-5">
            {t.subheadline}
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
            {t.bio}
          </p>

          {/* Primary Actions */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-foreground text-background text-sm font-semibold hover:bg-slate-200 transition-colors"
            >
              <span>{t.primaryCta}</span>
              <ArrowDownRight size={16} />
            </a>

            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface hover:bg-surface-hover text-foreground text-sm font-medium border border-border hover:border-border-strong transition-colors"
            >
              <FileText size={16} className="text-emerald-400" />
              <span>{t.secondaryCta}</span>
            </a>
          </div>

          {/* Quick Links Strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-border/70 text-xs font-mono text-slate-400">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github size={15} className="text-slate-300" />
              <span>github.com/{personal.githubUsername}</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin size={15} className="text-slate-300" />
              <span>linkedin.com/in/antoine-fourneyron</span>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail size={15} className="text-slate-300" />
              <span>{personal.email}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <MapPin size={14} />
              <span>{personal.location[lang]}</span>
            </span>
          </div>
        </div>

        {/* Right Column: Structured Profile Card */}
        <div className="lg:col-span-5">
          <div className="rounded-xl bg-surface border border-border overflow-hidden shadow-xl">
            {/* Header Bar */}
            <div className="px-5 py-3.5 bg-surface-elevated/60 border-b border-border flex items-center justify-between">
              <span className="font-mono text-xs font-medium text-slate-300">
                {t.snapshotTitle}
              </span>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                EFREI · M1
              </span>
            </div>

            {/* Snapshot Rows */}
            <div className="divide-y divide-border/70">
              {t.snapshotItems.map((item, idx) => (
                <div key={idx} className="px-5 py-4 hover:bg-surface-hover/50 transition-colors">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Stack Footer */}
            <div className="px-5 py-3.5 bg-background/60 border-t border-border flex flex-wrap items-center gap-1.5">
              {['Python', 'C / C++', 'SQL', 'PyData & ML', 'Docker', 'Linux'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-surface-elevated border border-border rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
