// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'
import { info } from '../data/portfolio'
import useWindowSize from '../hooks/useWindowSize'
import { FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const links = [
  { label: 'LinkedIn', icon: <FiLinkedin size={15} />, href: info.linkedin },
  { label: 'GitHub', icon: <FiGithub size={15} />, href: info.github },
  { label: 'Resume', icon: <FiDownload size={15} />, href: info.resumeUrl },
]

const inputStyle = {
  width: '100%',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: '4px',
  padding: '14px 16px',
  fontSize: '14px',
  color: 'var(--text)',
  fontFamily: 'var(--body)',
  outline: 'none',
  transition: 'border-color 0.2s',
}

function Contact() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(info.formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: isMobile ? '3.5rem 1.25rem 6rem' : '5rem 2.5rem 8rem',
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
          05 —
        </span>
        <h2 style={{
          fontFamily: 'var(--display)',
          fontSize: isMobile ? '2rem' : 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          Contact
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '3rem' : '4rem',
        alignItems: 'start',
      }}>

        {/* LEFT — big text + links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div style={{
            fontFamily: 'var(--display)',
            fontSize: isMobile ? 'clamp(2rem, 12vw, 3rem)' : 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '1.5rem',
          }}>
            <div>LET'S</div>
            <div style={{
              WebkitTextStroke: isMobile ? '1px rgba(240,237,230,0.3)' : '2px rgba(240,237,230,0.3)',
              color: 'transparent',
            }}>
              WORK
            </div>
            <div>TOGETHER.</div>
          </div>

          <p style={{
            fontSize: '14px',
            color: 'var(--muted)',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Got a project in mind or just want to say hi?
            Fill in the form or reach me directly at{' '}
            <a
              href={'mailto:' + info.email}
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
              {info.email}
            </a>
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                  backgroundColor: 'rgba(232,255,71,0.06)',
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 18px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'var(--display)',
                  letterSpacing: '0.04em',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '2.5rem',
                background: 'var(--card)',
                border: '1px solid rgba(232,255,71,0.3)',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'var(--display)',
                fontSize: '2.5rem',
                marginBottom: '1rem',
              }}>
                ✓
              </div>
              <p style={{
                fontFamily: 'var(--display)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}>
                Message sent!
              </p>
              <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  marginTop: '1.5rem',
                  background: 'none',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '8px 20px',
                  color: 'var(--muted)',
                  fontFamily: 'var(--display)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'var(--display)',
                  color: 'var(--muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'var(--display)',
                  color: 'var(--muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: 'var(--display)',
                  color: 'var(--muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontSize: '13px', color: '#ff4d4d' }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ opacity: 0.88 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '14px 28px',
                  background: status === 'sending' ? 'var(--muted)' : 'var(--accent)',
                  color: 'var(--bg)',
                  border: 'none',
                  borderRadius: '4px',
                  fontFamily: 'var(--display)',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message ↗'}
              </motion.button>

            </form>
          )}
        </motion.div>

      </div>

    </section>
  )
}

export default Contact