<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Arquitetura', href: '#architecture' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

function updateScroll() {
  const doc = document.documentElement
  const scrollTop = doc.scrollTop || document.body.scrollTop
  const scrollHeight = doc.scrollHeight - doc.clientHeight
  scrollProgress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
  isScrolled.value = scrollTop > 50
}

function scrollTo(href) {
  mobileMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', updateScroll))
onUnmounted(() => window.removeEventListener('scroll', updateScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-card/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <!-- Scroll progress bar -->
    <div class="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-2 transition-all duration-100" :style="{ width: scrollProgress + '%' }" />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#hero" @click.prevent="scrollTo('#hero')" class="text-accent font-bold text-xl tracking-wider hover:opacity-80 transition-opacity">
          &lt;GF /&gt;
        </a>

        <!-- Desktop nav links -->
        <div class="hidden md:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="text-text-muted hover:text-text-main text-sm font-medium transition-colors duration-200 hover:text-accent"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            @click.prevent="scrollTo('#contact')"
            class="border border-accent text-accent px-4 py-1.5 rounded text-sm font-medium hover:bg-accent hover:text-primary transition-all duration-200"
          >
            Contratar
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-text-muted hover:text-text-main transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden bg-card/95 backdrop-blur-md border-t border-surface">
        <div class="px-4 py-4 flex flex-col gap-3">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="text-text-muted hover:text-accent text-sm font-medium transition-colors py-2 border-b border-surface/50"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            @click.prevent="scrollTo('#contact')"
            class="border border-accent text-accent px-4 py-2 rounded text-sm font-medium hover:bg-accent hover:text-primary transition-all text-center mt-1"
          >
            Contratar
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
