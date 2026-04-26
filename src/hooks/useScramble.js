import { useEffect, useRef } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#@$%&'

function useScramble(text, started = true) {
  const ref = useRef(null)

  useEffect(() => {
    if (!started || !ref.current) return

    let iteration = 0
    let interval = null
    const originalText = text

    interval = setInterval(() => {
      if (!ref.current) return

      ref.current.innerText = originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < iteration) return originalText[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      if (iteration >= originalText.length) {
        clearInterval(interval)
        ref.current.innerText = originalText
      }

      iteration += 0.4
    }, 30)

    return () => clearInterval(interval)
  }, [text, started])

  return ref
}

export default useScramble