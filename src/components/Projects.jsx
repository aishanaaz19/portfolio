// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
}

function Projects() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <section
      id="projects"
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: isMobile ? '3.5rem 1.25rem' : '5rem 2.5rem',
        borderTop: '1px solid var(--border)',
      }}
    >

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}
      >
        <span style={{
          fontFamily: 'var(--display)',
          fontSize: '11px',
          fontWeight: 700,
          color: 'var(--accent)',
          letterSpacing: '0.1em',
        }}>
          03 —
        </span>
        <h2 style={{
          fontFamily: 'var(--display)',
          fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          Projects
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '1px',
        background: 'var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ backgroundColor: '#1e1e1e' }}
            style={{
              display: 'block',
              padding: isMobile ? '1.5rem 1.25rem' : '2rem',
              background: 'var(--card)',
              textDecoration: 'none',
              color: 'inherit',
              gridColumn: !isMobile && projects.length % 2 !== 0 && i === projects.length - 1
                ? '1 / -1'
                : 'auto',
              cursor: 'pointer',
            }}
          >

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'var(--display)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
                display: 'block',
              }}>
                {project.num}
              </span>
              <motion.span
                whileHover={{ x: 3, y: -3 }}
                style={{ fontSize: '18px', color: 'var(--muted)' }}
              >
                ↗
              </motion.span>
            </div>

            <h3 style={{
              fontFamily: 'var(--display)',
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
            }}>
              {project.title}
            </h3>

            <p style={{
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '1.25rem',
              lineHeight: 1.7,
            }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    padding: '4px 12px',
                    borderRadius: '3px',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.a>
        ))}
      </div>

    </section>
  )
}

export default Projects