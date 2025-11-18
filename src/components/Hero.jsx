import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(16,185,129,.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">
              <Shield className="h-4 w-4" /> Safeguarding your money since 2004
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Banking that puts Basotho first
            </h1>
            <p className="mt-4 text-lg text-emerald-100/90">
              A modern, inclusive bank for Lesotho. Simple products, transparent pricing, and human support when you need it.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-white shadow hover:shadow-emerald-500/25">
                Open an account <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#branches" className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-emerald-100 hover:bg-emerald-500/20">
                Find a branch
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-emerald-100/80">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" /> Government-backed</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" /> Digital-first</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" /> Community-rooted</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-xl">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Savings', rate: 'Up to 6.5%' },
                    { title: 'Mobile Money', rate: 'M-Pesa & EcoCash' },
                    { title: 'SME Loans', rate: 'Flexible terms' },
                    { title: 'Agent Banking', rate: 'Nationwide' },
                  ].map((p) => (
                    <div key={p.title} className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
                      <div className="text-emerald-300 text-sm">{p.title}</div>
                      <div className="text-white text-xl font-semibold">{p.rate}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
