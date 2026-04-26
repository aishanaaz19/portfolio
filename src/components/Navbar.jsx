import { useState, useEffect } from 'react'
import { info } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { width } = useWindowSize()
  const isMobile = width < 768

  const links = ['about', 'skills', 'projects', 'experience', 'contact']

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = []

    links.forEach(link => {
      const el = document.getElementById(link)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(link)
        },
        { threshold: 0.4 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const linkStyle = (link) => ({
    fontFamily: 'var(--body)',
    fontSize: '12px',
    fontWeight: 500,
    color: activeSection === link ? 'var(--accent)' : 'var(--muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    transition: 'color 0.2s',
    textDecoration: 'none',
    position: 'relative',
  })

  const mobileLinkStyle = (link) => ({
    fontFamily: 'var(--display)',
    fontSize: '2rem',
    fontWeight: 800,
    color: activeSection === link ? 'var(--accent)' : 'var(--text)',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    padding: '0.75rem 0',
    borderBottom: '1px solid var(--border)',
    transition: 'color 0.2s',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 ' + (isMobile ? '1.25rem' : '3rem'),
        height: '60px',
        background: scrolled || menuOpen ? 'rgba(13,13,13,0.92)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>

        <span style={{
          fontFamily: 'var(--display)',
          fontWeight: 800,
          fontSize: '18px',
          color: 'var(--accent)',
          letterSpacing: '-0.02em',
        }}>
          {info.initials}.
        </span>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text)',
              fontFamily: 'var(--display)',
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '8px',
            }}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {links.map(link => (
              <a
                key={link}
                href={'#' + link}
                style={linkStyle(link)}
                onMouseEnter={e => {
                  if (activeSection !== link)
                    e.target.style.color = 'var(--text)'
                }}
                onMouseLeave={e => {
                  if (activeSection !== link)
                    e.target.style.color = 'var(--muted)'
                }}
              >
                {link}
                {activeSection === link && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0, right: 0,
                    height: '1px',
                    background: 'var(--accent)',
                  }} />
                )}
              </a>
            ))}
          </div>
        )}

      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px', left: 0, right: 0,
          zIndex: 99,
          background: 'rgba(13,13,13,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 1.25rem',
          gap: '0',
        }}>
          {links.map(link => (
            <a
              key={link}
              href={'#' + link}
              onClick={() => setMenuOpen(false)}
              style={mobileLinkStyle(link)}
            >
              {link}
              {activeSection === link && (
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.08em',
                }}>
                  ●
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar