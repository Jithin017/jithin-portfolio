import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, FileText, ExternalLink, MapPin, Trophy, BookOpen, Cpu, Settings, Box } from 'lucide-react'
import { motion } from 'framer-motion'
import { DATA } from './data.js'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
)

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="mx-auto max-w-5xl px-4 py-16">
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
)

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navbar */}
      <header className={`sticky top-0 z-50 backdrop-blur border-b border-white/5 transition ${scrolled ? 'bg-neutral-950/80' : 'bg-neutral-950/40'}`}>
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{DATA.name}</a>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            {DATA.nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-white transition">{n.label}</a>
            ))}
            <a href={DATA.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">
              <FileText className="h-4 w-4" /> Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-5xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-8 items-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-neutral-400">Portfolio</p>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold leading-tight">{DATA.name}</h1>
            <h2 className="mt-2 text-xl sm:text-2xl text-neutral-300">{DATA.title}</h2>
            <p className="mt-4 max-w-2xl text-neutral-300">{DATA.tagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-white/10 text-white inline-flex items-center gap-2 text-sm"><MapPin className="h-4 w-4"/>{DATA.location}</span>
              <a className="rounded-xl bg-white text-black px-3 py-1 text-sm" href={`mailto:${DATA.email}`}><Mail className="inline h-4 w-4 mr-1"/>Email</a>
              <a className="rounded-xl border border-white/10 px-3 py-1 text-sm" href={DATA.github} target="_blank" rel="noreferrer"><Github className="inline h-4 w-4 mr-1"/>GitHub</a>
              <a className="rounded-xl border border-white/10 px-3 py-1 text-sm" href={DATA.linkedin} target="_blank" rel="noreferrer"><Linkedin className="inline h-4 w-4 mr-1"/>LinkedIn</a>
              <a className="rounded-xl border border-white/10 px-3 py-1 text-sm" href={DATA.resumeUrl} target="_blank" rel="noreferrer"><FileText className="inline h-4 w-4 mr-1"/>Resume</a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <img
                src={DATA.photoUrl}
                alt="Jithin Shaji"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
       </div>
      </section>
      */

      {/* Experience */}
      <Section id="experience" title="Experience" icon={<Settings className="h-6 w-6 text-white/80"/>}>
        <div className="grid md:grid-cols-2 gap-4">
          {DATA.experience.map((exp, i) => (
            <FadeIn key={i} delay={0.05 * (i + 1)}>
              <div className="bg-white/5 border border-white/10 rounded-2xl h-full p-4">
                <div className="text-white/90 font-medium">{exp.role} · <span className="text-white/70">{exp.org}</span></div>
                <div className="text-xs text-neutral-400 mb-2">{exp.period}</div>
                <ul className="list-disc ml-5 text-sm text-neutral-300 space-y-2">
                  {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags?.map((t, k) => (
                    <span key={k} className="px-2 py-1 text-xs rounded bg-white/10 text-white">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={<Cpu className="h-6 w-6 text-white/80"/>}>
        <div className="grid md:grid-cols-2 gap-4">
          {DATA.projects.map((p, i) => (
            <FadeIn key={i} delay={0.05 * (i + 1)}>
              <div className="bg-white/5 border border-white/10 rounded-2xl h-full p-4">
                <div className="flex items-center justify-between">
                  <div className="text-white/90 font-medium">{p.title}</div>
                  <div className="text-xs text-neutral-400">{p.year}</div>
                </div>
                <p className="text-sm text-neutral-300 mt-2">{p.summary}</p>
                <ul className="list-disc ml-5 mt-3 text-sm space-y-2">
                  {p.bullets?.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech?.map((t, k) => <span key={k} className="px-2 py-1 text-xs rounded bg-white/10 text-white">{t}</span>)}
                </div>
                {(p.links?.repo || p.links?.demo) && (
                  <div className="flex gap-3 mt-4 text-xs">
                    {p.links.repo && (
                      <a className="inline-flex items-center gap-1 hover:underline" href={p.links.repo} target="_blank" rel="noreferrer"><Github className="h-3 w-3"/> Repo</a>
                    )}
                    {p.links.demo && (
                      <a className="inline-flex items-center gap-1 hover:underline" href={p.links.demo} target="_blank" rel="noreferrer"><ExternalLink className="h-3 w-3"/> Demo</a>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={<Box className="h-6 w-6 text-white/80"/>}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DATA.skills.map((g, i) => (
            <FadeIn key={i} delay={0.05 * (i + 1)}>
              <div className="bg-white/5 border border-white/10 rounded-2xl h-full p-4">
                <div className="text-white/90 font-medium mb-2">{g.label}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item, j) => (
                    <span key={j} className="px-2 py-1 text-xs rounded bg-white/10 text-white">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements" icon={<Trophy className="h-6 w-6 text-white/80"/>}>
        <div className="grid md:grid-cols-2 gap-4">
          {DATA.achievements.map((a, i) => (
            <FadeIn key={i} delay={0.03 * (i + 1)}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-neutral-200 text-sm">{a}</div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={<Mail className="h-6 w-6 text-white/80"/>}>
        <FadeIn>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-2xl">
            <p className="text-neutral-300 text-sm">Want to collaborate or have an opportunity in robotics/AI? Reach me at</p>
            <div className="mt-2">
              <a className="inline-flex items-center gap-2 text-white hover:underline" href={`mailto:${DATA.email}`}><Mail className="h-4 w-4"/> {DATA.email}</a>
            </div>
            <div className="mt-2 flex gap-4 text-sm text-neutral-300">
              <a href={DATA.github} className="hover:underline" target="_blank" rel="noreferrer">GitHub</a>
              <a href={DATA.linkedin} className="hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </FadeIn>
        <p className="text-xs text-neutral-500 mt-6">© {new Date().getFullYear()} {DATA.name}. Built with React, Tailwind & Vite.</p>
      </Section>
    </div>
  )
}

