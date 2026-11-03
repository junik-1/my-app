// EDIT THIS FILE to change the site's starting content.
// Projects added with the "Add project" button are saved in the browser instead.
import type { Profile, Project } from '../Types'

export const profile: Profile = {
  name: 'Junik',
  role: 'Developer & designer', // change to Junik's real title
  intro: 'I build clear, useful things for the web. Take a look at what I have been working on.',
  email: 'junik@example.com', // change to Junik's real email
  links: [
    { label: 'GitHub', href: 'https://github.com/junik-1' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
}

export const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    category: 'Web',
    description: 'A short one-line amazing summary of what this project does.',
    details: 'Write a longer explanation here: the problem, what you built, and the result.',
    tags: ['React', 'Tailwind'],
    link: 'https://example.com',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Design',
    description: 'Another project with a different focus.',
    details: 'Describe your role, the tools you used, and what you learned.',
    tags: ['Figma', 'UX'],
    link: 'https://example.com',
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Data',
    description: 'A third project to show range.',
    details: 'Explain the data you worked with and what the analysis showed.',
    tags: ['Python', 'Charts'],
    link: 'https://example.com',
  },
]

export const skills: string[] = ['JavaScript', 'React', 'Tailwind CSS', 'Git', 'Figma', 'Python']
