import { NAV_ITEMS, SectionId } from '../types';

interface NextPageLinkProps {
  to: SectionId;
  onNavigate?: (id: SectionId) => void;
}

export function NextPageLink({ to, onNavigate }: NextPageLinkProps) {
  const item = NAV_ITEMS.find(n => n.id === to)!;
  return (
    <div className="next-page-link">
      <button className="next-page-link__btn" onClick={() => onNavigate?.(to)}>
        <span className="next-page-link__label">Next</span>
        <span className="next-page-link__name" style={{ color: item.color }}>{item.label}</span>
        <span className="next-page-link__arrow">→</span>
      </button>
    </div>
  );
}
