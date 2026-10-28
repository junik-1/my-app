import Tag from './Tag'

// Reusable card. Every card on the site comes from here.
// Give it `onClick` and it becomes a clickable button; leave it off and it's a static card.
export default function Card({ title, description, tags = [], onClick, children, className = '' }) {
  const Wrapper = onClick ? 'button' : 'div'
  const interactive = onClick
    ? 'cursor-pointer text-left hover:-translate-y-1 hover:border-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt'
    : ''

  return (
    <Wrapper
      {...(onClick ? { type: 'button', onClick } : {})}
      className={`flex w-full flex-col gap-3 rounded-2xl border border-ink/15 bg-white p-6 transition ${interactive} ${className}`}
    >
      <h3 className="text-xl font-bold leading-snug">{title}</h3>
      {description && <p className="text-sm leading-relaxed text-ink/70">{description}</p>}
      {children}
      {tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      )}
    </Wrapper>
  )
}