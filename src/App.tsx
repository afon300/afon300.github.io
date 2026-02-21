import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  ChevronRight,
  TrendingUp,
  Briefcase,
  Languages,
  Bug,
  Download,
  Award,
  MapPin
} from 'lucide-react';
import { 
  AreaChart,
  Area,
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { portfolioData } from './data/portfolio';

type SectionProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  id: string;
};

type Skill = {
  name: string;
  level: number;
};

const Section: React.FC<SectionProps> = ({ title, icon, children, id }) => (
  <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
    <div className="flex items-center gap-3 mb-12">
      <div className="p-3 bg-primary/10 rounded-xl text-primary">
        {icon}
      </div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const SkillBar = ({ name, level }: { name: string, level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-slate-400">{level}%</span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-primary h-full rounded-full"
      />
    </div>
  </div>
);

const mockStockData = [
  { name: '1', val: 4000 }, { name: '2', val: 3000 }, { name: '3', val: 5000 },
  { name: '4', val: 2780 }, { name: '5', val: 1890 }, { name: '6', val: 2390 },
  { name: '7', val: 3490 }, { name: '8', val: 4000 }, { name: '9', val: 3000 },
  { name: '10', val: 5000 }, { name: '11', val: 2780 }, { name: '12', val: 3890 },
  { name: '13', val: 2390 }, { name: '14', val: 3490 }, { name: '15', val: 4000 }
];

export default function App() {
  const { personal, formation, projects, experience, certifications, skills } = portfolioData;
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [debugMode, setDebugMode] = useState(false);

  const t = personal.translations[lang];

  return (
    <div className="min-h-screen selection:bg-primary/30 relative bg-background text-foreground">
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDebugMode(!debugMode)}
          className={`p-4 rounded-full shadow-2xl ${debugMode ? 'bg-primary text-white' : 'bg-secondary text-slate-400'} border border-white/10`}
        >
          <Bug size={24} />
        </motion.button>
        <motion.a
          href="/CV.pdf"
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 rounded-full bg-accent text-white shadow-2xl border border-white/10"
        >
          <Download size={24} />
        </motion.a>
      </div>

      <AnimatePresence>
        {debugMode && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-20 right-6 z-[90] w-64 p-6 rounded-3xl bg-black/90 border border-primary/30 backdrop-blur-xl text-[10px] font-mono"
          >
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
              <Terminal size={12} /> SYSTEM_DEBUG_v1.0
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>STATUS</span>
                <span className="text-green-400">STATIC_PROD</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>ENGINE</span>
                <span className="text-blue-400">VITE + REACT</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>ENV</span>
                <span className="text-orange-400">PUBLIC</span>
              </div>
              <div className="mt-4 p-2 bg-white/5 rounded">
                <span className="text-slate-500">{"// Log output"}</span>
                <p className="text-green-500 mt-1">{"[OK] Assets optimized"}</p>
                <p className="text-green-500">{"[OK] No backend required"}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            fourneyron.digital
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-primary transition-colors">{t.sections.about}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{t.sections.projects}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{t.sections.skills}</a>
            <a href="#path" className="hover:text-primary transition-colors">{t.sections.path}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              <Languages size={16} /> {lang.toUpperCase()}
            </button>
            <a 
              href="#contact"
              className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all"
            >
              {t.contactBtn}
            </a>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.available}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t.heroTitle.split('&')[0]} <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.heroTitle.split('&')[1] || 'Data & IT'}
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            {t.bio}
          </p>
          
          <div className="flex gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2">
                <Github size={20} />
                <span>GitHub</span>
              </div>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-xl hover:scale-105 transition-transform border border-white/5">
              <div className="flex items-center gap-2">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary mb-1">
                <TrendingUp size={14} />
                <span className="text-[10px] font-mono uppercase tracking-widest">Analysis Demo</span>
              </div>
              <h3 className="text-xl font-bold">{lang === 'fr' ? 'Analyse de Volatilité' : 'Volatility Analysis'}</h3>
              <p className="text-xs text-slate-500">{lang === 'fr' ? 'Visualisation dynamique.' : 'Dynamic visualization.'}</p>
            </div>
            <div className="h-40 w-full mt-4 relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockStockData}>
                    <defs>
                      <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '12px', 
                        fontSize: '10px',
                        backdropFilter: 'blur(4px)'
                      }} 
                      labelStyle={{ display: 'none' }} 
                      itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="val" 
                      stroke="url(#lineGradient)" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorVal)" 
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
          </div>
        </motion.div>
      </section>

      <Section id="projects" title={t.sections.projects} icon={<Code2 size={24} />}>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="group p-8 rounded-3xl bg-secondary/50 border border-white/5 hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, i: number) => (
                    <span key={i} className="px-2 py-1 text-[10px] font-bold bg-white/5 rounded-md text-slate-300 uppercase">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-4">{project[lang].title}</h3>
              <p className="text-slate-400 mb-6 text-sm">{project[lang].description}</p>
              <ul className="space-y-2">
                {project[lang].details?.map((detail: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                    <ChevronRight size={12} className="text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/20 transition-colors">
            <div className="p-4 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform"><Github size={24} className="text-slate-500" /></div>
            <h3 className="font-bold text-slate-300">{lang === 'fr' ? 'Voir plus sur GitHub' : 'See more on GitHub'}</h3>
          </a>
        </div>
      </Section>

      <Section id="skills" title={t.sections.skills} icon={<Database size={24} />}>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Terminal size={18} className="text-primary" /> {lang === 'fr' ? 'Développement' : 'Development'}</h3>
            {skills?.development?.map((s: Skill) => <SkillBar key={s.name} name={s.name} level={s.level} />)}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Database size={18} className="text-primary" /> Data & BDD</h3>
            {skills?.data?.map((s: Skill) => <SkillBar key={s.name} name={s.name} level={s.level} />)}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Code2 size={18} className="text-primary" /> {lang === 'fr' ? 'Outils' : 'Tools'}</h3>
            {skills?.tools?.map((s: Skill) => <SkillBar key={s.name} name={s.name} level={s.level} />)}
          </div>
        </div>
      </Section>

      <Section id="certs" title={t.sections.certs} icon={<Award size={24} />}>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="p-6 rounded-3xl bg-secondary/30 border border-white/5 flex flex-col items-center text-center group">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform"><Award size={32} /></div>
              <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{cert.issuer}</p>
              <p className="text-[10px] text-slate-500 mt-2">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="path" title={t.sections.path} icon={<Briefcase size={24} />}>
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {[...formation, ...experience].map((item: any, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`md:w-[45%] mb-8 md:mb-0 hidden md:block ${i % 2 === 1 ? 'text-left pl-12' : 'text-right pr-12'}`}>
                <span className="text-primary font-bold text-sm uppercase">{item.period}</span>
                <h3 className="text-xl font-bold mt-1">{item.school || item.company}</h3>
              </div>
              <div className="absolute left-4 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
              <div className="md:w-[45%] pl-12 md:pl-0">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="md:hidden mb-2">
                    <span className="text-primary font-bold text-[10px] uppercase">{item.period}</span>
                    <h3 className="text-lg font-bold">{item.school || item.company}</h3>
                  </div>
                  <p className="text-primary font-bold mb-4">{item[lang].degree || item[lang].role}</p>
                  <ul className="space-y-2">
                    {item[lang].details?.map((d: string, j: number) => (
                      <li key={j} className="text-xs text-slate-400 flex gap-2">
                         <span className="text-primary">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <footer id="contact" className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.contactBtn}</h2>
            <p className="text-slate-400">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href={`mailto:${personal.email}`} className="p-6 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{t.contact.personalEmail}</h3>
                  <p className="text-sm text-slate-500">{personal.email}</p>
                </div>
              </div>
            </a>

            <a href={`mailto:${personal.efreiEmail}`} className="p-6 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{t.contact.academicEmail}</h3>
                  <p className="text-sm text-slate-500">{personal.efreiEmail}</p>
                </div>
              </div>
            </a>

            <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="p-6 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{t.contact.phone}</h3>
                  <p className="text-sm text-slate-500">{personal.phone}</p>
                </div>
              </div>
            </a>

            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <p className="text-sm text-slate-500">Antoine Fourneyron</p>
                </div>
              </div>
            </a>

            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-6 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-bold">GitHub</h3>
                  <p className="text-sm text-slate-500">@{personal.githubUsername}</p>
                </div>
              </div>
            </a>

            <div className="p-6 rounded-3xl bg-secondary/30 border border-white/5 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold">{t.contact.location}</h3>
                <p className="text-sm text-slate-500">{personal.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {personal.name} | fourneyron.digital
        </div>
      </footer>
    </div>
  );
}
