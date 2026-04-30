import { useEffect, useRef, useState, useCallback } from 'react'
import { SLIDES } from '../slides'
import './SlideViewer.css'

const SLIDE_W = 1280
const SLIDE_H = 720

interface SlideViewerProps {
  activeIndex: number
  onNavigate: (index: number) => void
}

export default function SlideViewer({ activeIndex, onNavigate }: SlideViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef   = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  // ── Scale slide to fit container width ──────────────────────────
  const updateScale = useCallback(() => {
    if (!containerRef.current) return
    const { offsetWidth: w, offsetHeight: h } = containerRef.current
    const padding = 48
    const scaleByWidth  = (w - padding) / SLIDE_W
    const scaleByHeight = (h - padding) / SLIDE_H
    setScale(Math.min(scaleByWidth, scaleByHeight, 1))
  }, [])

  useEffect(() => {
    updateScale()
    const observer = new ResizeObserver(updateScale)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [updateScale])

  // ── Inject slide HTML ──────────────────────────────────────────
  const { Component } = SLIDES[activeIndex]
  const { meta }      = SLIDES[activeIndex]

  const canPrev = activeIndex > 0
  const canNext = activeIndex < SLIDES.length - 1

  return (
    <div className="viewer">

      {/* ── Top bar ───────────────────────────────────────── */}
      <header className="viewer__topbar">
        <div className="viewer__topbar-left">
          <i className={`fa-solid ${meta.icon} viewer__topbar-icon`} />
          <span className="viewer__topbar-title">{meta.title}</span>
        </div>
        <span className="viewer__topbar-counter">
          {activeIndex + 1} <span>/</span> {SLIDES.length}
        </span>
      </header>

      {/* ── Scrollable content area ───────────────────────── */}
      <div className="viewer__scroll" ref={containerRef}>
        <div
          className="viewer__stage"
          style={{
            width:  SLIDE_W * scale,
            height: SLIDE_H * scale,
          }}
        >
          {/* Scaled slide frame */}
          <div
            className="viewer__slide-wrap"
            style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
            ref={contentRef}
          >
            <Component />
          </div>
        </div>
      </div>

      {/* ── Bottom navigation bar ─────────────────────────── */}
      <footer className="viewer__footer">
        <button
          className="viewer__nav-btn"
          onClick={() => onNavigate(activeIndex - 1)}
          disabled={!canPrev}
          aria-label="Previous slide"
        >
          <i className="fa-solid fa-chevron-left" />
          <span>Previous</span>
        </button>

        {/* Dot indicators */}
        <div className="viewer__dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`viewer__dot${i === activeIndex ? ' viewer__dot--active' : ''}`}
              onClick={() => onNavigate(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="viewer__nav-btn viewer__nav-btn--next"
          onClick={() => onNavigate(activeIndex + 1)}
          disabled={!canNext}
          aria-label="Next slide"
        >
          <span>Next</span>
          <i className="fa-solid fa-chevron-right" />
        </button>
      </footer>

    </div>
  )
}
