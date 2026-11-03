import type { ReactNode } from 'react'
import Tag from './Tag'

type CardProps = {
  title: string
  description?: string
  tags?: string[]
  onClick?: () => void
  children?: ReactNode
  className?: string
}

// Reusable card. Give it `onClick` and it becomes a clickable button; otherwise it's static.
export default function Card({ title, description, tags = [], onClick, children, className = '' }: CardProps) {
  const interactive = onClick
    ? 'cursor-pointer text-left hover:-translate-y-1 hover:border-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt'
    : ''
  const classes = `flex w-full flex-col gap-3 rounded-2xl border border-ink/15 bg-white p-6 transition ${interactive} ${className}`

  const content = (
    <>
      <h3 className="text-xl font-bold leading-snug">{title}</h3>
      {description && <p className="text-sm leading-relaxed text-ink/70">{description}</p>}
      {children}
      {tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      )}
    </>
  )

  return onClick ? (
    <button type="button" onClick={onClick} className={classes}>{content}</button>
  ) : (
    <div className={classes}>{content}</div>
  )
}
