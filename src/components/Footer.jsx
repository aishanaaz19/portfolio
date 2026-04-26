// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { info } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Footer() {
  const year = new Date().getFullYear()
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <>
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: isMobile ? '1.5rem 1.25rem 2.5rem' : '2rem 2.5rem 3rem',
      maxWidth: '860px',
      margin: '0 auto',
    }}>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: '1rem',
      }}>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 800,
            fontSize: '18px',
            color: 'var(--accent)',
            letterSpacing: '-0.02em',
          }}
        >
          {info.initials}.
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '12px',
            color: 'var(--muted)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily: 'var(--display)',
            fontWeight: 700,
          }}
        >
          © {year} {info.name}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '1.5rem' }}
        >
        {[
          { label: 'GitHub', icon: <FiGithub size={13} />, href: info.github },
          { label: 'LinkedIn', icon: <FiLinkedin size={13} />, href: info.linkedin },
          { label: 'Email', icon: <FiMail size={13} />, href: 'mailto:' + info.email },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            {link.icon}
            {link.label}
          </a>
        ))}
        </motion.div>

      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          marginTop: '2rem',
          height: '1px',
          background: 'linear-gradient(90deg, var(--accent), transparent)',
          transformOrigin: 'left',
        }}
      />
    </footer>
    </>
  )
}

export default Footer