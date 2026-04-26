import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = (scrollTop / docHeight) * 100
      setProgress(percent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '3px',
      zIndex: 9999,
      background: 'rgba(255,255,255,0.06)',
    }}>
      <div style={{
        height: '100%',
        width: progress + '%',
        background: 'var(--accent)',
        transformOrigin: 'left',
        transition: 'width 0.1s linear',
        boxShadow: '0 0 8px var(--accent)',
      }} />
    </div>
  )
}

export default ScrollProgress