import Link from 'next/link';

const links = [
  { href: '/archive', label: 'Journals' },
  { href: '/ledger', label: 'Ledger' },
  { href: '/projects', label: 'Projects' },
  { href: '/timeline', label: 'Timeline' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="The Observer home">
          <span className="wordmark-mark" aria-hidden="true">◉</span>
          <span>THE OBSERVER</span>
          <span className="wordmark-period">.</span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          <Link href="/observer" className="nav-author">The author <span aria-hidden="true">↗</span></Link>
        </nav>
        <Link href="/studio" className="studio-link"><span className="status-dot" /> Studio</Link>
      </div>
      <div className="header-rule"><span>FIELD RECORD / 2026—</span><span>HUMAN THOUGHT · MACHINE AGE</span></div>
    </header>
  );
}
