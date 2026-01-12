import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Day } from '../Day';
import { Day as DayType } from '../../types';

// Mock do hook useStudyPlan para os componentes filhos (CheckboxItem)
jest.mock('../../contexts/StudyPlanContext', () => ({
  useStudyPlan: () => ({
    inputValues: {},
    toggleItem: jest.fn(),
  }),
}));

const mockDay: DayType = {
  id: 'day-1',
  title: 'Day 1 - EC2 Basics',
  checklist: [
    { id: 'check-1', text: 'Learn about instances' },
    { id: 'check-2', text: 'Understand security groups' },
  ],
};

describe('Day', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve renderizar o título do dia', () => {
    render(<Day day={mockDay} />);
    expect(screen.getByText('Day 1 - EC2 Basics')).toBeInTheDocument();
  });

  it('deve renderizar todos os itens do checklist', () => {
    render(<Day day={mockDay} />);
    expect(screen.getByText('Learn about instances')).toBeInTheDocument();
    expect(screen.getByText('Understand security groups')).toBeInTheDocument();
  });

  it('deve ter o id correto no elemento div', () => {
    const { container } = render(<Day day={mockDay} />);
    const dayDiv = container.querySelector('#day-1');
    expect(dayDiv).toBeInTheDocument();
  });

  it('deve renderizar o componente PostIt', () => {
    render(<Day day={mockDay} />);
    // PostIt é renderizado, então sua textarea deve estar presente
    const textareas = screen.getAllByPlaceholderText(/anotações|note/i);
    expect(textareas.length).toBeGreaterThan(0);
  });
});
