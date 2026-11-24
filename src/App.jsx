import { useEffect, useState } from 'react'
import { LangContext, initialLang } from './lang'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    // lang="tr" also makes CSS uppercase turn i into İ correctly
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </LangContext.Provider>
  )
}

export default App
