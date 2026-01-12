import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Mocks para os componentes filhos para testar apenas a lógica do App
jest.mock('../components/PlanSelection', () => ({
  PlanSelection: ({ onSelectPlan }: { onSelectPlan: (id: string) => void }) => (
    <div data-testid="plan-selection">
      <h1>Selecione um Plano</h1>
      <button onClick={() => onSelectPlan('plan-1')}>Selecionar Plano 1</button>
    </div>
  ),
}));

jest.mock('../components/StudyPlanView', () => ({
  StudyPlanView: ({ onBack }: { onBack: () => void }) => (
    <div data-testid="study-plan-view">
      <h1>Visualização do Plano</h1>
      <button onClick={onBack}>Voltar</button>
    </div>
  ),
}));

// Mock dos dados
jest.mock('../data/studyPlan', () => ({
  availablePlans: [
    { id: 'plan-1', title: 'Plano Teste 1' },
    { id: 'plan-2', title: 'Plano Teste 2' },
  ],
}));

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar a seleção de planos inicialmente', () => {
    render(<App />);
    expect(screen.getByTestId('plan-selection')).toBeInTheDocument();
  });

  it('deve navegar para a visualização do plano ao selecionar um plano', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByText('Selecionar Plano 1');
    await user.click(button);

    expect(screen.getByTestId('study-plan-view')).toBeInTheDocument();
  });

  it('deve permitir voltar para a seleção de planos', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Seleciona plano
    const selectButton = screen.getByText('Selecionar Plano 1');
    await user.click(selectButton);

    // Clica em voltar
    const backButton = screen.getByText('Voltar');
    await user.click(backButton);

    expect(screen.getByTestId('plan-selection')).toBeInTheDocument();
  });

  it('deve recuperar o plano selecionado do localStorage', () => {
    localStorage.setItem('selectedPlanId', 'plan-1');
    render(<App />);
    expect(screen.getByTestId('study-plan-view')).toBeInTheDocument();
  });

  it('deve ignorar ID inválido no localStorage', () => {
    localStorage.setItem('selectedPlanId', 'invalid-id');
    render(<App />);
    expect(screen.getByTestId('plan-selection')).toBeInTheDocument();
  });
});
