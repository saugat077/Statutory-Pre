import React from 'react';

interface ChecklistProps {
  items: React.ReactNode[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="gov-checklist">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}
