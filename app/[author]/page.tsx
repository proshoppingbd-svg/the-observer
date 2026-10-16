import {notFound} from 'next/navigation';
export const metadata={title:'Observer'};
export const dynamicParams=false;
export function generateStaticParams(){return [{author:'observer'}]}
import Link from 'next/link';
export default async function Author({params}:{params:Promise<{author:string}>}){const {author}=await params;if(author!=='observer')notFound();return <main className="shell pt-24 min-h-[65vh]"><p className="eyebrow">Contributor profile</p><h1 className="text-6xl md:text-8xl tracking-tight mt-7">{author.replaceAll('-',' ')}</h1><p className="text-2xl max-w-xl mt-10 leading-relaxed">A record of thoughts, work, predictions and questions—preserved as they were understood at the time.</p><Link href="/archive" className="button mt-12">Browse journals</Link></main>}

