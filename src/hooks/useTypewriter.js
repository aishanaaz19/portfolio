import { useState, useEffect } from 'react'

function useTypewriter(phrases, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setPhraseIndex(prev => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return displayed
}

export default useTypewriter