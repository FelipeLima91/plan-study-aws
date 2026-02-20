import { PlanConfig } from '../data/studyPlan';
import { HeroSection } from './HeroSection';

interface PlanSelectionProps {
  plans: PlanConfig[];
  onSelectPlan: (planId: string) => void;
}

export function PlanSelection({ plans, onSelectPlan }: PlanSelectionProps) {
  return <HeroSection plans={plans} onSelectPlan={onSelectPlan} />;
}
