import { useEffect } from "react"

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className = "cursor"
    document.body.appendChild(cursor)

    let mouseX = 0
    let mouseY = 0

    let isMoving = false
    let moveTimeout

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      isMoving = true

      clearTimeout(moveTimeout)
      moveTimeout = setTimeout(() => {
        isMoving = false
      }, 80)
    }

    window.addEventListener("mousemove", move)

    let lastX = 0
    let lastY = 0

    let prevX = 0
    let prevY = 0

    function animate() {
      lastX += (mouseX - lastX) * 0.2
      lastY += (mouseY - lastY) * 0.2

      cursor.style.transform = `translate(${lastX}px, ${lastY}px) translate(-50%, -50%)`

      if (isMoving) {
        cursor.style.opacity = "1"
        cursor.style.boxShadow =
          "0 0 10px rgba(232,255,71,0.6), 0 0 20px rgba(232,255,71,0.3)"
        cursor.style.animation = "none"
      } else {
        cursor.style.opacity = "0.9"
        cursor.style.boxShadow =
          "0 0 8px rgba(232,255,71,0.45)"
        cursor.style.animation = "cursorIdlePulse 2s ease-in-out infinite"
      }

      requestAnimationFrame(animate)
    }

    animate()

    // ✨ Stardust particles (velocity-based)
    const createParticle = () => {
      if (!isMoving) return

      const dx = mouseX - prevX
      const dy = mouseY - prevY

      const speed = Math.sqrt(dx * dx + dy * dy)
      const count = Math.min(5, Math.max(2, Math.floor(speed / 2)))

      for (let i = 0; i < count; i++) {
        const p = document.createElement("div")
        p.className = "cursor-particle"

        const offsetX = (Math.random() - 0.5) * 20 - dx * 0.3
        const offsetY = (Math.random() - 0.5) * 20 - dy * 0.3

        p.style.left = mouseX + offsetX + "px"
        p.style.top = mouseY + offsetY + "px"

        const size = Math.random() * 4 + 2
        p.style.width = size + "px"
        p.style.height = size + "px"

        document.body.appendChild(p)

        setTimeout(() => p.remove(), 700)
      }

      prevX = mouseX
      prevY = mouseY
    }

    const interval = setInterval(createParticle, 45)

    return () => {
      window.removeEventListener("mousemove", move)
      clearInterval(interval)
      cursor.remove()
    }
  }, [])

  return null
}

export default CustomCursor