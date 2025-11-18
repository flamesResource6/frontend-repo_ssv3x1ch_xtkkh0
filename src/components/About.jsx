import { ShieldCheck, Users, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900">About Lesotho PostBank</h2>
            <p className="mt-4 text-slate-600">A wholly state-owned bank serving individuals, SMEs, and communities across Lesotho with inclusive and secure financial services.</p>
            <div className="mt-6 grid gap-4">
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-blue-600" /> Regulated and government-backed</div>
              <div className="flex items-center gap-3"><Users className="h-5 w-5 text-blue-600" /> Community-first approach</div>
              <div className="flex items-center gap-3"><Globe2 className="h-5 w-5 text-blue-600" /> Digital channels for everyone</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-slate-100 border border-slate-200">
              <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(59,130,246,.15),transparent)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
