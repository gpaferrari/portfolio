<script setup>
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref(null)
const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.arch-animate', sectionRef.value)
})

const systemPatterns = [
  {
    icon: '🏛️',
    name: 'MVC / MTV',
    full: 'Model-View-Controller',
    desc: 'Django usa MTV (Model-Template-View) — o mesmo conceito com outro nome. Usei na AGK para organizar rotas, modelos e lógica de controle no ERP.',
    tag: 'Backend',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  },
  {
    icon: '🧱',
    name: 'Monolito',
    full: 'Monolithic Architecture',
    desc: 'O ERP da AGK e os sistemas da Gali rodam como aplicações únicas: API, regras de negócio e banco no mesmo processo/deploy.',
    tag: 'Backend',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  },
  {
    icon: '🧬',
    name: 'Componentização',
    full: 'Component-Based Architecture',
    desc: 'Três anos construindo SPAs com Vue. Cada tela virou componentes reutilizáveis — do botão ao módulo completo, cada um com uma única responsabilidade.',
    tag: 'Frontend',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: '⚡',
    name: 'Serverless / FaaS',
    full: 'Function as a Service',
    desc: 'Na Gali, cada operação era uma Lambda separada: criar, listar, buscar, excluir, upload. Estrutura handler/common — o common centralizava validações e acesso ao DynamoDB, o handler executava a lógica.',
    tag: 'Cloud',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  },
  {
    icon: '🔗',
    name: 'REST APIs',
    full: 'RESTful API Design',
    desc: 'Desenvolvi e consumi APIs REST em todos os projetos: endpoints para criar, listar, buscar, excluir, busca personalizada e upload de arquivo — contratos claros entre front e back.',
    tag: 'Full Stack',
    tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
  },
  {
    icon: '📦',
    name: 'SPA',
    full: 'Single Page Application',
    desc: 'Todos os frontends que desenvolvi são SPAs com Vue — carga inicial única, navegação dinâmica sem reload e atualização parcial de dados.',
    tag: 'Frontend',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
]

const codePatterns = [
  {
    icon: '🗃️',
    name: 'DTO + Module Classes',
    full: 'Data Transfer Object',
    desc: 'Para cada módulo (contratos, obras, clientes) criava uma classe responsável por formatar os dados do formulário antes de enviar ao backend — sem lógica espalhada.',
    example: 'new CreateContratoDTO(formData)',
    tag: 'Favorito',
    tagColor: 'text-accent bg-accent/10 border-accent/30',
  },
  {
    icon: '🔐',
    name: 'Auth Guard / JWT',
    full: 'Token-Based Authentication',
    desc: 'Toda rota protegida validava o JWT antes de processar. O backend aguardava a chave, recusava requests inválidos e as URLs ficavam protegidas — sem expor lógica ao front.',
    example: 'verifyToken(req) → next() | 401',
    tag: 'Segurança',
    tagColor: 'text-red-400 bg-red-400/10 border-red-400/30',
  },
  {
    icon: '✂️',
    name: 'SRP',
    full: 'Single Responsibility Principle',
    desc: 'Cada Lambda fazia exatamente uma coisa: uma para criar, uma para listar, uma para buscar, uma para excluir, uma para upload. Sem função que serve pra tudo.',
    example: 'createItem / listItems / uploadFile',
    tag: 'SOLID',
    tagColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  },
  {
    icon: '🗂️',
    name: 'Handler / Common',
    full: 'Separation of Concerns + DRY',
    desc: 'No serverless, separava em dois arquivos: common centralizava validações, conexão com DynamoDB e utilitários compartilhados; handler tinha só a lógica da função.',
    example: 'common.validate() + handler(event)',
    tag: 'Backend',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  },
  {
    icon: '🔁',
    name: 'Composables',
    full: 'Composition / Custom Hook',
    desc: 'Em Vue 3, extraí lógica reutilizável em composables — estado e comportamento separados da UI, reaproveitados em múltiplos componentes.',
    example: 'const { data } = useContrato(id)',
    tag: 'Frontend',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: '👁️',
    name: 'Reatividade',
    full: 'Observer / Reactivity Pattern',
    desc: 'O sistema de reatividade do Vue é o padrão Observer na prática — quando um dado muda, tudo que depende dele atualiza automaticamente. Usei em todos os projetos.',
    example: 'watch(filtro, () => buscarDados())',
    tag: 'Frontend',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
]
</script>

<template>
  <section id="architecture" class="py-20 bg-card" ref="sectionRef">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="arch-animate text-center mb-6">
        <span class="text-accent text-sm font-mono font-medium tracking-widest uppercase">// 03</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-text-main mt-2">Arquitetura</h2>
        <p class="text-text-muted mt-3 max-w-xl mx-auto leading-relaxed">
          Além do código — padrões e estruturas que já apliquei em sistemas reais.
          Muitos eu usei antes de saber o nome.
        </p>
      </div>

      <!-- Divider label -->
      <div class="arch-animate flex items-center gap-4 mb-8 mt-12">
        <div class="flex-1 h-px bg-surface" />
        <span class="text-text-muted text-xs font-mono uppercase tracking-widest px-2">Padrões de Sistema</span>
        <div class="flex-1 h-px bg-surface" />
      </div>

      <!-- System architecture patterns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <div
          v-for="p in systemPatterns"
          :key="p.name"
          class="arch-animate group bg-surface rounded-xl p-5 border border-surface/50 hover:border-accent/25 transition-all duration-300 card-hover"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">{{ p.icon }}</span>
              <div>
                <div class="text-text-main font-semibold text-sm leading-tight">{{ p.name }}</div>
                <div class="text-text-muted text-xs mt-0.5">{{ p.full }}</div>
              </div>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full border flex-shrink-0 font-medium" :class="p.tagColor">
              {{ p.tag }}
            </span>
          </div>
          <p class="text-text-muted text-sm leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>

      <!-- Divider label -->
      <div class="arch-animate flex items-center gap-4 mb-8">
        <div class="flex-1 h-px bg-surface" />
        <span class="text-text-muted text-xs font-mono uppercase tracking-widest px-2">Design Patterns</span>
        <div class="flex-1 h-px bg-surface" />
      </div>

      <!-- Code design patterns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <div
          v-for="p in codePatterns"
          :key="p.name"
          class="arch-animate group bg-surface rounded-xl p-5 border border-surface/50 hover:border-accent/25 transition-all duration-300 card-hover"
        >
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">{{ p.icon }}</span>
              <div>
                <div class="text-text-main font-semibold text-sm leading-tight">{{ p.name }}</div>
                <div class="text-text-muted text-xs mt-0.5">{{ p.full }}</div>
              </div>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full border flex-shrink-0 font-medium" :class="p.tagColor">
              {{ p.tag }}
            </span>
          </div>
          <p class="text-text-muted text-sm leading-relaxed mb-3">{{ p.desc }}</p>
          <!-- Code snippet -->
          <div class="bg-primary rounded-lg px-3 py-2 font-mono text-xs text-accent/80 border border-surface/50">
            {{ p.example }}
          </div>
        </div>
      </div>

      <!-- Footer note -->
      <div class="arch-animate text-center">
        <p class="text-text-muted text-sm italic max-w-lg mx-auto">
          "Nunca fui bom com nomes — mas o código já seguia esses padrões
          <span class="text-accent not-italic font-medium">antes de eu saber que existiam.</span>"
        </p>
      </div>

    </div>
  </section>
</template>
