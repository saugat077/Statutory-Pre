import { useState, useRef, useEffect } from 'react';
import { SectionId } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { pages } from './pages';

export default function App() {
  const [active, setActive] = useState<SectionId>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <button
        className={`sidebar-toggle${sidebarOpen ? ' sidebar-toggle--open' : ''}`}
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>
      <Sidebar active={active} onNavigate={handleNavigate} isOpen={sidebarOpen} />
      <div className="app-content" ref={contentRef}>
        <div className="page">
          <ActivePage onNavigate={handleNavigate} />
        </div>
      </div>
    </>
  );
}
