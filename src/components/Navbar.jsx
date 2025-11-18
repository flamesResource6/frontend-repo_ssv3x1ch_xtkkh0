import { useState } from 'react'
import { Menu, X, PhoneCall, Search } from 'lucide-react'

const navLinks = [
  { label: 'Personal', href: '#products' },
  { label: 'Business', href: '#business' },
  { label: 'Rates', href: '#rates' },
  { label: 'Branches', href: '#branches' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold">LP</div>
            <div className="leading-tight">
              <div className="text-slate-900 font-semibold tracking-wide">Lesotho PostBank</div>
              <div className="text-xs text-slate-500">Your trusted partner in progress</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-slate-600 hover:text-blue-700 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <Search className="h-4 w-4" />
              Search
            </a>
            <a href="tel:+26622312000" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition">
              <PhoneCall className="h-4 w-4" />
              Contact
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="border-t border-slate-200 bg-white p-4">
            <nav className="grid gap-2">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-700">
                  {l.label}
                </a>
              ))}
              <a href="tel:+26622312000" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white">
                <PhoneCall className="h-4 w-4" /> Call us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
