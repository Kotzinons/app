# Development Plan — Kotzinons Showcase/Portfolio Website

## Objectives
- Launch a playful, colorful showcase site for **Kotzinons** featuring: Home/Hero, Gallery, Characters, Animations (YouTube embed), About/Story, Team, Contact + Newsletter.
- Provide a clean content model + APIs (FastAPI + MongoDB) so content can be updated easily.
- Deliver a responsive, fast, kid-friendly UI (React + Tailwind + shadcn/ui) using provided logo/artwork.

---

## Implementation Steps

### Phase 1 — POC (SKIPPED)
- No complex external integrations (payments/OAuth/LLM/uploads). Build directly.

### Phase 2 — V1 App Development (MVP)
**Backend (FastAPI + Motor/MongoDB)**
1. Define models/schemas:
   - `Character`, `TeamMember`, `GalleryItem`, `Video`, `ContactMessage`, `NewsletterSubscriber`.
2. Seed DB on startup (idempotent) with:
   - 4 team members (Uri, Daniel, Tolu, Joy)
   - initial characters (from provided art)
   - gallery items (poster, prototype toy photo, character images)
   - videos (YouTube short link)
3. Implement endpoints:
   - `GET /api/characters`, `GET /api/characters/{id}`
   - `GET /api/team`
   - `GET /api/gallery` (supports `?category=`)
   - `GET /api/videos`
   - `POST /api/contact`
   - `POST /api/newsletter`
   - `GET /api/stats`
4. Basic validation + error handling (400/422), CORS config for frontend.

**Frontend (React + Tailwind + shadcn/ui)**
1. App shell:
   - Sticky nav (Home, Characters, Gallery, Animations, About, Team, Contact)
   - Footer with logo + quick links.
2. Pages:
   - **Home**: hero (logo + tagline), featured characters, featured YouTube embed, quick CTAs.
   - **Characters**: grid of character cards; detail modal/page.
   - **Gallery**: category filters + masonry/grid + lightbox.
   - **Animations**: embedded YouTube short + section for future videos.
   - **About/Story**: origin story + mission.
   - **Team**: 4 cards with roles + bios.
   - **Contact**: contact form + newsletter signup.
3. Design system (kids-cartoon): bold palette (red/blue/gold/green + black), comic accents (halftone/bg shapes), playful heading font.
4. Data wiring:
   - API client, loading/empty/error states for every page.

**Phase 2 User Stories (V1)**
1. As a visitor, I can understand Kotzinons immediately from the Home hero (logo + short intro + CTA).
2. As a fan, I can browse all characters in a grid and open a character detail view.
3. As a visitor, I can browse a gallery with filters and open images in a larger view.
4. As a viewer, I can watch the featured Kotzinons YouTube short directly on the site.
5. As a potential partner, I can view the Team page and understand each member’s role.
6. As an interested visitor, I can submit the Contact form and receive a clear success/failure message.

**Phase 2 Testing (1 round)**
- Run `testing_agent_v3` end-to-end:
  - navigation works, pages render
  - API data loads correctly
  - contact/newsletter submissions succeed and persist in DB
  - mobile responsiveness sanity check

---

### Phase 3 — Add More Features (Production-friendly)
1. Content improvements:
   - Add more gallery metadata (title, description, category, sort order)
   - Add character “color theme” fields to drive UI styling.
2. UX polish:
   - Image optimization (proper sizing), better lightbox, skeleton loaders.
   - SEO basics: metadata per page, OpenGraph image.
3. Admin-lite (optional, no auth): hidden route protected by simple env key to view contact/newsletter lists.

**Phase 3 User Stories**
1. As a visitor, I can filter gallery by category and see a consistent ordering.
2. As a fan, I see character pages themed by their signature color.
3. As a visitor, I experience fast-loading pages with clear loading states.
4. As the owner, I can review contact messages in a simple admin-lite view.
5. As a visitor, I can share the site link and see a nice preview card on social apps.

**Phase 3 Testing (1 round)**
- `testing_agent_v3` again for filters, theming, admin-lite route, regression checks.

---

### Phase 4 — Future Enhancements (only if requested)
- Real admin dashboard with authentication.
- Multi-language (English/Hebrew).
- Full episode library + playlists.
- E-commerce for toys/merch.

---

## Next Actions
1. Confirm the **site tagline** + 1–2 sentence “Kotzinons intro” for the Home hero.
2. Provide **names (and optional short descriptions)** for each character in the images.
3. Confirm a **contact email** (for display; form will store in DB unless email sending is later added).
4. Approve page list for V1: Home, Characters, Gallery, Animations, About, Team, Contact.

---

## Success Criteria
- All pages load and look consistent with a playful, colorful cartoon brand.
- Characters/team/gallery/videos are served from backend and render correctly on frontend.
- YouTube short is embedded and playable.
- Contact + newsletter forms validate input and store submissions in MongoDB.
- `testing_agent_v3` passes an end-to-end run with no broken navigation or failing core flows.
