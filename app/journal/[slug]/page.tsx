import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJournal } from '../../../lib/journals';

export const dynamic = 'force-dynamic';

async function getPublished(slug: string) {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://the-observer-phi.vercel.app';
    const response = await fetch(`${base}/api/journals`, { cache: 'no-store' });
    if (!response.ok) return null;
    const data = await response.json();
    return (data.journals || []).find((item: { slug: string }) => item.slug === slug) || null;
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const founding = getJournal(slug);
  const journal = founding || await getPublished(slug);
  return { title: journal?.title || 'Journal not found', description: founding?.dek || journal?.excerpt };
}

export default async function JournalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const founding = getJournal(slug);
  const journal = founding || await getPublished(slug);
  if (!journal) notFound();
  if (!founding) return <main className="journal-page"><section className="shell journal-hero"><div className="reading"><p className="eyebrow">Journal {String(journal.number).padStart(3, '0')} · {journal.original_created_at}</p><h1 className="journal-title">{journal.title}</h1><p className="journal-dek">{journal.excerpt}</p><div className="journal-meta-grid"><span>PUBLISHED RECORD</span><span>THE OBSERVER</span><span>JOURNAL {String(journal.number).padStart(3, '0')}</span></div></div></section><article className="reading journal-reading"><div className="journal-raw">{journal.content}</div><div className="journal-end rule"><p className="eyebrow">End of Journal {String(journal.number).padStart(3, '0')}</p><p className="section-note">Written in the present. Left for the future.</p><Link href="/timeline" className="button">Back to timeline</Link></div></article></main>;
  return <main className="journal-page"><section className="shell journal-hero"><div className="reading"><p className="eyebrow">Journal {founding.number} · {founding.date}</p><h1 className="journal-title">{founding.title}</h1><p className="journal-dek">{founding.dek}</p><div className="journal-meta-grid"><span>EDITION 1.0</span><span>HUMAN + AI</span><span>{founding.sections.length} CHAPTERS</span></div><div className="provenance-box"><p className="eyebrow">{founding.kind}</p><p className="provenance-note">{founding.editorialTreatment}</p></div></div></section><article className="reading journal-reading"><div className="journal-raw">{founding.raw}</div><div className="journal-end rule"><p className="eyebrow">End of Journal {founding.number}</p><p className="section-note">Written in the present. Left for the future.</p><Link href="/archive" className="button">Back to archive</Link></div></article></main>;
}
