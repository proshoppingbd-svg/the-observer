'use client';

import { useState } from 'react';
import { Check, Copy, ImagePlus, Lightbulb, PenLine, Target } from 'lucide-react';

const types = ['Quick thought', 'Essay', 'Observation', 'Prediction'];

export default function Studio() {
  const [type, setType] = useState(types[0]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [copied, setCopied] = useState(false);
  const copyDraft = async () => { await navigator.clipboard?.writeText(`# ${title || 'Untitled'}\n\n${body}`); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return <main className="studio-page page-shell">
    <p className="eyebrow page-kicker">The Observer / Admin</p>
    <h1 className="page-title">Publishing Studio<span className="accent">.</span></h1>
    <p className="page-dek">A mobile-first place to record a thought or publish an observation without opening a laptop.</p>
    <section className="studio-card studio-dashboard">
      <div className="studio-dashboard-head"><div><p className="eyebrow">THE OBSERVER / ADMIN</p><h2>Publishing Studio</h2></div><span className="studio-user" aria-label="Author profile">♙</span></div>
      <div className="studio-actions"><button type="button" onClick={() => setType('Essay')}><PenLine/><span>New essay</span></button><button type="button" onClick={() => setType('Prediction')}><Target/><span>Prediction</span></button><button type="button" onClick={() => setType('Quick thought')}><Lightbulb/><span>Quick thought</span></button></div>
      <div className="studio-divider"/><p className="studio-preview-label">New publication · Editor preview</p>
      <div className="studio-form"><label>Content type<select className="input" value={type} onChange={(event) => setType(event.target.value)}>{types.map((item) => <option key={item}>{item}</option>)}</select></label><label>Title<input className="input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Give your entry a title"/></label><label>Body<textarea className="input" value={body} onChange={(event) => setBody(event.target.value)} placeholder="What are you thinking about?"/></label><div className="studio-buttons"><button className="button" type="button" onClick={copyDraft}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? 'Copied' : 'Copy draft'}</button><button className="button button-secondary" type="button"><ImagePlus size={17}/> Add image</button></div></div>
      <p className="studio-note">This is a working editor preview. Drafts are copied locally and are not published until authentication and server storage are connected.</p>
    </section>
    <p className="studio-explanation">The production dashboard will support autosaving, rich text and Markdown, image uploads, scheduled publication, revisions, and provenance for every edit.</p>
  </main>;
}
