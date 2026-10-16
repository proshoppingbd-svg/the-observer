import Link from 'next/link';

export default function NotFound() {
  return <main className="shell py-24 min-h-[60vh]">
    <p className="eyebrow">404 · Record not found</p>
    <h1 className="text-5xl mt-6">This page is not in the archive.</h1>
    <Link className="button mt-10" href="/archive">Browse the archive</Link>
  </main>;
}
