-- Supabase Lead Capture Schema
-- Run this in your Supabase SQL Editor

create table leads (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text not null,
  phone text,
  company text,
  message text,
  source text,
  metadata jsonb,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table leads enable row level security;

-- Allow public inserts from the website
create policy "allow public inserts"
  on leads for insert
  with check (true);

-- Prevent duplicate leads by email (Optional but recommended)
-- alter table leads add constraint leads_email_key unique (email);
