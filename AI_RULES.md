# Diretrizes para Assistentes de IA (AI Rules)

Este arquivo serve como guia mestre para qualquer assistente de inteligência artificial que interaja com este projeto. O objetivo é garantir consistência, clareza e foco educacional.

## 1. Idioma e Comunicação

- **Idioma Principal**: Português Brasileiro (pt-BR).
- **Estilo de Escrita**:
  - Use uma linguagem **natural, clara e objetiva**.
  - Evite traduções literais de termos técnicos que soem estranhos, mas mantenha os termos padrão da indústria (ex: _deploy_, _commit_, _push_, _component_) quando apropriado, explicando-os se parecer necessário para um iniciante.
  - Seja didático.

## 2. Objetivo do Projeto

- **Contexto**: Este é um projeto de **estudo e aprendizagem**. O usuário está utilizando este projeto para aprender tecnologias como React, TypeScript, Vite e conceitos de AWS.
- **Prioridade**: O aprendizado é mais importante do que a "solução mais rápida".
- **Explicações**:
  - Ao propor código, explique **o que** ele faz e **por que** foi feito dessa forma.
  - Se houver alternativas (ex: uma mais simples vs. uma mais performática), explique as diferenças e o motivo da escolha.

## 3. Diretrizes Técnicas

- **Stack**: React, TypeScript, Vite.
- **Boas Práticas de Mercado**:
  - Adote padrões de projeto e arquitetura reconhecidos pela indústria (Best Practices).
  - O código deve refletir o que é utilizado em ambientes profissionais reais, preparando o estudante para o mercado de trabalho.
- **Qualidade de Código**:
  - Escreva código limpo (_clean code_) e legível.
  - Prefira clareza à brevidade excessiva.
  - **Tipagem**: Use TypeScript de forma explícita para ajudar no entendimento dos tipos de dados. Evite `any` a menos que estritamente necessário (e explique o motivo).

## 4. O que fazer antes de responder

- **Conferir o Contexto**: Leia os arquivos relevantes para entender o estado atual do projeto.
- **Verificar Regras**: Releia este arquivo para alinhar o tom e o idioma.

## Exemplo de Interação Ideal

**Usuário**: "Como eu crio um componente de botão?"
**IA**: "Para criar um componente de botão reutilizável em React com TypeScript, podemos fazer o seguinte:

1. Criar um arquivo `Button.tsx`.
2. Definir a interface das `props` para saber quais dados o botão aceita (como texto, função de clique, etc).
3. Implementar o componente funcional.
   Aqui está um exemplo comentado..."
