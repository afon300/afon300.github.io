import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Copy,
  Check,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import { Language, portfolioData } from '../data/portfolio';

interface ContactFooterProps {
  lang: Language;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const { personal } = portfolioData;
  const t = portfolioData.ui[lang].contact;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <footer id="contact" className="pt-20 pb-14 px-5 sm:px-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-border/70">
        {/* Left Column: Callout & Direct Email / CV Actions */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
              05 // {t.label}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
              {t.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-colors"
              >
                <Mail size={15} />
                <span>{personal.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-surface hover:bg-surface-hover border border-border text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors pt-1"
              >
                <FileText size={14} />
                <span>{t.downloadCv}</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Structured Contact Grid */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-surface border border-border hover:border-border-strong transition-colors flex items-start justify-between group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-surface-elevated border border-border text-slate-200">
                <Github size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 mb-0.5">
                  GitHub
                </div>
                <div className="text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                  @{personal.githubUsername}
                </div>
              </div>
            </div>
            <ArrowUpRight
              size={15}
              className="text-slate-500 group-hover:text-foreground transition-colors"
            />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-surface border border-border hover:border-border-strong transition-colors flex items-start justify-between group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-surface-elevated border border-border text-slate-200">
                <Linkedin size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 mb-0.5">
                  LinkedIn
                </div>
                <div className="text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                  Antoine Fourneyron
                </div>
              </div>
            </div>
            <ArrowUpRight
              size={15}
              className="text-slate-500 group-hover:text-foreground transition-colors"
            />
          </a>

          <a
            href={`mailto:${personal.efreiEmail}`}
            className="p-4 rounded-xl bg-surface border border-border hover:border-border-strong transition-colors flex items-start justify-between group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-surface-elevated border border-border text-slate-200">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 mb-0.5">
                  {t.academicEmail}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors break-all">
                  {personal.efreiEmail}
                </div>
              </div>
            </div>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s/g, '')}`}
            className="p-4 rounded-xl bg-surface border border-border hover:border-border-strong transition-colors flex items-start justify-between group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-surface-elevated border border-border text-slate-200">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 mb-0.5">
                  {t.phone}
                </div>
                <div className="text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                  {personal.phone}
                </div>
              </div>
            </div>
          </a>

          <div className="sm:col-span-2 p-4 rounded-xl bg-surface/60 border border-border flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="p-2 rounded-lg bg-surface-elevated border border-border text-slate-300">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 mb-0.5">
                  {t.location}
                </div>
                <div className="text-sm font-medium text-slate-200">
                  {personal.location[lang]}
                </div>
              </div>
            </div>
            <span className="font-mono text-xs text-slate-500 hidden sm:inline">
              48.813° N, 2.388° E
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          © {new Date().getFullYear()} {personal.name} · afon300.github.io
        </div>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            CV (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
};
