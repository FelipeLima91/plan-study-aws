import '@testing-library/jest-dom';
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('deve renderizar o elemento footer no DOM', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('deve renderizar o nome do projeto', () => {
    render(<Footer />);
    expect(screen.getByText(/Plano de Estudos AWS/i)).toBeInTheDocument();
  });

  it('deve renderizar o crédito do autor', () => {
    render(<Footer />);
    expect(screen.getByText(/Felipe Lima/i)).toBeInTheDocument();
  });

  it('deve renderizar exatamente 3 links sociais', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('deve renderizar link correto para GitHub', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/FelipeLima91/plan-study-aws');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar link correto para LinkedIn', () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/felipe-lima-de-oliveira/',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar link correto para o Portfólio', () => {
    render(<Footer />);
    const portfolioLink = screen.getByRole('link', { name: /portfólio/i });
    expect(portfolioLink).toHaveAttribute('href', 'https://felipelima91.github.io/portfolio/');
    expect(portfolioLink).toHaveAttribute('target', '_blank');
    expect(portfolioLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('todos os links devem abrir em nova aba com segurança', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
