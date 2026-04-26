// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
}

function Skills() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <section
      id="skills"
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
          02 —
        </span>
        <h2 style={{
          fontFamily: 'var(--display)',
          fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          Skills
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {skills.map((group, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ backgroundColor: '#212121' }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '0.6rem' : '1.5rem',
              padding: isMobile ? '1rem 1.25rem' : '1rem 1.5rem',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: i === 0 ? '8px 8px 0 0' : i === skills.length - 1 ? '0 0 8px 8px' : '0',
              transition: 'background 0.15s',
            }}
          >
            <span style={{
              fontFamily: 'var(--display)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              minWidth: isMobile ? 'unset' : '110px',
            }}>
              {group.category}
            </span>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {group.items.map((item, j) => (
                <motion.span
                  key={j}
                  whileHover={{
                    backgroundColor: 'rgba(232,255,71,0.12)',
                    borderColor: 'rgba(232,255,71,0.3)',
                    color: 'var(--accent)',
                  }}
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    padding: '4px 12px',
                    borderRadius: '3px',
                    background: 'rgba(255,255,255,0.06)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                    letterSpacing: '0.04em',
                    cursor: 'default',
                    transition: 'all 0.15s',
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills