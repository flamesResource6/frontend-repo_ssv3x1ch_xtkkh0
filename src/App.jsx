import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Rates from './components/Rates'
import CTA from './components/CTA'
import Business from './components/Business'
import Branches from './components/Branches'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Business />
        <Rates />
        <Branches />
        <About />
        <CTA />
        <footer className="py-12 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-600">
              <div>
                <div className="text-slate-900 font-semibold">Lesotho PostBank</div>
                <p className="mt-2">Inclusive banking for individuals, SMEs and communities across Lesotho.</p>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">Contact</div>
                <p className="mt-2">Call: +266 2231 2000</p>
                <p>Email: info@lpb.co.ls</p>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">Legal</div>
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
