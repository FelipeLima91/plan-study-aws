import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { ExamDateForm } from '../ExamDateForm';

describe('ExamDateForm', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar o formulário em modo de entrada', () => {
    render(<ExamDateForm planId="plan-1" hideExamDate={false} setHideExamDate={jest.fn()} />);
    // Verify the "Incluir data da prova" button is rendered initially
    expect(screen.getByRole('button', { name: /Incluir data da prova/i })).toBeInTheDocument();
  });

  it('deve renderizar botão de salvar', () => {
    render(<ExamDateForm planId="plan-1" hideExamDate={false} setHideExamDate={jest.fn()} />);
    expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
  });

  it('deve renderizar o modal de definir data', () => {
    render(<ExamDateForm planId="plan-1" hideExamDate={false} setHideExamDate={jest.fn()} />);
    expect(screen.getByText(/Definir data da prova/i)).toBeInTheDocument();
  });
});
