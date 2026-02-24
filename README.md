# Gustavo Ferrari — Portfolio

> **Full Stack Developer** · Vue 3 · Node.js · Django · AWS

**Live:** [gustavo-ferrari-dev.vercel.app](https://gustavo-ferrari-dev.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | Vue 3 (Composition API, `<script setup>`) |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Font | Inter via @fontsource |
| Deploy | Vercel (CI/CD via GitHub) |

Single Page Application — no router, no backend, no store. Pure static deploy.

---

## Project Structure

```
src/
├── App.vue                        # Root — assembles all sections
├── main.js                        # Entry point
├── style.css                      # Tailwind directives + global utilities
│
├── components/
│   ├── NavBar.vue                 # Fixed top, glassmorphism, scroll progress bar
│   ├── HeroSection.vue            # Animated terminal typewriter + floating particles
│   ├── AboutSection.vue           # Bio, photo, highlight cards
│   ├── TechStack.vue              # Skill badges grouped by category
│   ├── ArchitectureSection.vue    # System patterns + design patterns
│   ├── ExperienceTimeline.vue     # Vertical timeline, expandable cards
│   ├── ProjectsSection.vue        # Project cards with tech tags
│   ├── EducationSection.vue       # Degrees + complementary courses
│   ├── FreelanceSection.vue       # Availability CTA
│   ├── ContactSection.vue         # Contact links
│   └── FooterSection.vue
│
└── composables/
    └── useScrollAnimation.js      # Reusable IntersectionObserver for scroll animations
```

---

## Architecture

**Component-Based Architecture**
Every UI piece is an encapsulated Vue component with a single responsibility — from a badge to an entire section. State and behavior extracted to composables when reused.

**Scroll Animation Composable**
All sections share the same `useScrollAnimation` composable. It uses `IntersectionObserver` to toggle CSS classes (`scroll-hidden` → `scroll-visible`) when elements enter the viewport — no external library needed.

```js
// Usage in any component
const { observeElements } = useScrollAnimation()
onMounted(() => observeElements('.animate-target', sectionRef.value))
```

**Design System**
Custom tokens defined in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#0a0f1e` | Main background |
| `card` | `#0f172a` | Alternate sections |
| `surface` | `#1e293b` | Elevated cards |
| `accent` | `#00d4ff` | Cyan — highlights |
| `accent-2` | `#3b82f6` | Blue — gradients |
| `text-main` | `#e2e8f0` | Primary text |
| `text-muted` | `#64748b` | Secondary text |

---

## Design Patterns Applied

| Pattern | Where |
|---|---|
| **DTO (Data Transfer Object)** | Classes created per module to format data before API calls |
| **Observer / Reactivity** | Vue's `watch`, `computed`, `ref` — reactive state throughout |
| **Composable / Custom Hook** | `useScrollAnimation` — reusable stateful logic outside components |
| **Single Responsibility (SRP)** | Each component, composable and section does exactly one thing |
| **Event-Driven (Emits)** | Child→parent communication via Vue `emit` |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev        # http://localhost:5173

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Deploy

Deployed on **Vercel** with automatic CI/CD:
- Every `git push` to `master` triggers a new deploy
- Build command: `npm run build`
- Output directory: `dist`

---

## Contact

- **Email:** gpaferrari@hotmail.com
- **LinkedIn:** [linkedin.com/in/gustavo-ferrari-2648619a](https://www.linkedin.com/in/gustavo-ferrari-2648619a/)
- **GitHub:** [github.com/gpaferrari](https://github.com/gpaferrari)
- **WhatsApp:** [(14) 9 9147-8807](https://wa.me/5514991478807)

---

*Built with Vue 3 + Tailwind CSS — Gustavo Ferrari © 2026*
