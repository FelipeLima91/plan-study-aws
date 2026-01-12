import { FooterConfig } from '../data/studyPlan';

interface FooterProps {
  config?: FooterConfig;
}

export function Footer({ config }: FooterProps) {
  return (
    <div className="footer">
      {config && (
        <p>
          Baseado no{' '}
          <a href={config.examLink} target="_blank" rel="noopener noreferrer">
            {config.examName}
          </a>{' '}
          na data de {config.lastAccessDate}. Este guia pode estar desatualizado ou excluído,
          consulte diretamente o site de treinamento da AWS para informações atualizadas.
        </p>
      )}
      <p>Versão 2.1.0 - Feito com ❤️ por Felipe Lima</p>
      <p>
        <a
          href="https://github.com/FelipeLima91/plan-study-aws"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="https://www.linkedin.com/in/felipe-lima-de-oliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
