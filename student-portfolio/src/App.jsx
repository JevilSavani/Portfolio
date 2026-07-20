import { useEffect, useMemo, useState } from 'react'
import './App.css'
import About from './Pages/about.jsx'
import Skills from './Pages/skill.jsx'
import Projects from './Pages/projects.jsx'

const pageOrder = ['about', 'skills', 'projects']
const navItems = [
  { key: 'about', label: 'About' },
  { key: 'skills', label: 'Skills' },
  { key: 'projects', label: 'Projects' },
]

function App() {
  const [page, setPage] = useState(() => {
    const initial = window.location.hash.slice(1)
    return pageOrder.includes(initial) ? initial : 'about'
  })

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash.slice(1)
      setPage(pageOrder.includes(next) ? next : 'about')
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const currentPage = useMemo(() => {
    if (page === 'skills') return <Skills />
    if (page === 'projects') return <Projects />
    return <About />
  }, [page])

  return (
    <div className="portfolio-page">
      <header className="site-header">
        <nav>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className={item.key === page ? 'active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle">ML Developer & ML Enthusiast</p>
          <h1>Jevil Savani</h1>
        </div>
      </section>

      <main className="page-content">{currentPage}</main>

      <footer className="site-footer">
        <p>Get in touch: 24aiml058@charusat.edu.in</p>
        <p>© 2026 Jevil Savani. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
