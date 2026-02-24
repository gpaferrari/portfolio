<script setup>
import { ref, onMounted } from 'vue'

const lines = [
  { key: 'nome', value: '"Gustavo Ferrari"', color: 'text-accent' },
  { key: 'cargo', value: '"Full Stack Developer"', color: 'text-green-400' },
  { key: 'stack', value: '["Vue3", "Node.js", "AWS", "Django"]', color: 'text-yellow-400' },
  { key: 'disponivel', value: 'true', color: 'text-accent' },
]

const displayedLines = ref([])
const currentLineIndex = ref(0)
const currentText = ref('')
const showCursor = ref(true)
const typingDone = ref(false)

async function typeText(text, delay = 40) {
  for (let i = 0; i <= text.length; i++) {
    currentText.value = text.slice(0, i)
    await new Promise((r) => setTimeout(r, delay))
  }
}

async function startTypewriter() {
  await new Promise((r) => setTimeout(r, 800))

  for (let i = 0; i < lines.length; i++) {
    currentLineIndex.value = i
    const line = lines[i]
    const fullText = `> ${line.key}: ${line.value}`
    await typeText(fullText, 35)
    displayedLines.value.push({ ...line, text: currentText.value })
    currentText.value = ''
    await new Promise((r) => setTimeout(r, 200))
  }
  typingDone.value = true
}

onMounted(() => {
  startTypewriter()
})

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

// Floating particles
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 4,
}))
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-16">
    <!-- Animated grid background -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(0,212,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.15) 1px, transparent 1px); background-size: 50px 50px;" />
    </div>

    <!-- Gradient blobs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/5 rounded-full blur-3xl" />

    <!-- Floating particles -->
    <div v-for="p in particles" :key="p.id"
      class="absolute rounded-full bg-accent/30"
      :style="{
        left: p.x + '%',
        top: p.y + '%',
        width: p.size + 'px',
        height: p.size + 'px',
        animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
      }"
    />

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Terminal window -->
      <div class="mb-10 mx-auto max-w-2xl text-left">
        <div class="bg-card border border-surface rounded-xl overflow-hidden shadow-2xl shadow-black/50">
          <!-- Terminal header -->
          <div class="flex items-center gap-2 px-4 py-3 bg-surface/60 border-b border-surface">
            <div class="w-3 h-3 rounded-full bg-red-500/80" />
            <div class="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div class="w-3 h-3 rounded-full bg-green-500/80" />
            <span class="ml-2 text-text-muted text-xs font-mono">~/portfolio/gustavo-ferrari</span>
          </div>

          <!-- Terminal body -->
          <div class="p-5 font-mono text-sm min-h-[160px]">
            <!-- Completed lines -->
            <div
              v-for="(line, i) in displayedLines"
              :key="i"
              class="mb-1 leading-relaxed"
            >
              <span class="text-text-muted">{{ '> ' }}</span>
              <span class="text-text-muted">{{ line.key }}: </span>
              <span :class="line.color">{{ line.value }}</span>
            </div>

            <!-- Currently typing line -->
            <div v-if="!typingDone && currentText" class="mb-1 leading-relaxed">
              <span class="text-text-main">{{ currentText }}</span>
              <span class="inline-block w-2 h-4 bg-accent ml-0.5 align-middle animate-blink" />
            </div>

            <!-- Idle cursor after done -->
            <div v-if="typingDone" class="mt-2 leading-relaxed">
              <span class="text-text-muted">$ </span>
              <span class="inline-block w-2 h-4 bg-accent ml-0.5 align-middle animate-blink" />
            </div>
          </div>
        </div>
      </div>

      <!-- Headline -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main mb-4 leading-tight">
        Gustavo <span class="text-gradient">Ferrari</span>
      </h1>
      <p class="text-lg sm:text-xl text-text-muted mb-3 font-medium">
        Full Stack Developer · Vue 3 · Node.js · AWS
      </p>
      <p class="text-base sm:text-lg text-text-muted/80 mb-10 max-w-xl mx-auto leading-relaxed italic">
        "Do esporte à tecnologia — adaptabilidade é minha maior stack."
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#projects"
          @click.prevent="scrollTo('#projects')"
          class="bg-accent text-primary font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/40 text-sm sm:text-base"
        >
          Ver projetos
        </a>
        <a
          href="/CV Gustavo Ferrari.pdf"
          download
          class="border border-text-muted/40 text-text-muted hover:text-text-main hover:border-accent px-8 py-3 rounded-lg transition-all duration-200 text-sm sm:text-base"
        >
          Baixar CV
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-16 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span class="text-text-muted text-xs">scroll</span>
        <svg class="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  from { transform: translateY(0px) translateX(0px); opacity: 0.3; }
  to { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
}
</style>
