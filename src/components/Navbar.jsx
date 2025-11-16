import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">Ahmar Full‑Stack</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="w-px h-5 bg-gray-300" />
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-700 hover:text-gray-900"><Github size={18} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900"><Linkedin size={18} /></a>
          <a href="#contact" aria-label="Email" className="text-gray-700 hover:text-gray-900"><Mail size={18} /></a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-1 text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900"><Linkedin size={18} /></a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
