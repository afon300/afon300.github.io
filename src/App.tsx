import React, { useState, useEffect } from 'react';
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
  MapPin,
  Sparkles,
  BarChart3
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
  <section id={id} className="py-24 px-6 max-w-6xl mx-auto relative">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-16"
    >
      <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 rounded-2xl text-primary shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        {icon}
      </div>
      <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{title}</h2>
    </motion.div>
    {children}
  </section>
);

const SkillBar = ({ name, level }: { name: string, level: number }) => (
  <div className="mb-6 group">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-semibold tracking-wide text-slate-200 group-hover:text-primary transition-colors">{name}</span>
      <span className="text-sm font-mono text-primary/80">{level}%</span>
    </div>
    <div className="w-full bg-white/5 border border-white/5 rounded-full h-2.5 overflow-hidden backdrop-blur-sm shadow-inner">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
      >
        <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
      </motion.div>
    </div>
  </div>
);

const mockStockData = [
  { name: 'Jan', val: 4000, val2: 2400 }, { name: 'Feb', val: 3000, val2: 1398 }, 
  { name: 'Mar', val: 5000, val2: 9800 }, { name: 'Apr', val: 2780, val2: 3908 }, 
  { name: 'May', val: 1890, val2: 4800 }, { name: 'Jun', val: 2390, val2: 3800 },
  { name: 'Jul', val: 3490, val2: 4300 }, { name: 'Aug', val: 4000, val2: 2400 }, 
  { name: 'Sep', val: 3000, val2: 1398 }, { name: 'Oct', val: 5000, val2: 9800 }, 
  { name: 'Nov', val: 2780, val2: 3908 }, { name: 'Dec', val: 3890, val2: 4800 }
];

