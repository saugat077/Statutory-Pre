import { SLIDES } from '../slides'
import type { SlideMeta } from '../types'
import './Sidebar.css'

interface SidebarProps {
  activeIndex: number
  onSelect: (index: number) => void
}

export default function Sidebar({ activeIndex, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">

      {/* ── Brand header ──────────────────────────────────── */}
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <i className="fa-solid fa-layer-group" />
        </div>
        <div className="sidebar__brand">
          <span className="sidebar__brand-name">UK Statutory</span>
          <span className="sidebar__brand-sub">Leave &amp; Pay</span>
        </div>
      </div>

      {/* ── Nav list ──────────────────────────────────────── */}
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {SLIDES.map(({ meta }, index) => (
            <SidebarItem
              key={meta.id}
              meta={meta}
              index={index}
              isActive={index === activeIndex}
              onClick={() => onSelect(index)}
            />
          ))}
        </ul>
      </nav>

      {/* ── Footer ────────────────────────────────────────── */}
      <div className="sidebar__footer">
        <div className="sidebar__kbd-hint">
          <kbd className="sidebar__kbd">←</kbd>
          <kbd className="sidebar__kbd">→</kbd>
          <span>navigate slides</span>
        </div>
      </div>

    </aside>
  )
}

// ── Single nav item ──────────────────────────────────────────────
interface SidebarItemProps {
  meta: SlideMeta
  index: number
  isActive: boolean
  onClick: () => void
}

function SidebarItem({ meta, index, isActive, onClick }: SidebarItemProps) {
  return (
    <li>
      <button
        className={`sidebar__item${isActive ? ' sidebar__item--active' : ''}`}
        onClick={onClick}
        title={meta.title}
      >
        <span className="sidebar__item-num">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="sidebar__item-text">
          <span className="sidebar__item-title">{meta.title}</span>
        </div>
        {isActive && <span className="sidebar__item-dot" />}
      </button>
    </li>
  )
}
