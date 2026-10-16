import Link from 'next/link';
export default function Header(){return <header className="shell"><div className="flex flex-wrap items-center justify-between gap-5 py-7 border-b" style={{borderColor:'var(--line)'}}><Link href="/" className="font-semibold tracking-[.16em] text-xl">THE OBSERVER<span style={{color:'var(--accent)'}}>.</span></Link><nav aria-label="Main navigation" className="sans flex gap-5 md:gap-9 text-[11px] tracking-widest uppercase"><Link href="/archive">Archive</Link><Link href="/observer">Author</Link><Link href="/studio">Studio</Link></nav></div></header>}

