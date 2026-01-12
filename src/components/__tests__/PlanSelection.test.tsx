import '@testing-library/jest-dom';
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlanSelection } from '../PlanSelection';
import { PlanConfig } from '../../data/studyPlan';

const mockPlans: PlanConfig[] = [
  {
    id: 'plan-1',
    title: 'AWS Solutions Architect',
    description: 'Preparação para SAA',
    style: {
      backgroundGradient: 'linear-gradient(135deg, #FF9900, #FF6B00)',
      color: '#FFFFFF',
    },
    data: {
      domains: [],
    },
    footerConfig: {
      examName: 'AWS Certified Solutions Architect - Associate',
      examLink: 'https://aws.amazon.com/certification/',
      lastAccessDate: '2026-01-08',
    },
  },
  {
    id: 'plan-2',
    title: 'AWS Developer',
    description: 'Preparação para Developer',
    style: {
      backgroundGradient: 'linear-gradient(135deg, #FF9900, #FF6B00)',
      color: '#FFFFFF',
    },
    data: {
      domains: [],
    },
    footerConfig: {
      examName: 'AWS Certified Developer - Associate',
      examLink: 'https://aws.amazon.com/certification/',
      lastAccessDate: '2026-01-08',
    },
  },
];

describe('PlanSelection', () => {
  it('deve renderizar título', () => {
    const mockHandler = jest.fn();
    render(<PlanSelection plans={mockPlans} onSelectPlan={mockHandler} />);
    expect(screen.getByText(/Escolha seu Plano de Estudos/i)).toBeInTheDocument();
  });

  it('deve renderizar todos os planos', () => {
    const mockHandler = jest.fn();
    render(<PlanSelection plans={mockPlans} onSelectPlan={mockHandler} />);
    expect(screen.getByText('AWS Solutions Architect')).toBeInTheDocument();
    expect(screen.getByText('AWS Developer')).toBeInTheDocument();
  });

  it('deve chamar onSelectPlan ao clicar em um plano', async () => {
    const user = userEvent.setup();
    const mockHandler = jest.fn();
    render(<PlanSelection plans={mockPlans} onSelectPlan={mockHandler} />);

    const button = screen.getByRole('button', {
      name: /AWS Solutions Architect/i,
    });
    await user.click(button);

    expect(mockHandler).toHaveBeenCalledWith('plan-1');
  });

  it('deve renderizar Footer', () => {
    const mockHandler = jest.fn();
    render(<PlanSelection plans={mockPlans} onSelectPlan={mockHandler} />);
    expect(screen.getByText(/Felipe Lima/i)).toBeInTheDocument();
  });
});
