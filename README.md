# Plano de Estudos de 30 Dias para o Exame AWS Certified Developer – Associate (DVA-C02)

Este projeto contém um plano de estudos detalhado para ajudar na preparação para o exame AWS Certified Developer – Associate (DVA-C02) e AWS AI Practitioner. O plano é dividido em 30 dias, cobrindo todos os domínios e tópicos necessários para o exame.

As checklists e comentários são salvos localmente no dispositivo, ou seja, são armazenados em cache. Isso significa que não será possível acessá-los em diferentes dispositivos devido às limitações deste projeto.

## 🚀 Tecnologias

Este projeto foi desenvolvido com:

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização com suporte a modo escuro/claro

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:

```bash
git clone https://github.com/FelipeLima91/plan-study-aws.git
cd plan-study-aws/plan-study-aws
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173` (ou a porta indicada no terminal)

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot-reload
- `npm run build` - Cria uma build de produção otimizada
- `npm run preview` - Visualiza a build de produção localmente

## 📁 Estrutura do Projeto

```
plan-study-aws/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── CountdownBanner.tsx
│   │   ├── ExamDateForm.tsx
│   │   ├── Accordion.tsx
│   │   ├── Day.tsx
│   │   └── Footer.tsx
│   ├── hooks/          # Custom hooks
│   │   ├── useLocalStorage.ts
│   │   ├── useCountdown.ts
│   │   └── useTheme.ts
│   ├── types/          # Tipos TypeScript
│   │   └── index.ts
│   ├── data/           # Dados do plano de estudos
│   │   └── studyPlan.ts
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globais
├── index.html          # HTML base do Vite
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração TypeScript
├── vite.config.ts      # Configuração Vite
└── README.md
```

## 💡 Funcionalidades

- ✅ Contagem regressiva para a data da prova
- ✅ Checklists interativas para cada dia de estudo
- ✅ Área de anotações para cada dia
- ✅ Modo escuro/claro
- ✅ Persistência de dados no localStorage
- ✅ Interface responsiva e moderna

## 🌐 Acesse o Plano de Estudos

Você pode acessar o plano de estudos online através do GitHub Pages: [Plano de Estudos AWS](https://felipelima91.github.io/plan-study-aws/)

## 💡 Dicas Gerais

- **Prática:** Utilize o AWS Free Tier para praticar a criação e implantação de aplicações.
- **Ferramentas:** Familiarize-se com AWS SAM, AWS CLI e SDKs.
- **Documentação:** Consulte a documentação oficial da AWS para serviços como Lambda, DynamoDB, IAM, etc.
- **Simulados:** Faça simulados de exame para se acostumar com o formato e o tempo.
- **Comunidade:** Participe de fóruns e grupos de estudo para tirar dúvidas e compartilhar conhecimentos.

## Recursos Adicionais

- **AWS Training:** Cursos oficiais da AWS para o exame Developer – Associate.
- **Whizlabs e Tutorials Dojo:** Simulados e questões práticas.
- **YouTube:** Canais como A Cloud Guru e AWS Training têm tutoriais úteis.

## Contribuição

Sinta-se à vontade para contribuir com este projeto enviando pull requests ou abrindo issues para melhorias e correções.

---

Boa sorte na sua preparação! 🚀
