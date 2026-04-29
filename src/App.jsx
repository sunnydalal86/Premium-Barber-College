import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Admissions from './components/Admissions'
import Programs from './components/Programs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CatalogPage from './components/CatalogPage'

export default function App() {
  const [route, setRoute] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function navigate(path) {
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo(0, 0)
  }

  if (route === '/catalog') {
    return <CatalogPage onNavigate={navigate} />
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <Navbar onNavigate={navigate} />
      <main>
        <Hero />
        <About />
        <Admissions />
        <Programs onNavigate={navigate} />
        <Contact />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  )
}
