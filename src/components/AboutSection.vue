<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref(null)
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.about-animate', sectionRef.value)
})

const highlights = [
  {
    icon: '💻',
    title: '3+ Anos',
    desc: 'Desenvolvendo software em produção',
  },
  {
    icon: '🎓',
    title: 'MBA em andamento',
    desc: 'Data Science & Analytics — USP/ESALQ',
  },
  {
    icon: '🟢',
    title: 'Open to Work',
    desc: 'Disponível para freela, CLT e PJ',
  },
]
</script>

<template>
  <section id="about" class="py-20 bg-card" ref="sectionRef">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="about-animate text-center mb-16">
        <span class="text-accent text-sm font-mono font-medium tracking-widest uppercase">// 01</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text-main mt-2">Sobre mim</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Photo + highlights -->
        <div class="about-animate flex flex-col items-center gap-8">
          <div class="relative">
            <img
              src="../assets/foto.jpg"
              alt="Gustavo Ferrari"
              class="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover object-top border-2 border-accent/30 shadow-xl shadow-black/30"
            />
            <!-- Decorative ring -->
            <div class="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 animate-pulse-glow" />
          </div>

          <!-- Highlight cards -->
          <div class="grid grid-cols-3 gap-3 w-full">
            <div
              v-for="h in highlights"
              :key="h.title"
              class="bg-surface rounded-xl p-3 text-center border border-surface/50 hover:border-accent/30 transition-colors card-hover"
            >
              <div class="text-2xl mb-1">{{ h.icon }}</div>
              <div class="text-accent font-semibold text-sm">{{ h.title }}</div>
              <div class="text-text-muted text-xs mt-1 leading-snug">{{ h.desc }}</div>
            </div>
          </div>
        </div>

        <!-- Bio text -->
        <div class="about-animate space-y-5">
          <p class="text-text-main text-lg leading-relaxed">
            Sou um desenvolvedor Full Stack com <span class="text-accent font-medium">3 anos de experiência</span> construindo aplicações robustas com Vue.js, Node.js e AWS, além de sólido conhecimento em Django e bancos de dados relacionais e NoSQL.
          </p>
          <p class="text-text-muted leading-relaxed">
            Minha trajetória é incomum: comecei na <span class="text-text-main">Educação Física (UNESP)</span>, passei pela gestão comercial e cheguei à tecnologia por curiosidade e paixão por resolver problemas. Hoje, curso um <span class="text-text-main">MBA em Data Science & Analytics pela USP/ESALQ</span>, integrando visão analítica ao desenvolvimento de software.
          </p>
          <p class="text-text-muted leading-relaxed">
            Esse caminho me tornou um profissional adaptável, com habilidade de comunicar entre áreas técnicas e de negócio. Acredito que as melhores soluções nascem da intersecção entre código limpo, dados bem interpretados e empatia com o usuário.
          </p>

          <!-- Journey highlight -->
          <div class="border-l-2 border-accent/40 pl-4 mt-6">
            <p class="text-text-muted text-sm italic leading-relaxed">
              "Ed. Física → Gestão Comercial → Dev Full Stack → MBA Data Science.
              <span class="text-accent"> Cada etapa foi um upgrade.</span>"
            </p>
          </div>

          <!-- Location/availability -->
          <div class="flex flex-wrap gap-3 mt-6">
            <span class="bg-surface text-text-muted text-xs px-3 py-1.5 rounded-full border border-surface/80 flex items-center gap-1.5">
              📍 Bauru, SP
            </span>
            <span class="bg-surface text-text-muted text-xs px-3 py-1.5 rounded-full border border-surface/80 flex items-center gap-1.5">
              🌐 Remoto ou Presencial
            </span>
            <span class="bg-accent/10 text-accent text-xs px-3 py-1.5 rounded-full border border-accent/30 flex items-center gap-1.5 font-medium">
              ✅ Disponível agora
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
