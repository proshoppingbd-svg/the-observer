# The Observer

A minimal editorial archive built with Next.js, TypeScript, Tailwind CSS, with a Supabase-ready data model.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Included

- `/` — publication landing page
- `/archive` — chronological archive
- `/journal/the-origin` — Journal 000 (clearly labeled edited excerpts)
- `/observer` — placeholder author route; replace slug and display name before launch
- `/studio` — local-only Markdown draft export (not authenticated, not connected to DB, not a real publisher)
- `supabase/schema.sql` — initial schema and row-level security policies

## Before enabling database publishing

1. Configure Supabase project and auth, and connect server-side journal reads/writes.
2. Protect `/studio` and publishing mutations with authenticated sessions and author authorization.
3. Integrate Tiptap rich text editing and immutable revision capture.
4. Import a **complete, verified** raw conversation transcript separately; current Journal 000 contains only selected excerpts and must not be represented as the original full transcript.
5. Configure domain, author identity, analytics/privacy policy, and deployment to Vercel.

The public archive can run on Vercel without environment variables. Database publishing, authentication, and Tiptap integration remain future work. Deployment has not yet been verified.

## Vercel deployment

Import this repository into Vercel, select the Next.js preset, and use Node.js 22.x or 24.x. The project root is the repository root. Build with `npm run build`; the default Next.js output settings apply. No Supabase credentials are required for the current file-backed archive. Do not add service-role secrets to public environment variables.

## Provenance

`lib/journals.ts` preserves the starter's Journal 000 excerpt text unchanged. These edited excerpts are not the complete original conversation and have not been independently checked against that source. A future verified raw transcript must be stored separately, with its own provenance, rather than replacing or relabeling this edition.

## Validation

Run `npm ci`, `npm run lint`, and `npm run build`. Check `/`, `/archive`, `/journal/the-origin`, `/observer`, and `/studio`. Unknown author and journal URLs must return 404. Studio exports a local Markdown file; it has no publishing endpoint and stores no drafts on the server.
