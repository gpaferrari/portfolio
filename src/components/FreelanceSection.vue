<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref(null)
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.freelance-animate', sectionRef.value)
})

const modalities = [
  { icon: '🌐', text: 'Remoto (preferencial)' },
  { icon: '🏙️', text: 'Presencial em Bauru/SP' },
  { icon: '✈️', text: 'Disponível para viagens' },
  { icon: '📦', text: 'Aberto a mudança de cidade' },
]

const contractTypes = [
  { label: 'Freela', desc: 'Projetos pontuais e consultoria' },
  { label: 'CLT', desc: 'Vínculo empregatício formal' },
  { label: 'PJ', desc: 'Contrato como Pessoa Jurídica' },
]
</script>

<template>
  <section id="freelance" class="py-20 bg-primary relative overflow-hidden" ref="sectionRef">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-2/5" />
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div class="freelance-animate inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Open to Work — Disponível agora
      </div>

      <h2 class="freelance-animate text-3xl sm:text-5xl font-bold text-text-main mb-5 leading-tight">
        Disponível para
        <span class="text-gradient block sm:inline"> novos projetos</span>
      </h2>

      <p class="freelance-animate text-text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Estou aberto a oportunidades de freela, trabalho CLT ou contrato PJ. Se você tem um projeto que precisa de um desenvolvedor Full Stack experiente com Vue 3 e Node.js — vamos conversar.
      </p>

      <!-- Contract types -->
      <div class="freelance-animate flex flex-wrap justify-center gap-4 mb-10">
        <div
          v-for="ct in contractTypes"
          :key="ct.label"
          class="bg-card border border-surface rounded-xl px-6 py-4 min-w-[120px] hover:border-accent/30 transition-colors"
        >
          <div class="text-accent font-bold text-lg">{{ ct.label }}</div>
          <div class="text-text-muted text-xs mt-1">{{ ct.desc }}</div>
        </div>
      </div>

      <!-- Modalities -->
      <div class="freelance-animate flex flex-wrap justify-center gap-3 mb-12">
        <div
          v-for="m in modalities"
          :key="m.text"
          class="flex items-center gap-2 text-text-muted text-sm bg-surface/50 px-4 py-2 rounded-lg border border-surface/50"
        >
          <span>{{ m.icon }}</span>
          <span>{{ m.text }}</span>
        </div>
      </div>

      <!-- CTA buttons -->
      <div class="freelance-animate flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="mailto:gpaferrari@hotmail.com"
          class="bg-accent text-primary font-bold px-10 py-4 rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-xl shadow-accent/25 hover:shadow-accent/40 text-base glow-hover"
        >
          Entre em contato
        </a>
        <a
          href="https://www.linkedin.com/in/gustavo-ferrari-2648619a/"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-accent/40 text-text-muted hover:text-accent hover:border-accent px-10 py-4 rounded-xl transition-all duration-200 text-base"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
