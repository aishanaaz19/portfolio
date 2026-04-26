import { useEffect, useRef } from 'react'

function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animationId

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      animationId = requestAnimationFrame(animateRing)
    }

    const isInteractive = (el) => {
      return el.closest('a, button, input, textarea, [data-cursor]') !== null
    }

    const onMouseOver = (e) => {
      if (isInteractive(e.target)) {
        dot.style.transform = 'translate(-50%, -50%) scale(3)'
        dot.style.opacity = '0.4'
        ring.style.transform = 'translate(-50%, -50%) scale(1.8)'
        ring.style.borderColor = 'var(--accent)'
      }
    }

    const onMouseOut = (e) => {
      if (isInteractive(e.target)) {
        dot.style.transform = 'translate(-50%, -50%) scale(1)'
        dot.style.opacity = '1'
        ring.style.transform = 'translate(-50%, -50%) scale(1)'
        ring.style.borderColor = 'var(--accent)'
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    animateRing()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px', height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.15s ease, opacity 0.15s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '36px', height: '36px',
          borderRadius: '50%',
          border: '1.5px solid var(--accent)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  )
}

export default Cursor