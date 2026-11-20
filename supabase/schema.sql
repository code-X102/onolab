-- Onolab Academy starter schema. Run in Supabase SQL Editor.
create extension if not exists pgcrypto;
create type public.account_role as enum ('student','teacher','admin');
create table public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 student_code text unique,
 display_name text not null default 'Learner',
 role public.account_role not null default 'student',
 preferred_language text not null default 'en',
 created_at timestamptz not null default now()
);
create table public.lessons (
 id uuid primary key default gen_random_uuid(), level smallint not null check(level between 0 and 3),
 title text not null, title_ko text, sort_order integer not null, content jsonb not null default '{}', published boolean not null default false,
 created_at timestamptz not null default now()
);
create table public.lesson_progress (
 id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id) on delete cascade,
 lesson_id uuid not null references public.lessons(id) on delete cascade, status text not null default 'started' check(status in ('started','complete')),
 score numeric, updated_at timestamptz not null default now(), unique(student_id,lesson_id)
);
create table public.writing_submissions (
 id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id) on delete cascade,
 lesson_id uuid references public.lessons(id) on delete set null, prompt text, text_content text, handwriting_image text,
 ai_feedback text, score numeric, teacher_feedback text, reviewed_by uuid references public.profiles(id),
 created_at timestamptz not null default now()
);
create table public.notebook_pages (
 id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id) on delete cascade,
 title text not null default 'Untitled page', strokes jsonb not null default '[]', updated_at timestamptz not null default now()
);
create table public.model_attempts (
 id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id) on delete cascade,
 level smallint not null check(level between 1 and 3), answers jsonb not null default '{}', score numeric, started_at timestamptz not null default now(), completed_at timestamptz
);
create table public.word_links (
 id uuid primary key default gen_random_uuid(), student_id uuid not null references public.profiles(id) on delete cascade,
 provider text not null default 'eohwimang', external_user_id text, connected_at timestamptz not null default now(), unique(student_id,provider)
);
create or replace function public.new_student_code() returns text language sql volatile as $$
 select 'ONA-' || to_char(now(),'YY') || lpad((floor(random()*99999))::int::text,5,'0');
$$;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = '' as $$
begin
 insert into public.profiles(id,student_code,display_name,role)
 values(new.id, public.new_student_code(), coalesce(new.raw_user_meta_data->>'display_name','Learner'), 'student');
 return new;
end;
$$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.lessons enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.writing_submissions enable row level security;
alter table public.notebook_pages enable row level security;
alter table public.model_attempts enable row level security;
alter table public.word_links enable row level security;
create or replace function public.is_teacher() returns boolean language sql stable security definer set search_path = '' as $$
 select exists(select 1 from public.profiles where id=auth.uid() and role in ('teacher','admin'));
$$;
create policy "profiles read own or teachers" on public.profiles for select using (id=auth.uid() or public.is_teacher());
create policy "profile update own" on public.profiles for update using (id=auth.uid()) with check (id=auth.uid());
create policy "published lessons readable" on public.lessons for select using (published or public.is_teacher());
create policy "teachers manage lessons" on public.lessons for all using (public.is_teacher()) with check (public.is_teacher());
create policy "progress read own or teachers" on public.lesson_progress for select using (student_id=auth.uid() or public.is_teacher());
create policy "students manage own progress" on public.lesson_progress for all using (student_id=auth.uid()) with check (student_id=auth.uid());
create policy "writing read own or teachers" on public.writing_submissions for select using (student_id=auth.uid() or public.is_teacher());
create policy "students submit own writing" on public.writing_submissions for insert with check (student_id=auth.uid());
create policy "teachers review writing" on public.writing_submissions for update using (public.is_teacher()) with check (public.is_teacher());
create policy "notebook own" on public.notebook_pages for all using (student_id=auth.uid()) with check (student_id=auth.uid());
create policy "attempts own or teachers" on public.model_attempts for select using (student_id=auth.uid() or public.is_teacher());
create policy "attempts insert own" on public.model_attempts for insert with check (student_id=auth.uid());
create policy "attempts update own" on public.model_attempts for update using (student_id=auth.uid()) with check (student_id=auth.uid());
create policy "word links own" on public.word_links for all using (student_id=auth.uid()) with check (student_id=auth.uid());
-- Keep account role and student code write-protected from normal users.
revoke update on public.profiles from authenticated;
grant update(display_name, preferred_language) on public.profiles to authenticated;
