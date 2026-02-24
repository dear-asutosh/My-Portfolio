import React from 'react'
import LandingPage from './components/Pages/HomePage/LandingPage'
import SkillsSection from './components/Pages/SkillsPage/SkillsSection'
import ExperienceSection from './components/Pages/ExperiencePage/ExperienceSection'
import EducationSection from './components/Pages/EducationPage/EducationSection'
import ProjectsSection from './components/Pages/ProjectPage/ProjectsSection'
import Contact from './components/Pages/ContactSection/Contact'
import Footer from './components/Pages/Footer/Footer'
import Loader from './components/NeonLoader'
import SmoothCursor from './components/SmoothCursor'
import { motion, useScroll } from 'motion/react'

const App = () => {
  const [loading, setLoading] = React.useState(true)
  const scrollYProgress = useScroll().scrollYProgress

  return (
    <>
      {/* Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Scroll progress bar (fade in after loader finishes) */}
      {!loading && (
        <motion.div
          className="fixed top-0 h-1 w-full bg-cyan-400 origin-top-left z-50 border border-black"
          style={{ scaleX: scrollYProgress }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      )}

      {/* App content */}
      <motion.div
        className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        <SmoothCursor />
        <LandingPage />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <Contact />
        <Footer />
      </motion.div>
    </>
  )
}

export default App
