import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Projects', description: 'An evolving record of work, decisions, and what was learned.' };

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow page-kicker">03 / Work, as it unfolds</p>
      <h1 className="page-title">Projects<span className="accent">.</span></h1>
      <p className="page-dek">Ideas become visible through the work around them: what was attempted, what changed, what did not work, and what remains unfinished.</p>
      <section className="empty-panel"><p className="eyebrow">Project index · In formation</p><h2>Projects will appear here as their records are assembled.</h2><p className="empty-note">No project histories have been published yet.</p></section>
      <div className="page-rule"><Link href="/archive" className="text-link">Read the journals <ArrowUpRight size={15} /></Link></div>
    </main>
  );
}
