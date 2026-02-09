import { useRef, useEffect, useCallback } from 'react'

export default function CursorTrail() {
  const canvas = useRef(null)
  const pts = useRef([])
  const pos = useRef({ x: -100, y: -100 })
  const raf = useRef(null)

  const draw = useCallback(() => {
    const el = canvas.current
    if (!el) return
    const c = el.getContext('2d')
    c.clearRect(0, 0, el.width, el.height)
    c.globalCompositeOperation = 'lighter'

    pts.current.push({
      x: pos.current.x, y: pos.current.y,
      alpha: 0.6, size: 2.5 + Math.random() * 1.5,
    })

    for (let i = pts.current.length - 1; i >= 0; i--) {
      const p = pts.current[i]
      p.alpha -= 0.025
      if (p.alpha <= 0) { pts.current.splice(i, 1); continue }

      const g = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
      g.addColorStop(0, `rgba(253, 139, 53, ${p.alpha})`)
      g.addColorStop(1, `rgba(252, 79, 21, 0)`)
      c.beginPath()
      c.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
      c.fillStyle = g
      c.fill()
    }
    raf.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = canvas.current
    if (!el) return

    const resize = () => { el.width = innerWidth; el.height = innerHeight }
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY } }

    resize()
    addEventListener('resize', resize)
    addEventListener('mousemove', move)
    raf.current = requestAnimationFrame(draw)
    return () => {
      removeEventListener('resize', resize)
      removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [draw])

  return <canvas ref={canvas} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }} />
}
