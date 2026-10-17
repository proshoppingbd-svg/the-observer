 'use client';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { journals } from '../../lib/journals';

const entries = [
  { kind: 'ESSAY', title: 'The Changing Relationship Between Humans and AI', text: 'How human judgment and increasingly capable AI systems might evolve together.', href: '/journal/the-origin' },
  { kind: 'HYPOTHESIS', title: 'Can One Person Operate a Multi-Agent Company?', text: 'A hypothesis about organizational scale and AI-assisted execution.', href: '/ledger' },
  { kind: 'OBSERVATION', title: 'What Changed My Thinking This Month', text: 'A record of evidence, questions, and revised assumptions.', href: '/timeline' },
  { kind: 'PREDICTION', title: 'The Future of Small AI-Native Teams', text: 'A falsifiable prediction with a review date and success criteria.', href: '/ledger' },
];

export default function Archive() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => entries.filter((entry) => `${entry.kind} ${entry.title} ${entry.text}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <main className="archive-page page-shell">
      <p className="eyebrow page-kicker">The Observer / Archive</p>
      <h1 className="page-title">Ideas preserved in time<span className="accent">.</span></h1>
      <p className="page-dek">Thoughts, essays, hypotheses, and observations kept close to the moment they were made.</p>
      <div className="archive-search"><Search size={17} aria-hidden="true" /><input aria-label="Search the archive" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the archive..." /></div>
      <div className="archive-filters" aria-label="Archive categories"><span className="active">All</span><span>Essays</span><span>Hypotheses</span><span>Observations</span><span>Predictions</span></div>
      <section className="archive-list" aria-label="Archive entries">
        <Link href={`/journal/${journals[0].slug}`} className="archive-row archive-feature-row"><span className="archive-row-number">000</span><div><p className="archive-entry-kind">FOUNDING JOURNAL</p><h2>{journals[0].title}</h2><p>{journals[0].date} · {journals[0].kind}</p></div><ArrowUpRight size={19} aria-hidden="true" /></Link>
        {filtered.map((entry) => <Link href={entry.href} key={entry.title} className="archive-entry"><p className="archive-entry-kind">{entry.kind} · SAMPLE ENTRY</p><h2>{entry.title}</h2><p>{entry.text}</p><ArrowUpRight size={18} aria-hidden="true" /></Link>)}
        {!filtered.length && <p className="archive-empty">No records match that search yet.</p>}
      </section>
      <section className="sequence-section"><p className="eyebrow">The sequence continues</p><h2>Journal 001 → Journal 002 → Journal 003</h2><p>Every daily record becomes the next numbered journal. Start the next one from today&apos;s page.</p><Link href="/daily" className="button">Write Journal 001 <ArrowUpRight size={15}/></Link></section>
    </main>
  );
}
