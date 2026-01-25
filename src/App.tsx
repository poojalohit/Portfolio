import { useState, useEffect } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Travel from './components/Travel'
import Books from './components/Books'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900">
        <main>
          <Hero activeSection={activeSection} />
          <Education />
          <WorkExperience />
          <Projects />
          <Travel />
          <Books />
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
