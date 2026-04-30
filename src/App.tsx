import { useState, useEffect, useCallback } from 'react'
import Sidebar from './components/Sidebar'
import SlideViewer from './components/SlideViewer'
import { TOTAL_SLIDES } from './slides'
import './App.css'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  // ── Clamp helper ────────────────────────────────────────────────
  const navigate = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SLIDES - 1))
    setActiveIndex(clamped)
  }, [])

  // ── Keyboard navigation ─────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault()
          navigate(activeIndex + 1)
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          navigate(activeIndex - 1)
          break
        case 'Home':
          e.preventDefault()
          navigate(0)
          break
        case 'End':
          e.preventDefault()
          navigate(TOTAL_SLIDES - 1)
          break
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, navigate])

  return (
    <div className="app">
      <Sidebar
        activeIndex={activeIndex}
        onSelect={navigate}
      />
      <SlideViewer
        activeIndex={activeIndex}
        onNavigate={navigate}
      />
    </div>
  )
}
