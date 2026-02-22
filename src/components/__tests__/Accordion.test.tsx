import '@testing-library/jest-dom';
import { describe, it, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../Accordion';
import { Domain } from '../../types';

const mockDomain: Domain = {
  id: 'domain-1',
  title: 'EC2',
  days: [
    {
      id: 'day-1',
      title: 'Day 1 - Basics',
      checklist: [{ id: 'check-1', text: 'Learn about instances' }],
    },
  ],
};

jest.mock('../../contexts/StudyPlanContext', () => ({
  useStudyPlan: () => ({
    getDomainProgress: jest.fn().mockReturnValue(50),
    inputValues: {},
    toggleItem: jest.fn(),
  }),
}));

describe('Accordion', () => {
  it('deve renderizar o título do domínio', () => {
    render(<Accordion domain={mockDomain} planId="test-plan" />);
    expect(screen.getByText('EC2')).toBeInTheDocument();
  });

  it('deve alternar entre aberto e fechado ao clicar', async () => {
    const user = userEvent.setup();
    render(<Accordion domain={mockDomain} planId="test-plan" />);

    const details = document.querySelector('details') as HTMLDetailsElement;
    expect(details).toBeTruthy();

    // Começa fechado
    expect(details.open).toBe(false);

    // Clica no summary para abrir
    const summary = screen.getByText('EC2');
    await user.click(summary);
    expect(details.open).toBe(true);

    // Clica novamente para fechar
    await user.click(summary);
    expect(details.open).toBe(false);
  });

  it('deve exibir os dias quando aberto', async () => {
    const user = userEvent.setup();
    render(<Accordion domain={mockDomain} planId="test-plan" />);

    const summary = screen.getByText('EC2');
    await user.click(summary);

    expect(screen.getByText('Day 1 - Basics')).toBeInTheDocument();
  });

  it('deve exibir a porcentagem de progresso', () => {
    render(<Accordion domain={mockDomain} planId="test-plan" />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });
});
