import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import ProductTikTok from './pages/ProductTikTok'
import ProductAmazon from './pages/ProductAmazon'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import WhiteBoxAI from './pages/features/WhiteBoxAI'
import UnifiedDashboard from './pages/features/UnifiedDashboard'
import IntelligenceHub from './pages/features/IntelligenceHub'
import Resources from './pages/Resources'
import AboutUs from './pages/AboutUs'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const hideChrome = pathname === '/dashboard'

  return (
    <>
      <ScrollToTop />
      {!hideChrome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products/tiktok" element={<ProductTikTok />} />
        <Route path="/products/amazon" element={<ProductAmazon />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features/whitebox-ai" element={<WhiteBoxAI />} />
        <Route path="/features/unified-dashboard" element={<UnifiedDashboard />} />
        <Route path="/features/intelligence-hub" element={<IntelligenceHub />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      {!hideChrome && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  )
}
