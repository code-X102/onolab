# 언어랩 — Korean Language & Culture Institute

A responsive multilingual website prototype for a Korean-language teaching and applied-linguistics research institute.

## Preview

The site is a dependency-free static application. Run it with any local web server:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173`.

## Included

- Original editorial visual system for language and linguistics (no bioscience or laboratory imagery)
- 10 linked public sections: Home, Programs, Research, Courses, Videos, Materials, Quiz, Assignments, Culture, About
- 10 interface languages: English, Korean, Sinhala, Vietnamese, Nepali, Hindi, Chinese, Japanese, Spanish, German
- Course filters and search
- Caption/transcript video lesson experience
- Downloadable material samples
- Interactive five-question Korean quiz with scoring
- Assignment upload workflow (prototype stores file metadata only)
- Contact form interaction
- Responsive desktop/mobile navigation
- Accessible semantic structure, skip link, reduced-motion support, keyboard controls
- Admin dashboard with overview, CMS, learner submissions, research pipeline, and settings
- Browser-local persistence for language, demo login, submissions, and custom content

## Demo admin

1. Choose **Sign in**.
2. Select **Institute admin**.
3. Use the prefilled demo credentials.

The prototype accepts the demo form locally. It does not include secure production authentication.

## Production requirements

Before public launch, connect the interface to a secure backend and database. Add:

- Server-side authentication, encrypted sessions, role-based access control, password reset, and MFA for administrators
- Secure video hosting, subtitle tracks, transcripts, and progress analytics
- Object storage and malware scanning for assignment uploads
- Database-backed courses, students, grades, content, and translation versions
- Email delivery and consent/privacy workflows
- Native-speaker editorial review of all ten language versions
- Formal WCAG 2.2 accessibility and security testing
- Real institute contact details, legal pages, domain, analytics consent, and deployment configuration

## Files

- `index.html` — application shell and metadata
- `styles.css` — full responsive design system
- `app.js` — routing, localization, pages, interactions, quiz, assignment flow, and admin prototype
- `assets/language-bridge.jpg` — custom editorial hero image
