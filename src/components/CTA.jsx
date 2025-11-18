export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-sky-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-10 text-white shadow-xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-extrabold">Move your banking forward</h3>
              <p className="mt-2 text-white/90">Open an account in minutes and start banking with a partner that puts Basotho first.</p>
            </div>
            <div className="flex gap-3 lg:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow hover:shadow-lg">Open account</a>
              <a href="#branches" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20">Find branch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
