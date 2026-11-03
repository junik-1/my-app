import { useState, type FormEvent } from 'react'
import type { Project } from '../Types'
import Button from './Button'

type ProjectFormProps = {
  initial?: Project
  categories: string[]
  onSave: (data: Omit<Project, 'id'>) => void
  onCancel: () => void
}

const inputClass =
  'w-full rounded-lg border border-ink/25 bg-white px-3 py-2 text-sm focus:outline-2 focus:outline-cobalt'

// Used for both adding and editing a project.
export default function ProjectForm({ initial, categories, onSave, onCancel }: ProjectFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [category, setCategory] = useState(initial?.category ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [details, setDetails] = useState(initial?.details ?? '')
  const [tags, setTags] = useState(initial?.tags.join(', ') ?? '')
  const [link, setLink] = useState(initial?.link ?? '')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    onSave({
      title: title.trim(),
      category: category.trim() || 'Other',
      description: description.trim(),
      details: details.trim(),
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      link: link.trim(),
    })
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <label className="block text-sm font-medium">
        Title
        <input required className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label className="block text-sm font-medium">
        Category (pick one or type a new one)
        <input
          list="category-options"
          className={inputClass}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <datalist id="category-options">
          {categories.map((c) => <option key={c} value={c} />)}
        </datalist>
      </label>
      <label className="block text-sm font-medium">
        Short description
        <input className={inputClass} value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label className="block text-sm font-medium">
        Details
        <textarea rows={4} className={inputClass} value={details} onChange={(e) => setDetails(e.target.value)} />
      </label>
      <label className="block text-sm font-medium">
        Tags (comma separated)
        <input className={inputClass} value={tags} onChange={(e) => setTags(e.target.value)} />
      </label>
      <label className="block text-sm font-medium">
        Link
        <input type="url" className={inputClass} value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <div className="flex justify-end gap-2 pt-2">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
