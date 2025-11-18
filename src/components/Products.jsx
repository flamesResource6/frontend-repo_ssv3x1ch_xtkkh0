import { CreditCard, PiggyBank, Smartphone, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'

const products = [
  { icon: PiggyBank, title: 'Savings & Deposits', desc: 'Secure accounts with competitive interest and zero hidden fees.' },
  { icon: CreditCard, title: 'Loans & Credit', desc: 'Personal, SME and agriculture financing designed for growth.' },
  { icon: Smartphone, title: 'Digital Banking', desc: 'Mobile app, USSD, and card services that work everywhere.' },
  { icon: Building2, title: 'Agent & Branch Network', desc: 'Bank close to home with agents and branches across Lesotho.' },
]

export default function Products() {
  return (
    <section id="products" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Products for everyday banking</h2>
          <p className="mt-2 text-slate-600">Thoughtfully designed for individuals, businesses and communities.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-slate-900 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
