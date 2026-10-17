'use client';

import { useEffect, useState } from 'react';
import { Download, KeyRound, Save, Send } from 'lucide-react';

const today = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

export default function DailyJournal() {
  const [date, setDate] = useState(today);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [publishKey, setPublishKey] = useState('');
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [publishError, setPublishError] = useState('');

  useEffect(() => {
    const draft = window.localStorage.getItem(`observer-daily-${today}`);
    if (draft) { const parsed = JSON.parse(draft) as { title?: string; body?: string }; setTitle(parsed.title ?? ''); setBody(parsed.body ?? ''); }
    setPublishKey(window.localStorage.getItem('observer-publish-key') ?? '');
  }, []);

  const save = () => { window.localStorage.setItem(`observer-daily-${date}`, JSON.stringify({ title, body })); setSaved(true); window.setTimeout(() => setSaved(false), 1800); };
  const download = () => { const blob = new Blob([`# ${title || 'Daily journal'}\n\n${date}\n\n${body}`], { type: 'text/markdown' }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = `observer-${date}.md`; anchor.click(); URL.revokeObjectURL(url); };
  const publish = async () => { setPublishing(true); setPublishError(''); try { const response = await fetch('/api/journals', { method: 'POST', headers: { 'content-type': 'application/json', 'x-publish-key': publishKey }, body: JSON.stringify({ date, title, body }) }); const result = await response.json() as { journal?: { number?: number }; error?: string }; if (!response.ok) throw new Error(result.error || 'Could not publish this entry.'); window.localStorage.setItem('observer-publish-key', publishKey); setPublished(true); setSaved(false); window.localStorage.removeItem(`observer-daily-${date}`); window.setTimeout(() => setPublished(false), 2600); } catch (error) { setPublishError(error instanceof Error ? error.message : 'Could not publish this entry.'); } finally { setPublishing(false); } };

  return <main className="daily-page page-shell">
    <p className="eyebrow page-kicker">The Observer / Daily journal</p>
    <h1 className="page-title">What is true today<span className="accent">?</span></h1>
    <p className="page-dek">A private first draft for the record. Write from inside the moment, before you know how it ends.</p>
    <section className="daily-card panel">
      <div className="daily-card-head"><div><p className="eyebrow">Journal 001 · Daily record</p><h2>{date}</h2></div><span className="daily-status">{saved ? 'Saved on this device' : 'Draft'}</span></div>
      <label className="daily-label">Date<input className="input" type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label>
      <label className="daily-label">Title<input className="input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Give today a name" /></label>
      <label className="daily-label">Your entry<textarea className={`input daily-textarea ${expanded ? 'is-expanded' : ''}`} rows={20} value={body} onChange={(event) => setBody(event.target.value)} placeholder="What happened? What did you notice? What do you believe now?" /><button className="editor-expand" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse editor' : 'Expand editor'}</button></label>
      <label className="daily-label">Publisher key<input className="input" type="password" value={publishKey} onChange={(event) => setPublishKey(event.target.value)} placeholder="Private key required to publish" /></label>
      <div className="daily-actions"><button className="button" type="button" onClick={save}><Save size={16} /> {saved ? 'Saved' : 'Save draft'}</button><button className="button" type="button" onClick={publish} disabled={publishing || published}><KeyRound size={16} /> {published ? 'Published' : publishing ? 'Publishing…' : 'Publish journal'}</button><button className="button button-secondary" type="button" onClick={download}><Download size={16} /> Export Markdown</button></div>
      {publishError && <p className="daily-error" role="alert">{publishError}</p>}
      <p className="daily-note">Reading is public. Publishing requires your private publisher key.</p>
    </section>
  </main>;
}
