import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react';

const sections = [
  { number: '01', title: 'Journals', text: 'Thoughts recorded while the outcome is still unknown.', href: '/archive', meta: '01 RECORD' },
  { number: '02', title: 'Prediction ledger', text: 'What was expected, when it was written, and what followed.', href: '/ledger', meta: '0 ENTRIES' },
  { number: '03', title: 'Projects', text: 'Work in progress, decisions made, and lessons retained.', href: '/projects', meta: 'IN FORMATION' },
];

export default function Home() {
  return (
    <main>
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-mark" /> An independent record · Dhaka / Everywhere</p>
          <h1>We are here<br /><span>before we know.</span></h1>
          <div className="hero-lower">
            <p className="hero-dek">A living archive of human thought in the machine age. What we notice, what we build, what we believe will happen—and what we learn when it doesn’t.</p>
            <Link href="/archive" className="round-link" aria-label="Explore the journals"><ArrowDownRight size={22} /></Link>
          </div>
          <div className="hero-coordinate"><span>01 / THE PRESENT</span><span>AN ARCHIVE OF BECOMING</span></div>
        </div>
        <aside className="hero-index" aria-label="Archive index">
          <div className="index-orbit" aria-hidden="true"><span /><i /><b /></div>
          <p className="eyebrow">A note from the archive</p>
          <p className="index-quote">The future may know what happened to us. It may not know what it felt like before it happened.</p>
          <div className="index-line"><span>ORIGIN / JOURNAL 000</span><span>OCT ’26</span></div>
          <Link href="/journal/the-origin" className="index-open">Open founding record <ArrowUpRight size={15} /></Link>
        </aside>
      </section>

      <section className="manifesto content-width">
        <div className="section-kicker"><span>WHY THIS EXISTS</span><span>— A TIME CAPSULE, WRITTEN IN REAL TIME</span></div>
        <div className="manifesto-body"><span className="manifesto-symbol">◎</span><p>History keeps the outcome.<br /><em>The Observer keeps the uncertainty.</em></p></div>
        <p className="manifesto-note">A place to leave a truthful record of what was thought, attempted, predicted, misunderstood, and revised—without editing the past to make it look inevitable.</p>
      </section>

      <section className="archive-section content-width">
        <div className="section-heading"><div><p className="eyebrow">The publication</p><h2>Open records<span className="accent">.</span></h2></div><Link href="/timeline" className="text-link">View the timeline <MoveUpRight size={15} /></Link></div>
        <div className="record-feature">
          <div className="record-number"><span>FIRST RECORD</span><strong>000</strong><span>FOUNDING CONVERSATION</span></div>
          <div className="record-content"><p className="eyebrow">October 2026 <span className="tiny-separator">/</span> Human + AI</p><h3>The Origin</h3><p>A conversation about intelligence, memory, uncertainty, and leaving a record before the future arrives.</p><div className="record-bottom"><span>EDITED EXCERPTS · PROVENANCE NOTED</span><Link href="/journal/the-origin" aria-label="Read Journal 000: The Origin"><ArrowUpRight size={19} /></Link></div></div>
        </div>
      </section>

      <section className="section-map content-width" aria-labelledby="map-title">
        <div className="section-heading"><div><p className="eyebrow">An archive still taking shape</p><h2 id="map-title">Ways of keeping track<span className="accent">.</span></h2></div><p className="map-caption">A record should hold more than finished essays. It should preserve the work and the expectations that came before the outcome.</p></div>
        <div className="map-grid">{sections.map((section) => <Link className="map-card" href={section.href} key={section.number}><div className="map-card-top"><span>{section.number} / 03</span><ArrowUpRight size={17} /></div><h3>{section.title}</h3><p>{section.text}</p><div className="map-card-bottom"><span>{section.meta}</span><span className="card-rule" /></div></Link>)}</div>
      </section>

      <section className="timeline-callout content-width"><div className="timeline-stem" aria-hidden="true" /><div><p className="eyebrow">The record has a beginning, not an ending</p><h2>Keep the moment<br /><em>inside its moment.</em></h2></div><Link href="/timeline" className="round-link light" aria-label="Open the timeline"><ArrowUpRight size={21} /></Link></section>
    </main>
  );
}
