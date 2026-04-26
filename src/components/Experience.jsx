// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
}

function Experience() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <section
      id="experience"
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
          04 —
        </span>
        <h2 style={{
          fontFamily: 'var(--display)',
          fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          Experience
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ backgroundColor: '#1e1e1e' }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '0.4rem' : '1rem',
              padding: isMobile ? '1.25rem' : '1.5rem 1.75rem',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: i === 0 ? '8px 8px 0 0' : i === experience.length - 1 ? '0 0 8px 8px' : '0',
            }}
          >
            <div>
              <p style={{
                fontFamily: 'var(--display)',
                fontSize: isMobile ? '15px' : '16px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                marginBottom: '4px',
              }}>
                {exp.role}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {exp.company}
              </p>
            </div>
            <p style={{
              fontFamily: 'var(--display)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.06em',
              textAlign: isMobile ? 'left' : 'right',
            }}>
              {exp.period}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Experience