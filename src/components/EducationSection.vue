<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref(null)
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.edu-animate', sectionRef.value)
})

const degrees = [
  {
    icon: '📊',
    title: 'MBA em Data Science & Analytics',
    institution: 'USP / ESALQ',
    period: '2025 – em andamento',
    status: 'in-progress',
    highlight: true,
    description: 'Especialização em análise de dados, machine learning, visualização e tomada de decisão baseada em dados.',
  },
  {
    icon: '🖥️',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'ITE Bauru',
    period: '2022 – 2024',
    status: 'completed',
    highlight: false,
    description: 'Formação técnica em desenvolvimento de software, algoritmos, banco de dados e engenharia de software.',
  },
  {
    icon: '⚡',
    title: 'Técnico em Desenvolvimento de Sistemas Full Stack',
    institution: 'SENAI',
    period: '2020 – 2022',
    status: 'completed',
    highlight: false,
    description: 'Curso técnico com foco prático em desenvolvimento web full stack, incluindo front e backend.',
  },
  {
    icon: '🏃',
    title: 'Licenciatura em Educação Física',
    institution: 'UNESP Bauru',
    period: '2012 – 2018',
    status: 'completed',
    highlight: false,
    description: 'Formação superior que desenvolveu disciplina, liderança e capacidade de aprendizado contínuo — base para a transição de carreira.',
  },
]

const courses = [
  { name: 'AWS Cloud Practitioner', icon: '☁️' },
  { name: 'Power BI – Análise de Dados', icon: '📈' },
  { name: 'Inglês – Wizard (W6)', icon: '🇺🇸' },
  { name: 'Python para Data Science', icon: '🐍' },
  { name: 'Vue.js 3 Avançado', icon: '💚' },
]
</script>

<template>
  <section id="education" class="py-20 bg-card" ref="sectionRef">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="edu-animate text-center mb-16">
        <span class="text-accent text-sm font-mono font-medium tracking-widest uppercase">// 06</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text-main mt-2">Formação</h2>
      </div>

      <!-- Degrees grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        <div
          v-for="deg in degrees"
          :key="deg.title"
          class="edu-animate bg-surface rounded-xl p-5 border transition-all duration-300 card-hover"
          :class="deg.highlight ? 'border-accent/30 shadow-lg shadow-accent/5' : 'border-surface/50 hover:border-accent/20'"
        >
          <div class="flex items-start gap-4">
            <span class="text-3xl mt-0.5">{{ deg.icon }}</span>
            <div class="flex-1">
              <div class="flex items-start justify-between gap-2 mb-1">
                <h3 class="text-text-main font-semibold text-sm sm:text-base leading-snug">{{ deg.title }}</h3>
                <span
                  class="text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-medium"
                  :class="deg.status === 'in-progress'
                    ? 'bg-accent/10 text-accent border border-accent/30'
                    : 'bg-surface text-text-muted border border-surface/80'"
                >
                  {{ deg.status === 'in-progress' ? 'Em andamento' : 'Concluído' }}
                </span>
              </div>
              <p class="text-accent text-sm font-medium">{{ deg.institution }}</p>
              <p class="text-text-muted text-xs font-mono mt-0.5">{{ deg.period }}</p>
              <p class="text-text-muted text-sm mt-2 leading-relaxed">{{ deg.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Complementary courses -->
      <div class="edu-animate">
        <h3 class="text-text-main font-semibold mb-5 text-center">Cursos complementares</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="course in courses"
            :key="course.name"
            class="flex items-center gap-2 bg-surface px-4 py-2.5 rounded-lg border border-surface/50 hover:border-accent/30 transition-colors text-sm text-text-muted hover:text-text-main"
          >
            <span>{{ course.icon }}</span>
            <span>{{ course.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
