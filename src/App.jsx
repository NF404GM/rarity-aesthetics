import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Layout from './components/layout/Layout'
import { HelmetProvider } from 'react-helmet-async'
import { ShopProvider } from './context/ShopContext'
import { initGA, logPageView } from './lib/analytics'

// Lazy-loaded pages (code splitting)
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const About = lazy(() => import('./pages/About'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Book = lazy(() => import('./pages/Book'))
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Branded loading fallback
const PageLoader = () => (
  <div className="bg-rarity-navy min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-rarity-gold/30 border-t-rarity-gold rounded-full animate-spin mx-auto mb-4" />
      <span className="font-montserrat text-xs text-white/40 tracking-[0.3em] uppercase">Loading</span>
    </div>
  </div>
)

// Track page views on route change
function PageViewTracker() {
  const location = useLocation()
  useEffect(() => { logPageView() }, [location.pathname])
  return null
}

function App() {
  useEffect(() => { initGA() }, [])

  return (
    <HelmetProvider>
      <ShopProvider>
        <Router>
          <PageViewTracker />
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/book" element={<Book />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ShopProvider>
    </HelmetProvider>
  )
}

export default App

