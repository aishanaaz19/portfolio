/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { info } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
}

function About() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <section
      id="about"
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
          01 —
        </span>
        <h2 style={{
          fontFamily: 'var(--display)',
          fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          About
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2rem' : '3rem',
        alignItems: 'start',
      }}>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            fontSize: '15px',
            color: 'var(--muted)',
            lineHeight: 1.9,
          }}
        >
          {info.bio}
          <br /><br />
          <span style={{ color: 'var(--text)' }}>
            Currently open to new opportunities.
          </span>{' '}
          Let's build something worth talking about.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {info.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: isMobile ? '1.25rem' : '1.5rem',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
              }}
            >
              <div style={{
                fontFamily: 'var(--display)',
                fontSize: isMobile ? '1.4rem' : '1.8rem',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '0.3rem',
              }}>
                {stat.value}
              </div>

              <div style={{
                fontSize: '12px',
                color: 'var(--text)',
                fontWeight: 600,
                marginBottom: '0.4rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                {stat.title}
              </div>

              <div style={{
                fontSize: '13px',
                color: 'var(--muted)',
                lineHeight: 1.6,
              }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}

export default About