import { StudyPlan } from '../types';

export const awsDeveloperAssociatePlan: StudyPlan = {
  domains: [
    {
      id: 'domain1',
      title: 'Domínio 1: Desenvolvimento com os Serviços da AWS (32%)',
      days: [
        {
          id: 'day1',
          title: 'Dia 1: Introdução e Padrões Arquitetônicos',
          checklist: [
            { id: 'day1-check1', text: 'Revisar o guia do exame' },
            { id: 'day1-check2', text: 'Explorar a AWS Management Console' },
            { id: 'day1-check3', text: 'Praticar comandos básicos com AWS CLI' },
          ],
        },
        {
          id: 'day2',
          title: 'Dia 2: Padrões Arquitetônicos (Orientado por Eventos, Microsserviços)',
          checklist: [
            { id: 'day2-check1', text: 'Estudar padrões arquitetônicos' },
            { id: 'day2-check2', text: 'Praticar com AWS Lambda e Amazon EventBridge' },
            { id: 'day2-check3', text: 'Explorar Amazon SNS para mensagens' },
          ],
        },
        {
          id: 'day3',
          title: 'Dia 3: Idempotência, Stateful vs. Stateless',
          checklist: [
            { id: 'day3-check1', text: 'Entender idempotência' },
            { id: 'day3-check2', text: 'Diferenciar stateful e stateless' },
            { id: 'day3-check3', text: 'Praticar com AWS Lambda e DynamoDB' },
          ],
        },
        {
          id: 'day4',
          title: 'Dia 4: Padrões de Design Tolerantes a Falhas',
          checklist: [
            { id: 'day4-check1', text: 'Estudar retry com backoff exponencial' },
            { id: 'day4-check2', text: 'Explorar filas de mensagens mortas' },
            { id: 'day4-check3', text: 'Praticar com Amazon SQS' },
          ],
        },
        {
          id: 'day5',
          title: 'Dia 5: Desenvolvimento de Aplicações Resilientes',
          checklist: [
            { id: 'day5-check1', text: 'Desenvolver aplicações em Python, Java ou JavaScript' },
            { id: 'day5-check2', text: 'Praticar com AWS SDKs' },
            { id: 'day5-check3', text: 'Criar APIs resilientes' },
          ],
        },
        {
          id: 'day6',
          title: 'Dia 6: Testes de Unidade e Interação com APIs',
          checklist: [
            { id: 'day6-check1', text: 'Escrever testes de unidade com AWS SAM' },
            { id: 'day6-check2', text: 'Interagir com serviços da AWS via APIs' },
            { id: 'day6-check3', text: 'Praticar com AWS SDKs' },
          ],
        },
        {
          id: 'day7',
          title: 'Dia 7: Desenvolvimento de Código para AWS Lambda',
          checklist: [
            { id: 'day7-check1', text: 'Mapeamento de eventos no AWS Lambda' },
            { id: 'day7-check2', text: 'Criar aplicações stateless' },
            { id: 'day7-check3', text: 'Configurar dimensionamento automático' },
          ],
        },
        {
          id: 'day8',
          title: 'Dia 8: Configuração de Funções Lambda',
          checklist: [
            { id: 'day8-check1', text: 'Definir variáveis de ambiente' },
            { id: 'day8-check2', text: 'Configurar memória e tempo limite' },
            { id: 'day8-check3', text: 'Adicionar gatilhos e destinos' },
            { id: 'day8-check4', text: 'Configurar recursos privados em VPCs' },
          ],
        },
        {
          id: 'day9',
          title: 'Dia 9: Integração do Lambda com Outros Serviços',
          checklist: [
            { id: 'day9-check1', text: 'Integrar Lambda com Amazon S3' },
            { id: 'day9-check2', text: 'Integrar Lambda com Amazon DynamoDB' },
            { id: 'day9-check3', text: 'Usar Amazon API Gateway com Lambda' },
          ],
        },
        {
          id: 'day10',
          title: 'Dia 10: Uso de Armazenamentos de Dados',
          checklist: [
            { id: 'day10-check1', text: 'Operações CRUD em bancos relacionais' },
            { id: 'day10-check2', text: 'Usar Amazon DynamoDB para NoSQL' },
            { id: 'day10-check3', text: 'Gerenciar ciclos de vida no Amazon S3' },
          ],
        },
      ],
    },
    {
      id: 'domain2',
      title: 'Domínio 2: Segurança (26%)',
      days: [
        {
          id: 'day11',
          title: 'Dia 11: Autenticação e Autorização',
          checklist: [
            { id: 'day11-check1', text: 'Configurar autenticação com Amazon Cognito' },
            { id: 'day11-check2', text: 'Usar JWT e OAuth para autorização' },
            { id: 'day11-check3', text: 'Configurar políticas de IAM' },
          ],
        },
        {
          id: 'day12',
          title: 'Dia 12: Políticas de IAM',
          checklist: [
            { id: 'day12-check1', text: 'Criar políticas baseadas em recursos' },
            { id: 'day12-check2', text: 'Aplicar o princípio de menor privilégio' },
            { id: 'day12-check3', text: 'Gerenciar grupos de usuários no IAM' },
          ],
        },
        {
          id: 'day13',
          title: 'Dia 13: Criptografia de Dados',
          checklist: [
            { id: 'day13-check1', text: 'Criptografar dados em repouso com AWS KMS' },
            { id: 'day13-check2', text: 'Criptografar dados em trânsito com TLS' },
            { id: 'day13-check3', text: 'Gerenciar chaves gerenciadas pelo cliente' },
          ],
        },
        {
          id: 'day14',
          title: 'Dia 14: Gerenciamento de Segredos',
          checklist: [
            { id: 'day14-check1', text: 'Usar AWS Secrets Manager para segredos' },
            { id: 'day14-check2', text: 'Configurar AWS Systems Manager Parameter Store' },
            { id: 'day14-check3', text: 'Tratar credenciais de forma segura' },
          ],
        },
        {
          id: 'day15',
          title: 'Dia 15: Revisão de Segurança',
          checklist: [
            { id: 'day15-check1', text: 'Revisar cenários de autenticação' },
            { id: 'day15-check2', text: 'Revisar cenários de criptografia' },
            { id: 'day15-check3', text: 'Praticar com políticas de IAM' },
          ],
        },
      ],
    },
    {
      id: 'domain3',
      title: 'Domínio 3: Implantação (24%)',
      days: [
        {
          id: 'day16',
          title: 'Dia 16: Preparação de Artefatos para Implantação',
          checklist: [
            { id: 'day16-check1', text: 'Usar AWS AppConfig para configurações' },
            { id: 'day16-check2', text: 'Configurar Lambda layers' },
            { id: 'day16-check3', text: 'Gerenciar dependências de código' },
          ],
        },
        {
          id: 'day17',
          title: 'Dia 17: Testes de Aplicações em Ambientes de Desenvolvimento',
          checklist: [
            { id: 'day17-check1', text: 'Testar código implantado com AWS SAM' },
            { id: 'day17-check2', text: 'Realizar integração simulada' },
            { id: 'day17-check3', text: 'Configurar endpoints de desenvolvimento' },
          ],
        },
        {
          id: 'day18',
          title: 'Dia 18: Automação de Testes de Implantação',
          checklist: [
            { id: 'day18-check1', text: 'Criar eventos de teste para AWS Lambda' },
            { id: 'day18-check2', text: 'Testar APIs com Amazon API Gateway' },
            { id: 'day18-check3', text: 'Automatizar testes com AWS CodeBuild' },
          ],
        },
        {
          id: 'day19',
          title: 'Dia 19: CI/CD com AWS CodePipeline',
          checklist: [
            { id: 'day19-check1', text: 'Configurar pipelines de CI/CD' },
            { id: 'day19-check2', text: 'Integrar AWS CodeBuild e AWS CodeDeploy' },
            { id: 'day19-check3', text: 'Implementar aprovações manuais e automáticas' },
          ],
        },
        {
          id: 'day20',
          title: 'Dia 20: Estratégias de Implantação',
          checklist: [
            { id: 'day20-check1', text: 'Implementar estratégia de implantação contínua' },
            { id: 'day20-check2', text: 'Usar estratégia azul/verde' },
            { id: 'day20-check3', text: 'Configurar reversões de implantação' },
          ],
        },
      ],
    },
    {
      id: 'domain4',
      title: 'Domínio 4: Solução de Problemas e Otimização (18%)',
      days: [
        {
          id: 'day21',
          title: 'Dia 21: Análise de Causa Raiz',
          checklist: [
            { id: 'day21-check1', text: 'Usar Amazon CloudWatch para logs e métricas' },
            { id: 'day21-check2', text: 'Analisar rastreamentos com AWS X-Ray' },
            { id: 'day21-check3', text: 'Códigos de erro HTTP comuns' },
            { id: 'day21-check4', text: 'Depurar código para identificar defeitos' },
          ],
        },
        {
          id: 'day22',
          title: 'Dia 22: Instrumentação de Código para Observabilidade',
          checklist: [
            { id: 'day22-check1', text: 'Implementar registro em log estruturado' },
            { id: 'day22-check2', text: 'Emitir métricas personalizadas' },
            { id: 'day22-check3', text: 'Configurar alertas no Amazon CloudWatch' },
            { id: 'day22-check4', text: 'Exceções comuns geradas por SDKs' },
          ],
        },
        {
          id: 'day23',
          title: 'Dia 23: Otimização de Aplicações',
          checklist: [
            { id: 'day23-check1', text: 'Armazenamento em cache' },
            { id: 'day23-check2', text: 'Simultaneidade' },
            { id: 'day23-check3', text: 'Amazon SQS' },
            { id: 'day23-check4', text: 'Amazon SNS' },
          ],
        },
        {
          id: 'day24',
          title: 'Dia 24: Definição de Perfis de Desempenho',
          checklist: [{ id: 'day24-check1', text: 'Uso de políticas de filtro de assinatura' }],
        },
        {
          id: 'day25',
          title: 'Dia 25: Revisão de Solução de Problemas e Otimização',
          checklist: [{ id: 'day25-check1', text: 'Práticas recomendadas' }],
        },
      ],
    },
    {
      id: 'domain5',
      title: 'Revisão e Prática',
      days: [
        {
          id: 'day26',
          title: 'Dia 26: Revisão Geral do Domínio 1',
          checklist: [
            { id: 'day26-check1', text: 'Revisar padrões arquitetônicos' },
            { id: 'day26-check2', text: 'Revisar desenvolvimento com AWS Lambda' },
            { id: 'day26-check3', text: 'Revisar uso de armazenamentos de dados' },
          ],
        },
        {
          id: 'day27',
          title: 'Dia 27: Revisão Geral do Domínio 2',
          checklist: [
            { id: 'day27-check1', text: 'Revisar autenticação e autorização' },
            { id: 'day27-check2', text: 'Revisar políticas de IAM' },
            { id: 'day27-check3', text: 'Revisar criptografia de dados' },
          ],
        },
        {
          id: 'day28',
          title: 'Dia 28: Revisão Geral do Domínio 3',
          checklist: [
            { id: 'day28-check1', text: 'Revisar preparação de artefatos para implantação' },
            {
              id: 'day28-check2',
              text: 'Revisar testes de aplicações em ambientes de desenvolvimento',
            },
            { id: 'day28-check3', text: 'Revisar automação de testes de implantação' },
            {
              id: 'day28-check4',
              text: 'Revisar CI/CD com AWS CodePipeline, CodeBuild e CodeDeploy',
            },
            { id: 'day28-check5', text: 'Revisar estratégias de implantação e reversões' },
          ],
        },
        {
          id: 'day29',
          title: 'Dia 29: Revisão Geral do Domínio 4',
          checklist: [
            { id: 'day29-check1', text: 'Revisar análise de causa raiz' },
            { id: 'day29-check2', text: 'Revisar instrumentação de código para observabilidade' },
            { id: 'day29-check3', text: 'Revisar otimização de aplicações' },
            { id: 'day29-check4', text: 'Revisar definição de perfis de desempenho' },
            {
              id: 'day29-check5',
              text: 'Revisar práticas recomendadas de solução de problemas e otimização',
            },
          ],
        },
        {
          id: 'day30',
          title: 'Dia 30: Simulação de Exame',
          checklist: [
            { id: 'day30-check1', text: 'Prática com questões de múltipla escolha' },
            { id: 'day30-check2', text: 'Prática com questões de múltipla resposta' },
          ],
        },
      ],
    },
  ],
};

