import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Timeline', description: 'A chronological map of the records and events preserved by The Observer.' };

export default function TimelinePage() {
  return (
    <main className="page-shell">
      <p className="eyebrow page-kicker">04 / Time, in order</p>
      <h1 className="page-title">The timeline<span className="accent">.</span></h1>
      <p className="page-dek">A chronological map of the archive. Dates are kept at the precision the source supports; this founding record is dated to October 2026.</p>
      <div className="timeline-list">
        <article className="timeline-entry">
          <span className="timeline-date">October 2026 · Founding record</span>
          <h2><Link href="/journal/the-origin">Journal 000 — The Origin <ArrowUpRight size={17} aria-hidden="true" /></Link></h2>
          <p>A conversation about intelligence, history, uncertainty, and why a record should be made before the outcome is known.</p>
          <div className="timeline-meta">Edited excerpts · Not an unabridged transcript</div>
        </article>
      </div>
      <p className="provenance-note">Only records with dates supported by their source appear here. The original conversation’s exact date and a complete verified transcript have not been added to this project.</p>
    </main>
  );
}
