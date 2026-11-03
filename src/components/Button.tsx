import type { AnchorHTMLAttributes, ReactNode } from 'react'

// One button for the whole site. Pass `href` to render a link, otherwise it's a <button>.
// Variants: primary | secondary | ghost | danger. Add `active` for a selected state (e.g. filters).
const variants = {
  primary: 'bg-cobalt text-white hover:bg-cobalt/90',
  secondary: 'border border-ink/25 text-ink hover:bg-ink/5',
  ghost: 'text-ink/70 hover:text-ink hover:bg-ink/5',
  danger: 'border border-red-300 text-red-700 hover:bg-red-50',
}

type ButtonProps = {
  variant?: keyof typeof variants
  href?: string
  onClick?: () => void
  active?: boolean
  type?: 'button' | 'submit'
  className?: string
  children: ReactNode
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>

export default function Button({
  variant = 'primary',
  href,
  onClick,
  active = false,
  type = 'button',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt',
    active ? 'bg-ink text-white hover:bg-ink' : variants[variant],
    className,
  ].join(' ')

  if (href) {
    return <a href={href} className={classes} {...rest}>{children}</a>
  }
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}
