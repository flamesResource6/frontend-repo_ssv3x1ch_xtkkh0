import { Building2, Factory, Handshake, Landmark } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Building2,
    title: 'SME Banking',
    desc: 'Accounts, payments and credit to power small and medium businesses.'
  },
  {
    icon: Factory,
    title: 'Agribusiness',
    desc: 'Seasonal financing and savings tailored for farmers and co-operatives.'
  },
  {
    icon: Handshake,
    title: 'NGOs & Associations',
    desc: 'Easy onboarding, multiple signatories and transparent reporting.'
  },
  {
    icon: Landmark,
    title: 'Government & Parastatals',
    desc: 'Secure collections, disbursements and treasury solutions.'
  }
]

export default function Business() {
  return (
    <section id="business" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Banking for business growth</h2>
          <p className="mt-2 text-slate-600">Practical solutions for SMEs, agriculture, NGOs and public sector partners.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
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
