import './index.css'
import useLenis from './hooks/useLenis'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Grain from './components/Grain'
import BackToTop from './components/BackToTop'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useLenis()

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Grain />
      <BackToTop />
      <main>
        <Marquee />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App