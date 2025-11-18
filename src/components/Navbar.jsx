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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-slate-900/70 px-4 py-3 backdrop-blur-md shadow-lg">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-extrabold">LP</div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-wide">Lesotho PostBank</div>
              <div className="text-xs text-emerald-200/80">Your trusted partner in progress</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-emerald-100/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-100 hover:bg-emerald-500/20 transition">
              <Search className="h-4 w-4" />
              Search
            </a>
            <a href="tel:+26622312000" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-white shadow hover:shadow-emerald-500/25 transition">
              <PhoneCall className="h-4 w-4" />
              Contact
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="mt-2 rounded-2xl border border-emerald-500/20 bg-slate-900/90 backdrop-blur-md p-4">
            <nav className="grid gap-2">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="rounded-lg px-3 py-2 text-emerald-100/90 hover:bg-emerald-500/10 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href="tel:+26622312000" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-white">
                <PhoneCall className="h-4 w-4" /> Call us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
