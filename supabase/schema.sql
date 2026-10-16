-- Run in Supabase SQL editor after creating your project.
create table if not exists public.profiles (id uuid primary key references auth.users(id) on delete cascade, slug text unique not null, display_name text not null, bio text, created_at timestamptz not null default now());
create table if not exists public.journals (id uuid primary key default gen_random_uuid(), author_id uuid not null references public.profiles(id), slug text not null, title text not null, excerpt text, content jsonb not null default '{}'::jsonb, status text not null default 'draft' check(status in ('draft','published','archived')), original_created_at timestamptz, published_at timestamptz, created_at timestamptz not null default now(), updated_at timestamptz not null default now(), unique(author_id,slug));
create table if not exists public.journal_revisions (id uuid primary key default gen_random_uuid(), journal_id uuid not null references public.journals(id) on delete cascade, editor_id uuid not null references auth.users(id), content jsonb not null, created_at timestamptz not null default now());
alter table public.profiles enable row level security;alter table public.journals enable row level security;alter table public.journal_revisions enable row level security;
create policy "Public profiles" on public.profiles for select using(true);
create policy "Owner manages profile" on public.profiles for all to authenticated using(id=auth.uid()) with check(id=auth.uid());
create policy "Read published or owned journals" on public.journals for select using(status='published' or author_id=auth.uid());
create policy "Authors create journals" on public.journals for insert to authenticated with check(author_id=auth.uid());
create policy "Authors update journals" on public.journals for update to authenticated using(author_id=auth.uid()) with check(author_id=auth.uid());
create policy "Authors delete journals" on public.journals for delete to authenticated using(author_id=auth.uid());
create policy "Authors read revisions" on public.journal_revisions for select to authenticated using(exists(select 1 from public.journals j where j.id=journal_id and j.author_id=auth.uid()));
create policy "Authors insert revisions" on public.journal_revisions for insert to authenticated with check(editor_id=auth.uid() and exists(select 1 from public.journals j where j.id=journal_id and j.author_id=auth.uid()));
