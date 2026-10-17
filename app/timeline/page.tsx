import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Timeline', description: 'A chronological map of the records and events preserved by The Observer.' };

async function getRecords() {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://the-observer-phi.vercel.app';
    const response = await fetch(`${base}/api/journals`, { cache: 'no-store' });
    if (!response.ok) return [];
    const data = await response.json();
    return data.journals || [];
  } catch { return []; }
}

export default async function TimelinePage() {
  const records = await getRecords();
  return <main className="page-shell">
    <p className="eyebrow page-kicker">04 / Time, in order</p>
    <h1 className="page-title">The timeline<span className="accent">.</span></h1>
    <p className="page-dek">A chronological map of the archive. Dates are kept at the precision the source supports.</p>
    <div className="timeline-list">
      <article className="timeline-entry"><span className="timeline-date">October 2026 · Founding record</span><h2><Link href="/journal/the-origin">Journal 000 — The Origin <ArrowUpRight size={17} aria-hidden="true" /></Link></h2><p>A conversation about intelligence, history, uncertainty, and why a record should be made before the outcome is known.</p><div className="timeline-meta">Edited excerpts · Provenance noted</div></article>
      {records.map((record: { number: number; slug: string; title: string; excerpt: string; original_created_at: string }) => <article className="timeline-entry" key={record.slug}><span className="timeline-date">{record.original_created_at} · Published record</span><h2><Link href={`/journal/${record.slug}`}>Journal {String(record.number).padStart(3, '0')} — {record.title} <ArrowUpRight size={17} aria-hidden="true" /></Link></h2><p>{record.excerpt}</p><div className="timeline-meta">Published journal · Original entry preserved</div></article>)}
    </div>
    <p className="provenance-note">Journal 000 is the founding conversation. Later records are published from the journal database and remain separate entries.</p>
  </main>;
}
