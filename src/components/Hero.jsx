import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(14,165,233,.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sky-700 shadow-sm">
              <Shield className="h-4 w-4" /> Safeguarding your money since 2004
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Simple, secure banking for every Basotho
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Inclusive products, transparent pricing and human support when you need it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700">
                Open an account <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#branches" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-700 hover:bg-slate-50">
                Find a branch
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-600" /> Government-backed</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-600" /> Digital-first</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-blue-600" /> Community-rooted</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Savings', rate: 'Up to 6.5%' },
                    { title: 'Digital Banking', rate: 'USSD & App' },
                    { title: 'SME Loans', rate: 'Flexible terms' },
                    { title: 'Agent Network', rate: 'Nationwide' },
                  ].map((p) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="text-blue-700 text-sm">{p.title}</div>
                      <div className="text-slate-900 text-xl font-semibold">{p.rate}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-300/30 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
