import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-rule">
        <span className="footer-note">The Observer · Written in the present</span>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/observer">Author</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/journal/the-origin">Journal 000</Link>
        </nav>
        <span className="footer-note">Left for the future.</span>
      </div>
    </footer>
  );
}