export const awsAIPractitionerPlan: StudyPlan = {
  domains: [
    {
      id: 'ai-domain1',
      title: 'Domínio 1: Fundamentos de IA e ML (20%)',
      days: [
        {
          id: 'ai-day1',
          title: 'Dia 1: Conceitos básicos de IA',
          checklist: [
            { id: 'ai-day1-check1', text: 'Definir IA, ML e Deep Learning' },
            { id: 'ai-day1-check2', text: 'Entender redes neurais e aprendizado profundo' },
            { id: 'ai-day1-check3', text: 'Diferenciar treinamento e inferência' },
            { id: 'ai-day1-check4', text: 'Estudar inferência batch vs tempo real' },
          ],
        },
        {
          id: 'ai-day2',
          title: 'Dia 2: Tipos de dados e aprendizado',
          checklist: [
            { id: 'ai-day2-check1', text: 'Tipos de dados: estruturados e não estruturados' },
            { id: 'ai-day2-check2', text: 'Dados rotulados vs não rotulados' },
            { id: 'ai-day2-check3', text: 'Aprendizado supervisionado' },
            { id: 'ai-day2-check4', text: 'Aprendizado não supervisionado e por reforço' },
          ],
        },
        {
          id: 'ai-day3',
          title: 'Dia 3: Casos de uso de IA',
          checklist: [
            { id: 'ai-day3-check1', text: 'Identificar quando IA agrega valor' },
            { id: 'ai-day3-check2', text: 'Identificar quando NÃO usar IA' },
            { id: 'ai-day3-check3', text: 'Estudar regressão, classificação e clusterização' },
            {
              id: 'ai-day3-check4',
              text: 'Revisar exemplos reais de IA (fraude, recomendação, PLN)',
            },
          ],
        },
        {
          id: 'ai-day4',
          title: 'Dia 4: Ciclo de vida de ML e MLOps',
          checklist: [
            { id: 'ai-day4-check1', text: 'Estudar pipeline de ML (dados → deploy)' },
            { id: 'ai-day4-check2', text: 'Entender métricas técnicas (Accuracy, F1, AUC)' },
            { id: 'ai-day4-check3', text: 'Entender métricas de negócio (ROI, custo)' },
            {
              id: 'ai-day4-check4',
              text: 'Conhecer serviços AWS: SageMaker, Feature Store, Model Monitor',
            },
          ],
        },
      ],
    },

    {
      id: 'ai-domain2',
      title: 'Domínio 2: Fundamentos de IA Generativa (24%)',
      days: [
        {
          id: 'ai-day5',
          title: 'Dia 5: Conceitos de IA Generativa',
          checklist: [
            { id: 'ai-day5-check1', text: 'Definir IA generativa' },
            { id: 'ai-day5-check2', text: 'Entender tokens, embeddings e vetores' },
            { id: 'ai-day5-check3', text: 'Estudar LLMs e transformers' },
            { id: 'ai-day5-check4', text: 'Conhecer modelos multimodais e de difusão' },
          ],
        },
        {
          id: 'ai-day6',
          title: 'Dia 6: Casos de uso de GenAI',
          checklist: [
            { id: 'ai-day6-check1', text: 'Chatbots e assistentes virtuais' },
            { id: 'ai-day6-check2', text: 'Resumo e tradução de texto' },
            { id: 'ai-day6-check3', text: 'Geração de código' },
            { id: 'ai-day6-check4', text: 'Geração de imagem, áudio e vídeo' },
          ],
        },
        {
          id: 'ai-day7',
          title: 'Dia 7: Ciclo de vida do modelo de base',
          checklist: [
            { id: 'ai-day7-check1', text: 'Seleção de dados e modelos' },
            { id: 'ai-day7-check2', text: 'Pré-treinamento e fine-tuning' },
            { id: 'ai-day7-check3', text: 'Avaliação e implantação' },
            { id: 'ai-day7-check4', text: 'Importância do feedback contínuo' },
          ],
        },
        {
          id: 'ai-day8',
          title: 'Dia 8: Vantagens e limitações da GenAI',
          checklist: [
            { id: 'ai-day8-check1', text: 'Vantagens: adaptabilidade e velocidade' },
            { id: 'ai-day8-check2', text: 'Limitações: alucinação e não determinismo' },
            { id: 'ai-day8-check3', text: 'Problemas de interpretabilidade' },
            { id: 'ai-day8-check4', text: 'Critérios para escolha de modelos' },
          ],
        },
        {
          id: 'ai-day9',
          title: 'Dia 9: Infraestrutura AWS para GenAI',
          checklist: [
            { id: 'ai-day9-check1', text: 'Estudar Amazon Bedrock' },
            { id: 'ai-day9-check2', text: 'Explorar SageMaker JumpStart' },
            { id: 'ai-day9-check3', text: 'Conhecer PartyRock e Amazon Q' },
            { id: 'ai-day9-check4', text: 'Entender custos baseados em tokens e latência' },
          ],
        },
      ],
    },

    {
      id: 'ai-domain3',
      title: 'Domínio 3: Aplicações de Modelos de Base (28%)',
      days: [
        {
          id: 'ai-day10',
          title: 'Dia 10: Seleção e inferência de modelos',
          checklist: [
            { id: 'ai-day10-check1', text: 'Critérios: custo, latência e tamanho do modelo' },
            { id: 'ai-day10-check2', text: 'Modelos multilíngues vs específicos' },
            { id: 'ai-day10-check3', text: 'Parâmetros de inferência (temperatura, tokens)' },
          ],
        },
        {
          id: 'ai-day11',
          title: 'Dia 11: RAG (Retrieval Augmented Generation)',
          checklist: [
            { id: 'ai-day11-check1', text: 'Definir RAG' },
            { id: 'ai-day11-check2', text: 'Casos de uso empresariais de RAG' },
            { id: 'ai-day11-check3', text: 'Amazon Bedrock + Knowledge Bases' },
            { id: 'ai-day11-check4', text: 'Bancos vetoriais (OpenSearch, Aurora, PostgreSQL)' },
          ],
        },
        {
          id: 'ai-day12',
          title: 'Dia 12: Engenharia de prompts',
          checklist: [
            { id: 'ai-day12-check1', text: 'Estrutura de prompt (contexto e instrução)' },
            { id: 'ai-day12-check2', text: 'Zero-shot, few-shot e chain-of-thought' },
            { id: 'ai-day12-check3', text: 'Prompts negativos e refinamento' },
          ],
        },
        {
          id: 'ai-day13',
          title: 'Dia 13: Boas práticas e riscos',
          checklist: [
            { id: 'ai-day13-check1', text: 'Boas práticas de clareza e especificidade' },
            { id: 'ai-day13-check2', text: 'Experimentação de prompts' },
            { id: 'ai-day13-check3', text: 'Riscos: jailbreak e prompt injection' },
          ],
        },
        {
          id: 'ai-day14',
          title: 'Dia 14: Ajuste fino de modelos',
          checklist: [
            { id: 'ai-day14-check1', text: 'Pré-treinamento vs fine-tuning' },
            { id: 'ai-day14-check2', text: 'Transfer learning' },
            { id: 'ai-day14-check3', text: 'RLHF e preparação de dados' },
          ],
        },
        {
          id: 'ai-day15',
          title: 'Dia 15: Avaliação de modelos',
          checklist: [
            { id: 'ai-day15-check1', text: 'Avaliação humana vs automática' },
            { id: 'ai-day15-check2', text: 'Métricas: BLEU, ROUGE, BERTScore' },
            { id: 'ai-day15-check3', text: 'Alinhamento com objetivos de negócio' },
          ],
        },
      ],
    },

    {
      id: 'ai-domain4',
      title: 'Domínio 4: Diretrizes de IA Responsável (14%)',
      days: [
        {
          id: 'ai-day16',
          title: 'Dia 16: Princípios de IA responsável',
          checklist: [
            { id: 'ai-day16-check1', text: 'Viés e imparcialidade' },
            { id: 'ai-day16-check2', text: 'Inclusão e diversidade de dados' },
            { id: 'ai-day16-check3', text: 'Robustez, segurança e veracidade' },
          ],
        },
        {
          id: 'ai-day17',
          title: 'Dia 17: Ferramentas AWS para IA responsável',
          checklist: [
            { id: 'ai-day17-check1', text: 'Guardrails do Amazon Bedrock' },
            { id: 'ai-day17-check2', text: 'SageMaker Clarify' },
            { id: 'ai-day17-check3', text: 'Amazon A2I' },
            { id: 'ai-day17-check4', text: 'Monitoramento de viés e qualidade' },
          ],
        },
        {
          id: 'ai-day18',
          title: 'Dia 18: Transparência e explicabilidade',
          checklist: [
            { id: 'ai-day18-check1', text: 'Modelos explicáveis vs não explicáveis' },
            { id: 'ai-day18-check2', text: 'Model Cards do SageMaker' },
            { id: 'ai-day18-check3', text: 'Trade-off segurança vs transparência' },
          ],
        },
      ],
    },

    {
      id: 'ai-domain5',
      title: 'Domínio 5: Segurança, Conformidade e Governança (14%)',
      days: [
        {
          id: 'ai-day19',
          title: 'Dia 19: Segurança em soluções de IA',
          checklist: [
            { id: 'ai-day19-check1', text: 'IAM: políticas, permissões e papéis' },
            { id: 'ai-day19-check2', text: 'Criptografia em repouso e em trânsito' },
            { id: 'ai-day19-check3', text: 'Modelo de responsabilidade compartilhada' },
            { id: 'ai-day19-check4', text: 'Proteção contra prompt injection' },
          ],
        },
        {
          id: 'ai-day20',
          title: 'Dia 20: Governança e conformidade',
          checklist: [
            { id: 'ai-day20-check1', text: 'Padrões ISO e SOC' },
            { id: 'ai-day20-check2', text: 'AWS Config e CloudTrail' },
            { id: 'ai-day20-check3', text: 'AWS Audit Manager e Artifact' },
            { id: 'ai-day20-check4', text: 'Governança e ciclo de vida dos dados' },
          ],
        },
      ],
    },

    {
      id: 'ai-review-practice',
      title: 'Revisão e Prática Final',
      days: [
        {
          id: 'ai-day21',
          title: 'Dia 21: Revisão Domínio 1',
          checklist: [
            { id: 'ai-day21-check1', text: 'Revisar conceitos básicos de IA e ML' },
            { id: 'ai-day21-check2', text: 'Revisar ciclo de vida de ML e métricas' },
          ],
        },
        {
          id: 'ai-day22',
          title: 'Dia 22: Revisão Domínio 2',
          checklist: [
            { id: 'ai-day22-check1', text: 'Revisar conceitos de IA generativa' },
            { id: 'ai-day22-check2', text: 'Revisar serviços AWS para GenAI' },
          ],
        },
        {
          id: 'ai-day23',
          title: 'Dia 23: Revisão Domínio 3',
          checklist: [
            { id: 'ai-day23-check1', text: 'Revisar RAG e engenharia de prompts' },
            { id: 'ai-day23-check2', text: 'Revisar avaliação e fine-tuning' },
          ],
        },
        {
          id: 'ai-day24',
          title: 'Dia 24: Revisão Domínios 4 e 5',
          checklist: [
            { id: 'ai-day24-check1', text: 'Revisar IA responsável e viés' },
            { id: 'ai-day24-check2', text: 'Revisar segurança e governança' },
          ],
        },
        {
          id: 'ai-day25',
          title: 'Dia 25: Revisão geral',
          checklist: [
            { id: 'ai-day25-check1', text: 'Revisar termos-chave do exame' },
            { id: 'ai-day25-check2', text: 'Revisar comparações e trade-offs' },
          ],
        },
        {
          id: 'ai-day26',
          title: 'Dia 26: Questões Domínios 1 e 2',
          checklist: [
            { id: 'ai-day26-check1', text: 'Resolver questões práticas' },
            { id: 'ai-day26-check2', text: 'Analisar erros e lacunas' },
          ],
        },
        {
          id: 'ai-day27',
          title: 'Dia 27: Questões Domínio 3',
          checklist: [
            { id: 'ai-day27-check1', text: 'Resolver questões focadas em RAG e prompts' },
          ],
        },
        {
          id: 'ai-day28',
          title: 'Dia 28: Questões Domínios 4 e 5',
          checklist: [
            { id: 'ai-day28-check1', text: 'Resolver questões de IA responsável e segurança' },
          ],
        },
        {
          id: 'ai-day29',
          title: 'Dia 29: Simulado completo',
          checklist: [
            { id: 'ai-day29-check1', text: 'Realizar simulado cronometrado' },
            { id: 'ai-day29-check2', text: 'Revisar respostas incorretas' },
          ],
        },
        {
          id: 'ai-day30',
          title: 'Dia 30: Revisão final',
          checklist: [
            { id: 'ai-day30-check1', text: 'Revisar pontos fracos' },
            { id: 'ai-day30-check2', text: 'Revisar serviços AWS mais cobrados' },
            { id: 'ai-day30-check3', text: 'Descansar antes da prova' },
          ],
        },
      ],
    },
  ],
};

