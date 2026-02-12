import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import PageTransition from './components/ui/PageTransition'
import { HelmetProvider } from 'react-helmet-async'
import { ShopProvider } from './context/ShopContext'
import { initGA, logPageView } from './lib/analytics'
import { Analytics } from '@vercel/analytics/react'

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
const Blog = lazy(() => import('./pages/Blog'))
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

// Animated routes wrapper
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />} key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          <Route path="/book" element={<PageTransition><Book /></PageTransition>} />
          <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
          <Route path="/shop/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
          <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function App() {
  useEffect(() => { initGA() }, [])

  return (
    <HelmetProvider>
      <ShopProvider>
        <Router>
          <PageViewTracker />
          <Layout>
            <AnimatedRoutes />
          </Layout>
          <Analytics />
        </Router>
      </ShopProvider>
    </HelmetProvider>
  )
}

export default App
