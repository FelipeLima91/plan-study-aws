# 📚 Plano de Estudos AWS

Aplicação web para organizar seus estudos para certificações AWS com planos estruturados de 30 dias, checklists interativas, anotações e acompanhamento de progresso.

**Certificações disponíveis:**

- AWS Certified Developer – Associate (DVA-C02)
- AWS AI Practitioner (AIF-C01)

🌐 **Acesse online:** [felipelima91.github.io/plan-study-aws](https://felipelima91.github.io/plan-study-aws/)

---

## 🚀 Tecnologias

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

---

## � Instalação

### Pré-requisitos

- **Node.js** 18+ (recomendado: 20)
- **npm** 9+

### Setup

```bash
git clone https://github.com/FelipeLima91/plan-study-aws.git
cd plan-study-aws
npm install
```

---

## 🛠️ Scripts Disponíveis

| Comando                 | Descrição                                           |
| ----------------------- | --------------------------------------------------- |
| `npm run dev`           | Inicia o servidor de desenvolvimento com hot-reload |
| `npm run build`         | Compila TypeScript e gera a build de produção       |
| `npm run preview`       | Visualiza a build de produção localmente            |
| `npm test`              | Executa todos os testes unitários                   |
| `npm run test:watch`    | Executa testes em modo watch (re-roda ao salvar)    |
| `npm run test:coverage` | Executa testes com relatório de cobertura           |
| `npm run lint`          | Verifica erros de lint (ESLint)                     |
| `npm run format`        | Formata todo o código (Prettier)                    |

---

## ✅ Antes de Commitar (Checklist)

O projeto usa **Husky + lint-staged** para rodar automaticamente no `pre-commit`:

```
git commit → Husky → lint-staged → Prettier + ESLint (nos arquivos staged)
```

Mas é altamente recomendado verificar manualmente **antes** de commitar:

### 1. Rodar os testes

```bash
npm test
```

Certifique-se de que **todos os testes passam**. Se quiser ver a cobertura:

```bash
npm run test:coverage
```

### 2. Verificar o lint

```bash
npm run lint
```

Deve retornar **0 warnings**. Se houver erros, corrija antes de commitar.

### 3. Verificar se compila

```bash
npm run build
```

Se der erro de TypeScript, corrija antes de commitar.

### 4. Formatar o código (opcional)

```bash
npm run format
```

> 💡 **Dica:** O `lint-staged` já roda Prettier e ESLint automaticamente nos arquivos staged. Mas rodar manualmente garante que nada ficou fora.

### Resumo rápido

```bash
npm test && npm run lint && npm run build
```

Se todos passarem ✅, pode commitar tranquilo!

---

## 🔄 CI/CD

O pipeline do **GitHub Actions** roda automaticamente em cada push na `main`:

1. Instala dependências (`npm ci`)
2. Executa os testes (`npm test`)
3. Compila a build (`npm run build`)
4. Faz deploy no **GitHub Pages**

O arquivo de configuração está em `.github/workflows/deploy.yml`.

---

## 📁 Estrutura do Projeto

```
plan-study-aws/
├── .github/workflows/     # CI/CD (GitHub Actions)
├── .husky/                # Git hooks (pre-commit)
├── src/
│   ├── components/        # Componentes React
│   │   ├── Accordion.tsx
│   │   ├── CacheInfoModal.tsx
│   │   ├── CheckboxItem.tsx
│   │   ├── Day.tsx
│   │   ├── ExamDateForm.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NotesStatsModal.tsx
│   │   ├── PlanSelection.tsx
│   │   ├── PostIt.tsx
│   │   ├── StudyPlanView.tsx
│   │   ├── StudyTimer.tsx
│   │   └── __tests__/     # Testes dos componentes
│   ├── contexts/          # React Context (estado global)
│   │   └── StudyPlanContext.tsx
│   ├── hooks/             # Custom hooks
│   │   ├── useCountdown.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useTheme.ts
│   │   └── __tests__/     # Testes dos hooks
│   ├── data/              # Dados dos planos de estudo
│   │   └── studyPlan.ts
│   ├── types/             # Tipos TypeScript
│   │   └── index.ts
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── index.html             # HTML base do Vite
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💡 Funcionalidades

- ✅ Planos de estudo de 30 dias para múltiplas certificações AWS
- ✅ Checklists interativas com progresso por domínio e progresso geral
- ✅ Contagem regressiva para a data da prova
- ✅ Cronômetro de estudo com presets (15/30/60 min), incrementos e widget flutuante
- ✅ Anotações (post-its) com suporte a links para cada dia
- ✅ Estatísticas de anotações com exportação em PDF, TXT e Markdown
- ✅ Monitor de uso de cache (localStorage)
- ✅ Modo escuro / claro (DaisyUI data-theme)
- ✅ Accordion exclusivo (abre um, fecha os outros)
- ✅ Mensagens motivacionais por milestones de progresso
- ✅ Confetti ao completar 100% do plano 🎉
- ✅ Persistência completa no localStorage (checkboxes, anotações, tema, data do exame)
- ✅ Interface responsiva (mobile e desktop)
- ✅ Animações suaves com Framer Motion
- ✅ Limpeza de dados por plano (com confirmação)

---

## 💡 Dicas de Estudo

- **Prática:** Utilize o [AWS Free Tier](https://aws.amazon.com/free/) para praticar na console.
- **Ferramentas:** Familiarize-se com AWS SAM, AWS CLI e SDKs.
- **Documentação:** Consulte a [documentação oficial da AWS](https://docs.aws.amazon.com/).
- **Simulados:** Faça simulados no [Tutorials Dojo](https://tutorialsdojo.com/) ou [Whizlabs](https://www.whizlabs.com/).
- **YouTube:** Canais como A Cloud Guru e AWS Training têm tutoriais úteis.

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir enviando pull requests ou abrindo issues.

---

## 🤖 Regras para IA

Este projeto inclui um arquivo `AI_RULES.md` com diretrizes para assistentes de IA que interagem com o código. Consulte-o para manter consistência.

---

Feito com ❤️ por **Felipe Lima** — Boa sorte na sua preparação! 🚀
