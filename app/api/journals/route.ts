import { Pool } from 'pg';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
let pool: Pool | undefined;
function getPool() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
  pool ??= new Pool({ connectionString: process.env.DATABASE_URL, max: 3, ssl: { rejectUnauthorized: false } });
  return pool;
}
export async function GET() {
  try {
    const result = await getPool().query("select number, slug, title, excerpt, content, original_created_at, published_at from journals where status = 'published' order by number asc");
    return NextResponse.json({ journals: result.rows });
  } catch (error) {
    console.error('Journal read failed', error);
    return NextResponse.json({ journals: [], error: 'Journal records are unavailable.' }, { status: 503 });
  }
}
export async function POST(request: Request) {
  try {
    const payload = await request.json() as { date?: string; title?: string; body?: string };
    const date = payload.date?.trim();
    const title = payload.title?.trim();
    const body = payload.body?.trim();
    if (!date || !title || !body) return NextResponse.json({ error: 'Date, title, and entry are required.' }, { status: 400 });
    const result = await getPool().query(`with next_number as (select coalesce(max(number), 0) + 1 as number from journals) insert into journals (number, slug, title, excerpt, content, status, original_created_at, published_at) select next_number.number, 'journal-' || next_number.number, $1, left($2, 220), $2, 'published', $3::date, now() from next_number returning number, slug, title, published_at`, [title, body, date]);
    return NextResponse.json({ journal: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error('Journal publish failed', error);
    return NextResponse.json({ error: 'Publishing is not connected yet.' }, { status: 503 });
  }
}
