import CursorTrail from "./components/CursorTrail"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from "./components/Skills"

function App() {
  return (
    <>
    <div className="bg-black relative">
      <Navbar/>
      <CursorTrail/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App