# Plano de Estudos de 30 Dias para o Exame AWS Certified Developer – Associate (DVA-C02)

Este projeto contém um plano de estudos detalhado para ajudar na preparação para o exame AWS Certified Developer – Associate (DVA-C02). O plano é dividido em 30 dias, cobrindo todos os domínios e tópicos necessários para o exame.

As checklists e comentários são salvos localmente no dispositivo, ou seja, são armazenados em cache. Isso significa que não será possível acessá-los em diferentes dispositivos devido às limitações deste projeto.

## Estrutura do Plano

### 📌 Dia 1-5: Domínio 1 - Desenvolvimento com os Serviços da AWS (32%)

- **Dia 1:** Introdução ao exame e revisão do guia. Foco em padrões arquitetônicos (orientado por eventos, microsserviços, monolítico, etc.).
- **Dia 2:** Estudo sobre idempotência, stateful vs. stateless, e componentes com acoplamento rígido vs. flexível.
- **Dia 3:** Padrões de design tolerantes a falhas (retry com backoff exponencial, filas de mensagens mortas, etc.).
- **Dia 4:** Desenvolvimento de aplicações resilientes em linguagens como Python, Java ou JavaScript.
- **Dia 5:** Criação e manutenção de APIs (transformações de solicitação/resposta, validação, códigos de status).

### 📌 Dia 6-10: Domínio 1 - Continuação

- **Dia 6:** Testes de unidade com AWS SAM e interação com serviços da AWS via APIs e SDKs.
- **Dia 7:** Desenvolvimento de código para AWS Lambda (mapeamento de eventos, aplicações stateless, dimensionamento).
- **Dia 8:** Configuração de funções Lambda (variáveis de ambiente, memória, tempo limite, gatilhos, etc.).
- **Dia 9:** Integração do Lambda com outros serviços da AWS e otimização de desempenho.
- **Dia 10:** Uso de armazenamentos de dados (bancos relacionais e não relacionais, CRUD, Amazon DynamoDB, S3).

### 🔐 Dia 11-15: Domínio 2 - Segurança (26%)

- **Dia 11:** Autenticação e autorização (SAML, OIDC, Amazon Cognito, JWT, OAuth, AWS STS).
- **Dia 12:** Políticas de IAM (RBAC, políticas baseadas em recursos, princípio de menor privilégio).
- **Dia 13:** Criptografia de dados em repouso e em trânsito (AWS KMS, chaves gerenciadas pelo cliente vs. AWS).
- **Dia 14:** Gerenciamento de segredos (AWS Secrets Manager, Parameter Store) e tratamento seguro de credenciais.
- **Dia 15:** Revisão de segurança e prática de cenários de autenticação e criptografia.

### 🚀 Dia 16-20: Domínio 3 - Implantação (24%)

- **Dia 16:** Preparação de artefatos para implantação (AWS AppConfig, Secrets Manager, Lambda layers).
- **Dia 17:** Testes de aplicações em ambientes de desenvolvimento (integração simulada, endpoints de desenvolvimento).
- **Dia 18:** Automação de testes de implantação (payloads JSON, testes de unidade, AWS SAM).
- **Dia 19:** CI/CD com AWS CodePipeline, CodeBuild e CodeDeploy.
- **Dia 20:** Estratégias de implantação (canary, azul/verde, contínua) e reversões.

### 🔍 Dia 21-25: Domínio 4 - Solução de Problemas e Otimização (18%)

- **Dia 21:** Análise de causa raiz (logs, métricas, rastreamentos com AWS X-Ray, CloudWatch).
- **Dia 22:** Instrumentação de código para observabilidade (registro em log estruturado, métricas personalizadas).
- **Dia 23:** Otimização de aplicações (armazenamento em cache, simultaneidade, Amazon SQS, SNS).
- **Dia 24:** Definição de perfis de desempenho e uso de políticas de filtro de assinatura.
- **Dia 25:** Revisão de solução de problemas e otimização com práticas recomendadas.

### 📚 Dia 26-30: Revisão e Prática

- **Dia 26:** Revisão geral do Domínio 1 (Desenvolvimento com os serviços da AWS).
- **Dia 27:** Revisão geral do Domínio 2 (Segurança).
- **Dia 28:** Revisão geral do Domínio 3 (Implantação).
- **Dia 29:** Revisão geral do Domínio 4 (Solução de Problemas e Otimização).
- **Dia 30:** Simulação de exame e prática com questões de múltipla escolha e múltipla resposta.

## Dicas Gerais

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
