 'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/archive', label: 'Journals' },
  { href: '/ledger', label: 'Ledger' },
  { href: '/projects', label: 'Projects' },
  { href: '/timeline', label: 'Timeline' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="The Observer home">
          <span className="wordmark-mark" aria-hidden="true">◉</span>
          <span>THE OBSERVER</span>
          <span className="wordmark-period">.</span>
        </Link>
        <button className="mobile-menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
        <nav aria-label="Main navigation" className={`main-nav ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          <Link href="/observer" className="nav-author">The author <span aria-hidden="true">↗</span></Link>
        </nav>
        <Link href="/studio" className="studio-link"><span className="status-dot" /> Studio</Link>
      </div>
      <div className="header-rule"><span>FIELD RECORD / 2026—</span><span>HUMAN THOUGHT · MACHINE AGE</span></div>
    </header>
  );
}
