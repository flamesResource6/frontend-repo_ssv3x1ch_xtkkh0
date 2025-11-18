import { CreditCard, PiggyBank, Smartphone, Building2 } from 'lucide-react'

const products = [
  { icon: PiggyBank, title: 'Savings & Deposits', desc: 'Secure accounts with competitive interest and zero hidden fees.' },
  { icon: CreditCard, title: 'Loans & Credit', desc: 'Personal, SME and agriculture financing designed for growth.' },
  { icon: Smartphone, title: 'Digital Banking', desc: 'Mobile app, USSD, and card services that work everywhere.' },
  { icon: Building2, title: 'Agent & Branch Network', desc: 'Bank close to home with agents and branches across Lesotho.' },
]

export default function Products() {
  return (
    <section id="products" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(20,83,45,.25),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">Products for everyday banking</h2>
          <p className="mt-2 text-emerald-100/80">Thoughtfully designed for individuals, businesses and communities.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-emerald-500/20 bg-slate-900/60 p-6 backdrop-blur shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-emerald-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
