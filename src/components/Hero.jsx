/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { info, typewriterPhrases } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'
import useScramble from '../hooks/useScramble'
import useTypewriter from '../hooks/useTypewriter'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }
  })
}

function Hero() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  const line1Ref = useScramble('I BUILD')
  const line2Ref = useScramble('THINGS')
  const line3Ref = useScramble('FOR THE WEB.')
  const typewritten = useTypewriter(typewriterPhrases)

  return (
    <section style={{
      maxWidth: '860px',
      margin: '0 auto',
      padding: isMobile ? '7rem 1.25rem 4rem' : '2rem 2.5rem 6rem',
    }}>

      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(232,255,71,0.1)',
          border: '1px solid rgba(232,255,71,0.25)',
          color: 'var(--accent)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '6px 14px',
          borderRadius: '100px',
          marginBottom: '2rem',
        }}
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: '7px' }}
        >
          ●
        </motion.span>
        {info.available ? 'Available for new projects' : 'Currently unavailable'}
      </motion.div>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          fontFamily: 'var(--display)',
          fontSize: isMobile ? 'clamp(2.8rem, 14vw, 3.5rem)' : 'clamp(3.5rem, 9vw, 7rem)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          marginBottom: '1.5rem',
        }}
      >
        <span ref={line1Ref} style={{ display: 'block' }}>
          I BUILD
        </span>
        <span
          ref={line2Ref}
          style={{
            display: 'block',
            WebkitTextStroke: isMobile ? '1px var(--text)' : '2px var(--text)',
            color: 'transparent',
          }}
        >
          THINGS
        </span>
        <span ref={line3Ref} style={{ display: 'block' }}>
          FOR THE{' '}
          <span style={{ color: 'var(--accent)' }}>WEB.</span>
        </span>
      </motion.h1>

      {/* TYPEWRITER LINE */}
      <motion.div
        custom={1.5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          color: 'var(--accent)',
          marginBottom: '2rem',
          minHeight: '28px',
        }}
      >
        <span style={{
          fontFamily: 'var(--mono, monospace)',
          fontSize: isMobile ? '13px' : '15px',
          color: 'var(--accent)',
          letterSpacing: '0.02em',
        }}>
          {typewritten}
        </span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{
            display: 'inline-block',
            width: '2px',
            height: isMobile ? '14px' : '16px',
            background: 'var(--accent)',
            marginLeft: '1px',
            borderRadius: '1px',
          }}
        />
      </motion.div>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
        }}
      >

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          width: isMobile ? '100%' : 'auto',
        }}>
          <a
            href={'#projects'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: isMobile ? '12px 20px' : '13px 28px',
              fontFamily: 'var(--display)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              borderRadius: '4px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: '2px solid var(--accent)',
              transition: 'all 0.18s',
              cursor: 'pointer',
              flex: isMobile ? '1' : 'none',
              justifyContent: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            My work ↓
          </a>
          <a
            href={'#contact'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: isMobile ? '12px 20px' : '13px 28px',
              fontFamily: 'var(--display)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              borderRadius: '4px',
              background: 'transparent',
              color: 'var(--text)',
              border: '2px solid rgba(255,255,255,0.2)',
              transition: 'all 0.18s',
              cursor: 'pointer',
              flex: isMobile ? '1' : 'none',
              justifyContent: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
          >
            Get in touch
          </a>
        </div>

      </motion.div>

    </section>
  )
}

export default Hero