export interface FooterConfig {
  examName: string;
  examLink: string;
  lastAccessDate: string;
}

export interface PlanConfig {
  id: string;
  title: string;
  data: StudyPlan;
  style: {
    backgroundGradient: string; // CSS linear-gradient string
    borderColor: string; // Used for glow effect
    color: string;
  };
  footerConfig: FooterConfig;
}

export const availablePlans: PlanConfig[] = [
  {
    id: 'aws-developer-associate',
    title: 'AWS Certified Developer - Associate',
    data: awsDeveloperAssociatePlan,
    style: {
      backgroundGradient: 'linear-gradient(135deg, #0d47a1 0%, #42a5f5 100%)', // Dark Blue to Light Blue
      borderColor: '#80bdff', // Light Blue for glow
      color: 'white',
    },
    footerConfig: {
      examName: 'AWS Certified Developer – Associate (DVA-C02)',
      examLink:
        'https://d1.awsstatic.com/pt_BR/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf',
      lastAccessDate: '10/02/25',
    },
  },
  {
    id: 'aws-ai-practitioner',
    title: 'AWS AI Practitioner',
    data: awsAIPractitionerPlan,
    style: {
      backgroundGradient: 'linear-gradient(135deg, #000000 0%, #434343 100%)', // Black to Dark Grey
      borderColor: '#c0c0c0', // Silver for glow
      color: 'white',
    },
    footerConfig: {
      examName: 'AWS Certified AI Practitioner (AIF-C01)',
      examLink:
        'https://d1.awsstatic.com/onedam/marketing-channels/website/aws/pt_BR/certification/approved/pdfs/docs-ai-practitioner/AWS-Certified-AI-Practitioner_Exam-Guide.pdf',
      lastAccessDate: '08/01/2026',
    },
  },
];
