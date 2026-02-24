<script setup>
const year = new Date().getFullYear()

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-primary border-t border-surface/50 py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo -->
        <a
          href="#hero"
          @click.prevent="scrollTo('#hero')"
          class="text-accent font-bold text-xl tracking-wider hover:opacity-80 transition-opacity"
        >
          &lt;GF /&gt;
        </a>

        <!-- Quick links -->
        <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="text-text-muted hover:text-accent text-sm transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Social icons -->
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/gpaferrari"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-ferrari-2648619a/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:gpaferrari@hotmail.com"
            class="text-text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Bottom line -->
      <div class="mt-8 pt-6 border-t border-surface/30 text-center">
        <p class="text-text-muted text-xs">
          Desenvolvido por <span class="text-accent">Gustavo Ferrari</span> com Vue 3 + Tailwind CSS · {{ year }}
        </p>
      </div>
    </div>
  </footer>
</template>
