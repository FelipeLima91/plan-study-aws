import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { StudyPlanView } from '../StudyPlanView';
import { PlanConfig } from '../../data/studyPlan';

const mockPlanConfig: PlanConfig = {
  id: 'plan-1',
  title: 'AWS Solutions Architect',
  description: 'Preparação para SAA',
  style: {
    backgroundGradient: 'linear-gradient(135deg, #FF9900, #FF6B00)',
    color: '#FFFFFF',
  },
  data: {
    domains: [
      {
        id: 'domain-1',
        title: 'EC2',
        days: [
          {
            id: 'day-1',
            title: 'Day 1',
            checklist: [{ id: 'check-1', text: 'Learn basics' }],
          },
        ],
      },
    ],
  },
  footerConfig: {
    examName: 'AWS Certified Solutions Architect - Associate',
    examLink: 'https://aws.amazon.com/certification/',
    lastAccessDate: '2026-01-08',
  },
};

describe('StudyPlanView', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar o título do plano', () => {
    const mockOnBack = jest.fn();
    render(<StudyPlanView planConfig={mockPlanConfig} onBack={mockOnBack} />);
    expect(screen.getByText('AWS Solutions Architect')).toBeInTheDocument();
  });

  it('deve renderizar descrição do plano', () => {
    const mockOnBack = jest.fn();
    render(<StudyPlanView planConfig={mockPlanConfig} onBack={mockOnBack} />);
    expect(screen.getByText(/Plano de estudo preparado/i)).toBeInTheDocument();
  });

  it('deve renderizar alerta sobre cache local', () => {
    const mockOnBack = jest.fn();
    render(<StudyPlanView planConfig={mockPlanConfig} onBack={mockOnBack} />);
    expect(screen.getByText(/salvas em cache localmente/i)).toBeInTheDocument();
  });

  it('deve renderizar componente CountdownBanner', () => {
    const mockOnBack = jest.fn();
    render(<StudyPlanView planConfig={mockPlanConfig} onBack={mockOnBack} />);
    expect(screen.getByText(/Insira a data da prova|Faltam/i)).toBeInTheDocument();
  });

  it('deve renderizar componente ExamDateForm', () => {
    const mockOnBack = jest.fn();
    render(<StudyPlanView planConfig={mockPlanConfig} onBack={mockOnBack} />);
    const labels = screen.getAllByText(/Data da Prova/i);
    expect(labels.length).toBeGreaterThan(0);
  });

  it('deve renderizar todos os domínios', () => {
    const mockOnBack = jest.fn();
    render(<StudyPlanView planConfig={mockPlanConfig} onBack={mockOnBack} />);
    expect(screen.getByText('EC2')).toBeInTheDocument();
  });

  it('deve renderizar Footer', () => {
    const mockOnBack = jest.fn();
    render(<StudyPlanView planConfig={mockPlanConfig} onBack={mockOnBack} />);
    expect(screen.getByText(/Felipe Lima/i)).toBeInTheDocument();
  });
});
