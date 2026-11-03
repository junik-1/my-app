export type Project = {
  id: number
  title: string
  category: string
  description: string
  details: string
  tags: string[]
  link: string
}

export type Profile = {
  name: string
  role: string
  intro: string
  email: string
  links: { label: string; href: string }[]
}
