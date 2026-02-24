<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref(null)
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.tech-animate', sectionRef.value)
})

const categories = [
  {
    label: 'Frontend',
    icon: '🖥️',
    color: 'text-blue-400',
    border: 'border-blue-400/20',
    skills: [
      { name: 'Vue.js 3', level: 'expert' },
      { name: 'Vue.js 2', level: 'expert' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Vuetify', level: 'advanced' },
      { name: 'JavaScript ES6+', level: 'expert' },
      { name: 'HTML5 / CSS3', level: 'expert' },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: 'text-green-400',
    border: 'border-green-400/20',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Django', level: 'intermediate' },
      { name: 'APIs REST', level: 'advanced' },
      { name: 'Serverless', level: 'intermediate' },
      { name: 'Python', level: 'intermediate' },
      { name: 'Express.js', level: 'advanced' },
    ],
  },
  {
    label: 'Cloud / DB',
    icon: '☁️',
    color: 'text-orange-400',
    border: 'border-orange-400/20',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 'intermediate' },
      { name: 'DynamoDB', level: 'advanced' },
      { name: 'MariaDB / MySQL', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'beginner' },
    ],
  },
  {
    label: 'Ferramentas',
    icon: '🛠️',
    color: 'text-purple-400',
    border: 'border-purple-400/20',
    skills: [
      { name: 'Git / GitHub', level: 'advanced' },
      { name: 'Power BI', level: 'intermediate' },
      { name: 'Scrum / Kanban', level: 'advanced' },
      { name: 'Figma', level: 'beginner' },
      { name: 'Linux', level: 'intermediate' },
      { name: 'Inglês técnico', level: 'intermediate' },
    ],
  },
]

const levelColors = {
  expert: 'bg-accent/20 text-accent border-accent/30',
  advanced: 'bg-blue-500/20 text-blue-400 border-blue-400/30',
  intermediate: 'bg-green-500/20 text-green-400 border-green-400/30',
  beginner: 'bg-surface text-text-muted border-surface/80',
}
</script>

<template>
  <section id="stack" class="py-20 bg-primary" ref="sectionRef">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="tech-animate text-center mb-16">
        <span class="text-accent text-sm font-mono font-medium tracking-widest uppercase">// 02</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text-main mt-2">Tech Stack</h2>
        <p class="text-text-muted mt-3 max-w-lg mx-auto">
          Tecnologias que uso no dia a dia, organizadas por domínio
        </p>
      </div>

      <!-- Grid of categories -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="cat in categories"
          :key="cat.label"
          class="tech-animate bg-card rounded-xl p-6 border border-surface/50 hover:border-accent/20 transition-colors card-hover"
        >
          <div class="flex items-center gap-3 mb-5">
            <span class="text-2xl">{{ cat.icon }}</span>
            <h3 class="text-text-main font-semibold text-lg" :class="cat.color">{{ cat.label }}</h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in cat.skills"
              :key="skill.name"
              class="text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 hover:scale-105"
              :class="levelColors[skill.level]"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="tech-animate mt-10 flex flex-wrap justify-center gap-4 text-xs">
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-accent/30 border border-accent/40" />
          <span class="text-text-muted">Expert</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-400/40" />
          <span class="text-text-muted">Avançado</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-green-500/30 border border-green-400/40" />
          <span class="text-text-muted">Intermediário</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-surface border border-surface/80" />
          <span class="text-text-muted">Iniciante</span>
        </div>
      </div>
    </div>
  </section>
</template>
