# Onolab Academy — Korean writing LMS

A Vercel-ready Next.js foundation for a writing-first Korean learning platform for Sri Lankan school-age and adult learners. Includes a responsive student workspace, teacher overview, stylus-friendly Hangul canvas, ruled notebook, a Hangul-to-TOPIK 3 curriculum map, TOPIK 1/2/3 model-paper entry points, Gemini feedback API, Supabase schema with role-aware row-level security, and a vocabulary-app connection placeholder.

## Run locally

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env.local` (the app runs in demo mode without credentials).
3. Run `npm install` then `npm run dev` and open `http://localhost:3000`.
4. Use the Student/Teacher switch in the top bar to preview both workspaces. The profile name can be changed from its small settings button.

## Connect student accounts and storage

1. Create a Supabase project and run [`supabase/schema.sql`](supabase/schema.sql) in its SQL Editor.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local` and Vercel Project Settings.
3. Enable an authentication method in Supabase. Configure a student sign-up flow to provide `display_name`; the database creates a student profile and ONA student code automatically.
4. Promote staff by changing their `profiles.role` to `teacher` or `admin` from the Supabase dashboard. Do not let users choose their own staff role.

The current interface is a product preview. Supabase schema and RLS are included, while wiring login, class roster CRUD, durable writing uploads, lesson authoring and actual exam scoring are the next integration layer. Do not store handwriting images in a database text field for production; use private object storage with signed URLs and retention rules.

## Enable Gemini writing feedback

Set `GEMINI_API_KEY` as a server-only Vercel environment variable. Optionally set `GEMINI_MODEL`. The `/api/feedback` endpoint accepts a typed sentence or a base64 PNG handwriting sample and returns simple English feedback. Without a key it returns demo feedback. Never expose the key through a `NEXT_PUBLIC_` variable. The current canvas is ready for touch and stylus; connect its exported image to this route to analyze handwriting.

## Deploy to Vercel

Push this folder to GitLab, import the repository in Vercel, select Next.js, set the environment variables above, and deploy. The `npm run build` command is used automatically. Keep `.env.local` out of Git; `.gitignore` already excludes environment files.

## Connect 어휘망

The dashboard contains the integration entry point and `word_links` table. Add the vocabulary app's documented OAuth/deep-link URL and callback contract when available. The shared reference was not accessible in this environment, so no undocumented API is assumed.

## Learning content

The curriculum map is a starter outline, not a complete licensed TOPIK question bank. Add teacher-authored lessons and original mock-paper questions before using this with a class. Do not copy official exam questions without permission.
