import './App.css'
import Hero from './pages/Hero'
import Skills from './pages/Skills'
import MyWork from './pages/MyWork'
import About from './pages/About'
import Contact from './pages/Contact'
import {SmoothScroll} from './utils/SmoothScroll.jsx'
import Navbar from './components/Navbar.jsx'



function App () {
  SmoothScroll()
  return (
    // <SmoothScroll>
    <>
      <Navbar />
      <Hero />
      <Skills />
      <MyWork />
      <About />
      <Contact />
    </>
    // </SmoothScroll>
  )
}

export default App
