-- Railway PostgreSQL schema for The Observer.
-- Separate from supabase/schema.sql because Railway does not provide Supabase auth.

create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  display_name text not null,
  bio text,
  created_at timestamptz not null default now()
);

create table if not exists journals (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references profiles(id) on delete set null,
  number integer unique not null,
  slug text unique not null,
  title text not null,
  excerpt text,
  content text not null default '',
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  original_created_at timestamptz,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists journal_revisions (
  id uuid primary key default gen_random_uuid(),
  journal_id uuid not null references journals(id) on delete cascade,
  editor_id uuid references profiles(id) on delete set null,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  journal_id uuid references journals(id) on delete set null,
  object_key text unique not null,
  content_type text,
  byte_size bigint,
  created_at timestamptz not null default now()
);

create index if not exists journals_status_published_at_idx on journals(status, published_at desc);
create index if not exists journal_revisions_journal_id_idx on journal_revisions(journal_id, created_at desc);
