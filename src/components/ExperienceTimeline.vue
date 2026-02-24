<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref(null)
const { observeElements } = useScrollAnimation()
const expandedIds = ref([0])

onMounted(() => {
  observeElements('.exp-animate', sectionRef.value)
})

const experiences = [
  {
    id: 0,
    period: 'out/2025 – atual',
    role: 'Desenvolvedor Full Stack',
    company: 'AGK Solutions',
    type: 'CLT',
    current: true,
    tags: ['Django', 'Python', 'PostgreSQL', 'Docker', 'AWS EC2', 'Axios'],
    achievements: [
      'Desenvolvimento do módulo de produtos do ERP: substituição de planilhas Excel sem padrão por um sistema estruturado com campos padronizados, geração automática de IDs, purchase codes e sales codes',
      'Implementação de campos calculados com suporte a fórmulas de custo personalizadas por produto ou fórmulas genéricas reutilizáveis para formação de preço',
      'Módulo de embalagens: pré-cadastro e vínculo automático ao produto; padronização de unidades e hierarquia de embalagem',
      'Módulo Model Application: integração com tabela FIPE para busca automática de dados de motos no cadastro de purchase codes',
      'Funcionalidades de exportação para CSV e criação de tabelas dinâmicas no sistema',
      'Ambiente com SQLite em desenvolvimento e PostgreSQL em produção, containerizado com Docker e deploy em AWS EC2',
    ],
  },
  {
    id: 1,
    period: 'jan/2024 – ago/2025',
    role: 'Desenvolvedor Full Stack',
    company: 'Gali Energia',
    type: 'CLT',
    current: false,
    tags: ['Vue 3', 'Node.js', 'DynamoDB', 'AWS', 'Serverless'],
    achievements: [
      'Migração e evolução do sistema interno de Vue 2 para Vue 3 com Composition API',
      'Desenvolvimento de novos módulos para controle de obras, contatos e gestão de projetos',
      'Integração com AWS DynamoDB e arquitetura serverless para performance escalável',
      'Redução de 40% no tempo de carregamento de páginas críticas com lazy loading e otimizações',
    ],
  },
  {
    id: 2,
    period: 'set/2022 – dez/2023',
    role: 'Estagiário Desenvolvedor',
    company: 'Gali Energia',
    type: 'Estágio',
    current: false,
    tags: ['Vue 2', 'Node.js', 'MariaDB', 'JavaScript'],
    achievements: [
      'Primeiro contato com desenvolvimento profissional em ambiente de produção',
      'Desenvolvimento de funcionalidades no sistema interno com Vue 2 e Node.js',
      'Manutenção e otimização de queries em MariaDB',
      'Aprendizado acelerado de boas práticas e metodologias ágeis (Scrum/Kanban)',
    ],
  },
  {
    id: 3,
    period: '2019 – 2022',
    role: 'Gestão Comercial & Primeiro Site',
    company: 'MultiAr / Leveros',
    type: 'CLT',
    current: false,
    tags: ['HTML', 'CSS', 'JavaScript', 'Gestão', 'Vendas'],
    achievements: [
      'Gestão comercial e atendimento a clientes B2B no setor de climatização',
      'Desenvolvimento do primeiro site institucional da empresa — ponto de partida na área tech',
      'Automação de planilhas e relatórios com Excel/Google Sheets para acompanhar metas',
      'Experiência em negociação, gestão de equipe e visão de negócio aplicada à tecnologia',
    ],
  },
]

function toggleExpand(id) {
  if (expandedIds.value.includes(id)) {
    expandedIds.value = expandedIds.value.filter((i) => i !== id)
  } else {
    expandedIds.value.push(id)
  }
}
</script>

<template>
  <section id="experience" class="py-20 bg-card" ref="sectionRef">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="exp-animate text-center mb-16">
        <span class="text-accent text-sm font-mono font-medium tracking-widest uppercase">// 04</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text-main mt-2">Experiência</h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-surface" />
        <!-- Animated line overlay -->
        <div class="absolute left-6 sm:left-8 top-0 w-px bg-gradient-to-b from-accent to-accent-2 timeline-line" />

        <div class="space-y-8">
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="exp-animate relative pl-16 sm:pl-20"
          >
            <!-- Dot -->
            <div
              class="absolute left-4 sm:left-6 top-5 w-4 h-4 rounded-full border-2 transition-all duration-300"
              :class="exp.current
                ? 'bg-accent border-accent shadow-lg shadow-accent/40'
                : 'bg-surface border-text-muted/40'"
            />

            <!-- Card -->
            <div
              class="bg-surface rounded-xl border transition-all duration-300 cursor-pointer"
              :class="expandedIds.includes(exp.id) ? 'border-accent/30' : 'border-surface/80 hover:border-accent/20'"
              @click="toggleExpand(exp.id)"
            >
              <div class="p-5">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 class="text-text-main font-semibold text-base sm:text-lg">{{ exp.role }}</h3>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-accent font-medium text-sm">{{ exp.company }}</span>
                      <span class="text-text-muted text-xs px-2 py-0.5 bg-primary rounded-full">{{ exp.type }}</span>
                      <span v-if="exp.current" class="text-green-400 text-xs px-2 py-0.5 bg-green-400/10 rounded-full border border-green-400/30">● atual</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-text-muted text-xs font-mono">{{ exp.period }}</span>
                    <svg
                      class="w-4 h-4 text-text-muted transition-transform duration-300"
                      :class="expandedIds.includes(exp.id) ? 'rotate-180' : ''"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 mt-3">
                  <span
                    v-for="tag in exp.tags"
                    :key="tag"
                    class="text-xs px-2.5 py-1 rounded-full bg-primary text-text-muted border border-surface/80"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Expandable achievements -->
              <Transition name="expand">
                <div v-if="expandedIds.includes(exp.id)" class="px-5 pb-5">
                  <div class="border-t border-surface/50 pt-4">
                    <ul class="space-y-2">
                      <li
                        v-for="item in exp.achievements"
                        :key="item"
                        class="flex items-start gap-2 text-text-muted text-sm leading-relaxed"
                      >
                        <span class="text-accent mt-1 flex-shrink-0">▸</span>
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-line {
  height: 0%;
  animation: growTimeline 2s ease-out 0.5s forwards;
}

@keyframes growTimeline {
  to { height: 100%; }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
