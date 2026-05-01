import { NAV_ITEMS, SectionId } from '../types';

interface SidebarProps {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="app-sidebar">
      <nav>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nav-item${active === item.id ? ' active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span
              className="nav-item__badge"
              style={{ background: item.color }}
            >
              {item.code}
            </span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
