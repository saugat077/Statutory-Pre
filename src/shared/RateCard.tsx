import React from 'react';

interface RateCardProps {
  label: string;
  value: React.ReactNode;
  sub?: string;
  accent?: string;
}

export function RateCard({ label, value, sub, accent = '#1d70b8' }: RateCardProps) {
  return (
    <div className="rate-card" style={{ borderTopColor: accent }}>
      <div className="rate-card__label">{label}</div>
      <div className="rate-card__value">{value}</div>
      {sub && <div className="rate-card__sub">{sub}</div>}
    </div>
  );
}

export function RateGrid({ children }: { children: React.ReactNode }) {
  return <div className="rate-grid">{children}</div>;
}
