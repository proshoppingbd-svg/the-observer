import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Prediction Ledger', description: 'A dated record of expectations, preserved alongside their outcomes.' };

export default function LedgerPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow page-kicker">02 / Expectations, kept intact</p>
      <h1 className="page-title">Prediction<br /><em>ledger.</em></h1>
      <p className="page-dek">A place for expectations to meet the future. Each prediction belongs to its original date and wording; outcomes and later reflections are added alongside it, never in place of it.</p>
      <div className="ledger-principles" aria-label="Ledger principles">
        <div><strong>01 / Original</strong><span>Keep the first wording and timestamp.</span></div>
        <div><strong>02 / Evidence</strong><span>Record what later supports or challenges it.</span></div>
        <div><strong>03 / Revision</strong><span>Add new understanding without rewriting the past.</span></div>
      </div>
      <section className="empty-panel"><p className="eyebrow">Current ledger · 0 published entries</p><h2>No predictions have been entered yet.</h2><p className="empty-note">The record begins when there is something dated and specific enough to test.</p></section>
      <div className="page-rule"><Link href="/timeline" className="text-link">See the timeline <ArrowUpRight size={15} /></Link></div>
    </main>
  );
}
