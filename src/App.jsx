import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Fin from './components/Fin'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Fin />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App
