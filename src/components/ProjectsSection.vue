<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref(null)
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.project-animate', sectionRef.value)
})

const projects = [
  {
    title: 'Arduino Stream Deck',
    description:
      'Dispositivo físico customizável baseado em Arduino que simula um Stream Deck com botões programáveis para automação de tarefas no computador. Controle de volume, atalhos de teclado, macros e comandos customizados via HID.',
    tags: ['Arduino', 'C++', 'HID', 'Python', 'Hardware'],
    github: 'https://github.com/gpaferrari',
    demo: null,
    featured: true,
    category: 'Hardware / IoT',
    icon: '🎮',
  },
  {
    title: 'Módulo Jurídico',
    description:
      'Sistema desenvolvido na Gali Energia para gestão de processos jurídicos com controle de status, disparo automático de e-mails conforme o andamento do processo e portal externo para escritórios parceiros. O parceiro acessava um ambiente próprio para envio e download de documentos — com controle de permissão por usuário definindo quais arquivos cada um poderia ver. Tudo atualizado no portal parceiro (documentos, observações, mudanças de status) era refletido em tempo real no sistema interno. Desenvolvido de ponta a ponta com autonomia total.',
    tags: ['Vue 3', 'Node.js', 'DynamoDB', 'AWS Lambda', 'Serverless', 'E-mail automático', 'RBAC'],
    github: null,
    demo: null,
    featured: true,
    category: 'Web App',
    icon: '⚖️',
  },
  {
    title: 'Módulo de Produtos — ERP AGK',
    description:
      'Módulo em desenvolvimento na AGK Solutions para substituir planilhas Excel sem padrão por um sistema estruturado. Geração automática de IDs, purchase codes e sales codes no cadastro de produto. Campos calculados com fórmulas de custo personalizadas por produto ou fórmulas genéricas reutilizáveis para formação de preço. Módulo de embalagens com pré-cadastro e vínculo automático. Integração com tabela FIPE para busca de dados de motos no module de model application. Exportação para CSV.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Docker', 'AWS EC2', 'FIPE API', 'Axios'],
    github: null,
    demo: null,
    featured: false,
    category: 'ERP / Backend',
    icon: '🏭',
  },
]
</script>

<template>
  <section id="projects" class="py-20 bg-primary" ref="sectionRef">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="project-animate text-center mb-16">
        <span class="text-accent text-sm font-mono font-medium tracking-widest uppercase">// 05</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text-main mt-2">Projetos</h2>
        <p class="text-text-muted mt-3 max-w-lg mx-auto">
          Seleção de projetos desenvolvidos — pessoais e profissionais
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-animate bg-card rounded-xl border border-surface/50 hover:border-accent/30 transition-all duration-300 card-hover flex flex-col overflow-hidden"
        >
          <!-- Card top accent line -->
          <div class="h-0.5 bg-gradient-to-r from-accent to-accent-2" />

          <div class="p-6 flex flex-col flex-1">
            <!-- Icon + category -->
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl">{{ project.icon }}</span>
              <span class="text-text-muted text-xs px-2.5 py-1 bg-surface rounded-full border border-surface/80">
                {{ project.category }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-text-main font-semibold text-lg mb-3">{{ project.title }}</h3>

            <!-- Description -->
            <p class="text-text-muted text-sm leading-relaxed flex-1 mb-5">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2.5 py-1 rounded-full bg-surface text-text-muted border border-surface/80"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 mt-auto">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-sm text-accent border border-accent/40 px-4 py-2 rounded-lg hover:bg-accent hover:text-primary transition-all duration-200 font-medium"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver no GitHub
              </a>
              <span
                v-if="!project.github"
                class="flex items-center gap-1.5 text-sm text-text-muted border border-surface/60 px-4 py-2 rounded-lg cursor-default"
              >
                🔒 Projeto privado
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- GitHub CTA -->
      <div class="project-animate text-center mt-12">
        <p class="text-text-muted mb-4">Veja mais projetos e contribuições</p>
        <a
          href="https://github.com/gpaferrari"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border border-text-muted/30 text-text-muted hover:text-accent hover:border-accent px-6 py-3 rounded-lg transition-all duration-200 text-sm font-medium"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          github.com/gpaferrari
        </a>
      </div>
    </div>
  </section>
</template>
