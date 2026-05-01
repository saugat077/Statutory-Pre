import React from 'react';

type NoticeVariant = 'warn' | 'info' | 'ok' | 'error';

interface NoticeProps {
  variant: NoticeVariant;
  title?: string;
  children: React.ReactNode;
}

export function Notice({ variant, title, children }: NoticeProps) {
  return (
    <div className={`notice notice--${variant}`}>
      {title && <strong>{title}</strong>}
      {children}
    </div>
  );
}
