import { MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const branches = [
  { name: 'Maseru HQ', phone: '+266 2231 2000', hours: 'Mon–Fri 8:30–16:30' },
  { name: 'Maputsoe', phone: '+266 2231 2000', hours: 'Mon–Fri 8:30–16:30' },
  { name: 'Mafeteng', phone: '+266 2231 2000', hours: 'Mon–Fri 8:30–16:30' },
  { name: 'Leribe', phone: '+266 2231 2000', hours: 'Mon–Fri 8:30–16:30' }
]

export default function Branches() {
  return (
    <section id="branches" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Branches & Agents</h2>
          <p className="mt-2 text-slate-600">Bank close to home. Visit a branch or an agent near you.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((b) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-slate-900 font-semibold"><MapPin className="h-4 w-4 text-blue-600" /> {b.name}</div>
              <div className="mt-3 flex items-center gap-2 text-slate-600"><Phone className="h-4 w-4" /> {b.phone}</div>
              <div className="mt-1 flex items-center gap-2 text-slate-600"><Clock className="h-4 w-4" /> {b.hours}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 transition">Open branch locator</a>
        </div>
      </div>
    </section>
  )
}
