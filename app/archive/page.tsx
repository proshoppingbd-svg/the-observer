import Link from 'next/link';import {journals} from '../../lib/journals';import {ArrowUpRight} from 'lucide-react';
export const metadata={title:'Archive'};
export default function Archive(){return <main className="shell pt-20 min-h-[65vh]"><p className="eyebrow">Chronological record</p><h1 className="text-7xl md:text-9xl tracking-tight mt-5 mb-16">Archive<span style={{color:'var(--accent)'}}>.</span></h1>{journals.map(j=><Link href={`/journal/${j.slug}`} key={j.slug} className="rule py-9 grid grid-cols-[65px_1fr_22px] gap-5 items-center"><span className="eyebrow">{j.number}</span><div><h2 className="text-3xl md:text-5xl">{j.title}</h2><p className="sans text-xs mt-3" style={{color:'var(--muted)'}}>{j.date} · {j.kind}</p></div><ArrowUpRight size={20}/></Link>)}</main>}

