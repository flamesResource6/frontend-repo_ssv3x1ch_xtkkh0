import { motion } from 'framer-motion'

export default function Rates() {
  return (
    <section id="rates" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Current rates</h3>
              <p className="mt-2 text-slate-600">Transparent rates with no surprises. Visit a branch for personalised advice.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Savings Account', value: 'Up to 6.5% p.a.' },
                { name: 'Fixed Deposit (12m)', value: '8.25% p.a.' },
                { name: 'Personal Loan', value: 'From 14.5% p.a.' },
                { name: 'SME Loan', value: 'Custom pricing' },
              ].map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-slate-700">{r.name}</div>
                  <div className="text-slate-900 font-semibold">{r.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
