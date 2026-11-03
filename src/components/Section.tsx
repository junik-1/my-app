import type { ReactNode } from 'react'

type SectionProps = { id?: string; title?: string; children: ReactNode }

// Wraps each part of the page so spacing and headings stay consistent.
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
      {title && <h2 className="mb-8 text-3xl font-bold">{title}</h2>}
      {children}
    </section>
  )
}
