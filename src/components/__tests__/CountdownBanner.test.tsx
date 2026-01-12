import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CountdownBanner } from '../CountdownBanner';

describe('CountdownBanner', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar o banner sem erro', () => {
    render(<CountdownBanner planId="plan-1" />);
    const banner = screen.getByText(/Insira a data da prova abaixo|Faltam/i);
    expect(banner).toBeInTheDocument();
  });

  it('deve renderizar botão de volta se onBack for fornecido', () => {
    const mockOnBack = jest.fn();
    render(<CountdownBanner planId="plan-1" onBack={mockOnBack} />);

    const backButton = screen.getByRole('button');
    expect(backButton).toBeInTheDocument();
  });

  it('deve chamar onBack quando clicar no botão voltar', async () => {
    const user = userEvent.setup();
    const mockOnBack = jest.fn();
    render(<CountdownBanner planId="plan-1" onBack={mockOnBack} />);

    const backButton = screen.getByRole('button');
    await user.click(backButton);

    expect(mockOnBack).toHaveBeenCalled();
  });

  it('deve exibir mensagem padrão quando não tem data de prova', () => {
    render(<CountdownBanner planId="plan-1" />);
    expect(screen.getByText(/Insira a data da prova abaixo/i)).toBeInTheDocument();
  });
});
