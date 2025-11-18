export default function Rates() {
  return (
    <section id="rates" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-8 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold text-white">Current rates</h3>
              <p className="mt-2 text-emerald-100/80">Transparent rates with no surprises. Visit a branch for personalised advice.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[ 
                { name: 'Savings Account', value: 'Up to 6.5% p.a.' },
                { name: 'Fixed Deposit (12m)', value: '8.25% p.a.' },
                { name: 'Personal Loan', value: 'From 14.5% p.a.' },
                { name: 'SME Loan', value: 'Custom pricing' },
              ].map((r) => (
                <div key={r.name} className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-slate-900 p-4">
                  <div className="text-emerald-100/90">{r.name}</div>
                  <div className="text-white font-semibold">{r.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
