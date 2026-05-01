import { useState, useRef, useEffect } from 'react';
import { SectionId } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { pages } from './pages';

export default function App() {
  const [active, setActive] = useState<SectionId>('overview');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (id: SectionId) => {
    setActive(id);
  };

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [active]);

  const ActivePage = pages[active];

  return (
    <>
      <Header />
      <Sidebar active={active} onNavigate={handleNavigate} />
      <div className="app-content" ref={contentRef}>
        <div className="page">
          <ActivePage onNavigate={handleNavigate} />
        </div>
      </div>
    </>
  );
}
