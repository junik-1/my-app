import { useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Modal from './components/Modal'
import Section from './components/Section'
import Tag from './components/Tag'
import { profile, projects, skills } from './data/portfolio'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function App() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#top" className="text-lg font-bold">{profile.name}</a>
          <div className="flex gap-1">
            <Button variant="ghost" href="#projects">Projects</Button>
            <Button variant="ghost" href="#skills">Skills</Button>
            <Button variant="ghost" href="#contact">Contact</Button>
          </div>
        </nav>
      </header>

      <main id="top">
        <Section>
          <p className="mb-3 text-ink/70">{profile.role}</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight sm:text-7xl">
            Hi, I'm {profile.name}.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/75">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">See my work</Button>
            <Button variant="secondary" href={`mailto:${profile.email}`}>Email me</Button>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button key={c} variant="secondary" active={filter === c} onClick={() => setFilter(c)}>
                {c}
              </Button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <Card
                key={p.id}
                title={p.title}
                description={p.description}
                tags={p.tags}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => <Tag key={s}>{s}</Tag>)}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Card title="Let's work together" description="Send a message and I'll reply as soon as I can.">
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={`mailto:${profile.email}`}>Email {profile.name}</Button>
              {profile.links.map((l) => (
                <Button key={l.label} variant="secondary" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </Button>
              ))}
            </div>
          </Card>
        </Section>
      </main>

      <footer className="py-8 text-center text-sm text-ink/60">
        © {new Date().getFullYear()} {profile.name}
      </footer>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <>
            <p>{selected.details}</p>
            <div className="flex flex-wrap gap-2">
              {selected.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
            <Button href={selected.link} target="_blank" rel="noreferrer">View project</Button>
          </>
        )}
      </Modal>
    </div>
  )
}
