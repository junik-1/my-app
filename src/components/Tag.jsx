// Small label used for skills and project categories.
export default function Tag({ children }) {
  return (
    <span className="inline-block rounded-md bg-ink/8 px-2.5 py-1 text-xs font-medium text-ink/80">
      {children}
    </span>
  )
}
