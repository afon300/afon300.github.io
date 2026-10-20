import React, { useState } from 'react';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';
import { Language, ProjectCategory, portfolioData } from '../data/portfolio';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const { projects, personal } = portfolioData;
  const t = portfolioData.ui[lang].projects;

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.filters.all },
    { id: 'quant', label: t.filters.quant },
    { id: 'ai', label: t.filters.ai },
    { id: 'systems', label: t.filters.systems },
  ];

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-5 sm:px-8 max-w-6xl mx-auto border-b border-border/70"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
            01 // {t.label}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-surface p-1 rounded-lg border border-border self-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-surface-elevated text-foreground border border-border-strong shadow-sm'
                  : 'text-slate-400 hover:text-foreground border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const content = project[lang];
          return (
            <article
              key={project.id}
              className="rounded-xl bg-surface border border-border hover:border-border-strong transition-colors p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs text-slate-400">
                    {project.year}
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                    {project.highlight}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5">
                  {content.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {content.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {content.description}
                </p>

                {/* Technical Bullet Points */}
                <ul className="space-y-2.5 mb-6 border-t border-border/60 pt-4">
                  {content.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-400 leading-relaxed"
                    >
                      <span className="font-mono text-emerald-400 mt-0.5 select-none">
                        –
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Tech Stack & Repository Link */}
              <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-background border border-border rounded"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-foreground hover:text-emerald-400 transition-colors shrink-0"
                  >
                    <Github size={14} />
                    <span>{t.viewRepo}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 shrink-0">
                    <FolderGit2 size={13} />
                    <span>{t.privateOrAcademic}</span>
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom GitHub Callout */}
      <div className="mt-8 rounded-xl bg-surface/60 border border-border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-2.5 rounded-lg bg-surface-elevated border border-border text-slate-200 shrink-0">
            <Github size={20} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.moreGithubTitle}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{t.moreGithubSub}</p>
          </div>
        </div>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border-strong text-xs font-mono font-medium text-foreground transition-colors self-start sm:self-auto shrink-0"
        >
          <span>github.com/{personal.githubUsername}</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};
