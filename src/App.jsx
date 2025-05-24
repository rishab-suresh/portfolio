import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Fin from './components/Fin'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './context/ThemeContext'

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      mirror: true,
    });

    AOS.refresh();
  }, [theme]);

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
      <AppContent />
    </ThemeProvider>
  );
}

export default App
