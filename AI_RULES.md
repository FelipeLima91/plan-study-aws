# Diretrizes para Assistentes de IA (AI Rules)

Este arquivo serve como guia mestre para qualquer assistente de inteligência artificial que interaja com este projeto. O objetivo é garantir consistência, clareza e foco educacional.

## 1. Idioma e Comunicação

- **Idioma Principal**: Português Brasileiro (pt-BR).
- **Estilo de Escrita**:
  - Use uma linguagem **natural, clara e objetiva**.
  - Mantenha termos técnicos padrão da indústria (ex: _deploy_, _commit_, _push_, _component_) quando apropriado.
  - Seja didático — explique o que o código faz e por que foi feito dessa forma.
  - Se houver alternativas (ex: mais simples vs. mais performática), explique as diferenças.

## 2. Objetivo do Projeto

- **Contexto**: Aplicação web de **plano de estudos para certificações AWS** (DVA-C02 e AIF-C01).
- **Funcionalidades**: Checklists interativas, anotações (post-its), countdown para prova, cronômetro de estudo, estatísticas de anotações com exportação, uso de cache, modo escuro/claro.
- **Prioridade**: O aprendizado é mais importante do que a "solução mais rápida".
- **Público**: Estudante aprendendo React, TypeScript e desenvolvimento web moderno.

## 3. Stack Técnica

| Categoria    | Tecnologia                    |
| ------------ | ----------------------------- |
| Framework    | React 18 + TypeScript         |
| Build tool   | Vite 5                        |
| Estilização  | Tailwind CSS v4 + DaisyUI 5   |
| Animações    | Framer Motion                 |
| Ícones       | Lucide React                  |
| PDF          | jsPDF                         |
| Testes       | Jest + React Testing Library  |
| Lint/Formato | ESLint + Prettier             |
| Git Hooks    | Husky + lint-staged           |
| Deploy       | GitHub Actions → GitHub Pages |

## 4. Convenções de Código

### Componentes

- Componentes funcionais com `export function NomeComponente()`
- Props tipadas com `interface` dedicada
- Modais usando `<dialog>` nativo do DaisyUI (controlados via `showModal()` / `close()`)
- Ícones do `lucide-react` (não usar SVGs inline para novos componentes)

### Estado e Dados

- Estado global via `React Context` (`StudyPlanContext`)
- Persistência via `localStorage` com hooks customizados (`useLocalStorage`, `useLocalStorageString`, `useLocalStorageBoolean`)
- Memoização com `useMemo` para cálculos derivados e `useCallback` para funções passadas como props

### Estilização

- **Usar classes DaisyUI** para componentes (btn, modal, stat, countdown, card, accordion, etc.)
- **Usar tokens semânticos** do DaisyUI para cores (`bg-base-100`, `text-base-content`, `text-primary`, etc.) — **nunca usar cores hardcoded** como `bg-white` ou `text-black`
- Estilos customizados em `index.css` apenas quando DaisyUI não cobre (ex: post-its)
- Dark mode via `data-theme` + classe `body.dark-mode` para CSS legado
- Fontes no dark mode: usar cinza suave (`#d1d5db`), não branco puro

### Testes

- Testes em `__tests__/` dentro de `components/` e `hooks/`
- Padrão: `NomeComponente.test.tsx` ou `nomeHook.test.ts`
- Rodar antes de commitar: `npm test && npm run lint && npm run build`

## 5. Estrutura de Pastas

```
src/
├── components/        # Componentes React
│   └── __tests__/     # Testes dos componentes
├── contexts/          # React Context (estado global)
├── hooks/             # Custom hooks
│   └── __tests__/     # Testes dos hooks
├── data/              # Dados dos planos de estudo
├── types/             # Tipos TypeScript
├── App.tsx            # Componente principal
├── main.tsx           # Entry point
└── index.css          # Estilos globais
```

## 6. O que fazer antes de responder

1. **Ler este arquivo** para alinhar tom, idioma e convenções
2. **Conferir o contexto**: Ler os arquivos relevantes para entender o estado atual
3. **Seguir as convenções**: Usar DaisyUI, tokens semânticos, tipagem explícita
4. **Verificar impacto**: Checar se a mudança afeta testes ou outros componentes
5. **Explicar o porquê**: Não apenas o que — o aluno precisa entender a razão

## 7. O que evitar

- ❌ `any` no TypeScript (a menos que estritamente necessário, com explicação)
- ❌ Cores hardcoded (`bg-white`, `text-black`) — usar tokens DaisyUI
- ❌ Estado duplicado derivável de outro estado
- ❌ Inline styles quando Tailwind/DaisyUI cobre
- ❌ Comentários óbvios que repetem o código
- ❌ `console.log` em código de produção