export default function App() {
  const { personal, formation, projects, experience, skills } = portfolioData;
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [debugMode, setDebugMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = personal.translations[lang];

  return (
    <div className="min-h-screen selection:bg-primary/30 relative bg-background text-foreground overflow-x-hidden font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-[120px] animate-[pulse_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[60vw] rounded-full bg-blue-900/10 blur-[120px] animate-[pulse_14s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDebugMode(!debugMode)}
          className={`p-4 rounded-full shadow-2xl backdrop-blur-md ${debugMode ? 'bg-primary text-white border-primary/50' : 'bg-white/5 text-slate-400 border-white/10'} border`}
        >
          <Bug size={24} />
        </motion.button>
      </div>

      <AnimatePresence>
        {debugMode && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="fixed top-24 right-6 z-[90] w-72 p-6 rounded-2xl bg-black/80 border border-primary/30 backdrop-blur-xl text-[10px] font-mono shadow-2xl"
          >
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2 text-xs">
              <Terminal size={14} /> SYSTEM_DEBUG_v2.0
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>STATUS</span>
                <span className="text-green-400 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> LIVE</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>ENGINE</span>
                <span className="text-blue-400">REACT 18</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>UX</span>
                <span className="text-accent">GLASSMORPHISM</span>
              </div>
              <div className="mt-4 p-3 bg-black/50 rounded-lg border border-white/5">
                <span className="text-slate-500">{"// Runtime logs"}</span>
                <p className="text-green-500 mt-2">{"[OK] Assets optimized"}</p>
                <p className="text-green-500">{"[OK] Framework ready"}</p>
                <p className="text-primary/70 mt-2 animate-pulse">{"_waiting_for_input"}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/70 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span className="font-extrabold text-xl tracking-tighter bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles size={18} className="text-primary" />
            fourneyron.digital
          </span>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-primary transition-colors">{t.sections.about}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{t.sections.projects}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{t.sections.skills}</a>
            <a href="#path" className="hover:text-primary transition-colors">{t.sections.path}</a>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10"
            >
              <Languages size={16} /> {lang.toUpperCase()}
            </button>
            <a 
              href="#contact"
              className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {t.contactBtn}
            </a>
          </div>
        </div>
      </nav>

      <section id="about" className="relative pt-40 pb-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            {t.available}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            {t.heroTitle.split('&')[0]} <br />
            <span className="bg-gradient-to-r from-primary via-accent to-blue-400 bg-clip-text text-transparent inline-block">
              & {t.heroTitle.split('&')[1] || 'Data'}
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed font-medium">
            {t.bio}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="/CV.pdf" download className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <Download size={20} />
              <span>{t.cvBtn}</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-white/20">
              <Linkedin size={20} className="text-blue-400" />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-white/20">
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 perspective-1000"
        >
          <div className="aspect-[4/3] rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <BarChart3 size={16} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Live Dashboard</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">{lang === 'fr' ? 'Analyse de Volatilité' : 'Volatility Analysis'}</h3>
                <p className="text-sm text-slate-400 mt-1">{lang === 'fr' ? 'Simulation de marché dynamique' : 'Dynamic market simulation'}</p>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/50"></div>
              </div>
            </div>
            
            <div className="h-56 w-full mt-8 relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockStockData}>
                    <defs>
                      <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorVal2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '16px', 
                        fontSize: '12px',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                      }} 
                      itemStyle={{ color: '#fff', fontWeight: 'bold' }} 
                    />
                    <Area type="monotone" dataKey="val2" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorVal2)" animationDuration={3000} />
                    <Area type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" animationDuration={2500} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
          </div>
        </motion.div>
      </section>

      <Section id="projects" title={t.sections.projects} icon={<Code2 size={28} />}>
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="group p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1 text-[10px] font-bold bg-white/10 rounded-full text-slate-200 uppercase tracking-wider backdrop-blur-sm border border-white/5">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-primary/50 transition-all">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10">{project[lang].title}</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed relative z-10 font-medium">{project[lang].description}</p>
              <ul className="space-y-3 relative z-10">
                {project[lang].details?.map((detail: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href={personal.github} target="_blank" rel="noopener noreferrer" 
            className="p-8 rounded-[2rem] border-2 border-dashed border-white/10 hover:border-primary/40 bg-white/[0.01] hover:bg-primary/5 backdrop-blur-sm flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 min-h-[300px]"
          >
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 shadow-lg"><Github size={32} className="text-slate-400 group-hover:text-primary transition-colors" /></div>
            <h3 className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">{lang === 'fr' ? 'Découvrir plus sur GitHub' : 'Discover more on GitHub'}</h3>
            <p className="text-sm text-slate-500 mt-2">{lang === 'fr' ? 'Voir tous mes dépôts' : 'View all repositories'}</p>
          </motion.a>
        </div>
      </Section>

      <Section id="skills" title={t.sections.skills} icon={<Database size={28} />}>
        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
              <div className="p-3 bg-primary/20 rounded-xl text-primary"><Briefcase size={20} /></div>
              <h3 className="text-xl font-bold text-white">{lang === 'fr' ? 'Gestion & MOA' : 'Project Management'}</h3>
            </div>
            {skills?.moa?.map((s: Skill) => <SkillBar key={s.name} name={s.name} level={s.level} />)}
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] -mr-16 -mt-16"></div>
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5 relative z-10">
              <div className="p-3 bg-accent/20 rounded-xl text-accent"><TrendingUp size={20} /></div>
              <h3 className="text-xl font-bold text-white">IT Finance</h3>
            </div>
            <div className="relative z-10">
              {skills?.finance?.map((s: Skill) => <SkillBar key={s.name} name={s.name} level={s.level} />)}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400"><Terminal size={20} /></div>
              <h3 className="text-xl font-bold text-white">{lang === 'fr' ? 'Data & Tech' : 'Data & Tech'}</h3>
            </div>
            {skills?.technique?.map((s: Skill) => <SkillBar key={s.name} name={s.name} level={s.level} />)}
          </motion.div>
        </div>
      </Section>

      <Section id="path" title={t.sections.path} icon={<Award size={28} />}>
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-ml-px before:h-full before:w-1 before:bg-gradient-to-b before:from-primary/50 before:via-accent/30 before:to-transparent z-10">
          {[...formation, ...experience].map((item: any, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`md:w-[45%] mb-6 md:mb-0 hidden md:block ${i % 2 === 1 ? 'text-left pl-16' : 'text-right pr-16'}`}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-xs uppercase tracking-widest shadow-sm backdrop-blur-md mb-3">{item.period}</span>
                <h3 className="text-2xl font-bold text-white">{item.school || item.company}</h3>
              </div>
              <div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
              </div>
              <div className="w-full md:w-[45%] pl-16 md:pl-0">
                <div className="p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all shadow-lg hover:shadow-xl group">
                  <div className="md:hidden mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest mb-2 border border-primary/20">{item.period}</span>
                    <h3 className="text-xl font-bold text-white">{item.school || item.company}</h3>
                  </div>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">{item[lang].degree || item[lang].role}</h4>
                  <ul className="space-y-3">
                    {item[lang].details?.map((d: string, j: number) => (
                      <li key={j} className="text-sm text-slate-400 flex items-start gap-3">
                         <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 group-hover:bg-primary transition-colors"></div> 
                         <span className="leading-relaxed font-medium">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <footer id="contact" className="relative mt-20 border-t border-white/10 bg-black/40 backdrop-blur-2xl z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">{t.contactBtn}</h2>
            <p className="text-lg text-slate-400 font-medium">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href={`mailto:${personal.email}`} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/50 hover:bg-white/[0.05] transition-all group backdrop-blur-md flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t.contact.personalEmail}</h3>
                  <p className="text-xs text-slate-400 font-medium">{personal.email}</p>
                </div>
              </div>
            </a>

            <a href={`mailto:${personal.efreiEmail}`} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all group backdrop-blur-md flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t.contact.academicEmail}</h3>
                  <p className="text-xs text-slate-400 font-medium">{personal.efreiEmail}</p>
                </div>
              </div>
            </a>

            <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-green-500/50 hover:bg-white/[0.05] transition-all group backdrop-blur-md flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-green-500/10 text-green-400 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t.contact.phone}</h3>
                  <p className="text-xs text-slate-400 font-medium">{personal.phone}</p>
                </div>
              </div>
            </a>

            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#0077b5]/50 hover:bg-white/[0.05] transition-all group backdrop-blur-md flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-[#0077b5]/10 text-[#0077b5] group-hover:scale-110 group-hover:bg-[#0077b5] group-hover:text-white transition-all shadow-lg">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">LinkedIn</h3>
                  <p className="text-xs text-slate-400 font-medium">Antoine Fourneyron</p>
                </div>
              </div>
            </a>

            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/40 hover:bg-white/[0.05] transition-all group backdrop-blur-md flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-white/10 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all shadow-lg">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">GitHub</h3>
                  <p className="text-xs text-slate-400 font-medium">@{personal.githubUsername}</p>
                </div>
              </div>
            </a>

            <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-[20px] -mr-10 -mt-10"></div>
              <div className="flex items-center gap-5 relative z-10">
                <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-400 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t.contact.location}</h3>
                  <p className="text-xs text-slate-400 font-medium">{personal.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-8 text-center text-xs text-slate-600 font-medium relative z-10">
          © {new Date().getFullYear()} {personal.name} | fourneyron.digital | Designed with <span className="text-primary">♥</span>
        </div>
      </footer>
    </div>
  );
}
