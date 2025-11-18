import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Rates from './components/Rates'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-emerald-50">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Rates />
        <CTA />
        <footer className="py-10 border-t border-emerald-500/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3 text-sm text-emerald-100/70">
              <div>
                <div className="text-white font-semibold">Lesotho PostBank</div>
                <p className="mt-2">Inclusive banking for individuals, SMEs and communities across Lesotho.</p>
              </div>
              <div>
                <div className="text-white font-semibold">Contact</div>
                <p className="mt-2">Call: +266 2231 2000</p>
                <p>Email: info@lpb.co.ls</p>
              </div>
              <div>
                <div className="text-white font-semibold">Legal</div>
                <p className="mt-2">© {new Date().getFullYear()} Lesotho PostBank. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
