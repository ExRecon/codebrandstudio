import { useEffect } from 'react'

export function CustomCursor() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canHover || reduced) {
      return
    }

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let targetX = x
    let targetY = y
    let frame = 0

    const move = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const hoverTargets = document.querySelectorAll('a, button, [data-cursor="hover"]')
    const onEnter = () => cursor.classList.add('is-active')
    const onLeave = () => cursor.classList.remove('is-active')

    hoverTargets.forEach((item) => {
      item.addEventListener('mouseenter', onEnter)
      item.addEventListener('mouseleave', onLeave)
    })

    const render = () => {
      x += (targetX - x) * 0.18
      y += (targetY - y) * 0.18
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', move)
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', move)
      hoverTargets.forEach((item) => {
        item.removeEventListener('mouseenter', onEnter)
        item.removeEventListener('mouseleave', onLeave)
      })
      cursor.remove()
    }
  }, [])

  return null
}
