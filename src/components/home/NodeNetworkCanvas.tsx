import { useEffect, useRef, useCallback } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  radius: number
}

interface Particle {
  fromNode: number
  toNode: number
  progress: number
  speed: number
}

const NODE_COUNT = 40
const CONNECTION_DISTANCE = 160
const PARTICLE_COUNT = 12
const MOUSE_RADIUS = 120
const MOUSE_FORCE = 0.08

export function NodeNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animFrameRef = useRef<number>(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  const initNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      nodes.push({
        x, y, baseX: x, baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.8,
      })
    }
    nodesRef.current = nodes

    const particles: Particle[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const from = Math.floor(Math.random() * NODE_COUNT)
      let to = Math.floor(Math.random() * NODE_COUNT)
      while (to === from) to = Math.floor(Math.random() * NODE_COUNT)
      particles.push({
        fromNode: from,
        toNode: to,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
      })
    }
    particlesRef.current = particles
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      initNodes(rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      ctx.clearRect(0, 0, w, h)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update nodes
      for (const node of nodes) {
        // Mouse attraction
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
          node.vx += (dx / dist) * force
          node.vy += (dy / dist) * force
        }

        // Drift back to base
        node.vx += (node.baseX - node.x) * 0.0005
        node.vy += (node.baseY - node.y) * 0.0005

        // Damping
        node.vx *= 0.97
        node.vy *= 0.97

        node.x += node.vx
        node.y += node.vy

        // Bounds
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
        node.x = Math.max(0, Math.min(w, node.x))
        node.y = Math.max(0, Math.min(h, node.y))
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.12
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(139, 233, 253, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      for (const p of particlesRef.current) {
        p.progress += p.speed
        if (p.progress >= 1) {
          p.progress = 0
          p.fromNode = p.toNode
          let newTo = Math.floor(Math.random() * nodes.length)
          while (newTo === p.fromNode) newTo = Math.floor(Math.random() * nodes.length)
          p.toNode = newTo
        }

        const from = nodes[p.fromNode]
        const to = nodes[p.toNode]
        const px = from.x + (to.x - from.x) * p.progress
        const py = from.y + (to.y - from.y) * p.progress

        // Glow
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 6)
        gradient.addColorStop(0, 'rgba(139, 233, 253, 0.5)')
        gradient.addColorStop(1, 'rgba(139, 233, 253, 0)')
        ctx.beginPath()
        ctx.arc(px, py, 6, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(px, py, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139, 233, 253, 0.8)'
        ctx.fill()
      }

      // Draw nodes
      for (const node of nodes) {
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const isNear = dist < MOUSE_RADIUS

        ctx.beginPath()
        ctx.arc(node.x, node.y, isNear ? node.radius * 1.8 : node.radius, 0, Math.PI * 2)
        ctx.fillStyle = isNear
          ? 'rgba(139, 233, 253, 0.6)'
          : 'rgba(139, 233, 253, 0.2)'
        ctx.fill()

        // Terminal brackets for nearby nodes
        if (isNear && dist < 80) {
          const id = `0x${(node.baseX * 7 + node.baseY * 13).toString(16).slice(0, 4).toUpperCase()}`
          ctx.font = '9px "JetBrains Mono", monospace'
          ctx.fillStyle = `rgba(139, 233, 253, ${0.5 * (1 - dist / 80)})`
          ctx.fillText(`[node: ${id}]`, node.x + 8, node.y - 8)
        }
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [prefersReducedMotion, initNodes])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  )
}
