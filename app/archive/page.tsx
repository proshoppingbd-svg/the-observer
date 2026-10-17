import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { journals } from '../../lib/journals';

export const metadata = { title: 'Journals', description: 'Chronological journals from The Observer archive.' };

export default function Archive() {
  return (
    <main className="page-shell">
      <p className="eyebrow page-kicker">01 / A record, in sequence</p>
      <h1 className="page-title">Journals<span className="accent">.</span></h1>
      <p className="page-dek">Thought, recorded from inside its own moment. Each entry carries its date and editorial history with it.</p>
      <div className="page-rule" aria-label="Journal entries">
        {journals.map((journal) => (
          <Link href={`/journal/${journal.slug}`} key={journal.slug} className="archive-row">
            <span className="archive-row-number">{journal.number}</span>
            <div><h2>{journal.title}</h2><p>{journal.date} · {journal.kind}</p></div>
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </main>
  );
}
