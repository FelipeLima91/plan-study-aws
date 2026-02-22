import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { availablePlans } from './data/studyPlan';
import { PlanSelection } from './components/PlanSelection';
import { StudyPlanView } from './components/StudyPlanView';

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    const savedPlanId = localStorage.getItem('selectedPlanId');
    if (savedPlanId) {
      // Improve robustness: check if plan actually exists
      const planExists = availablePlans.some((p) => p.id === savedPlanId);
      if (planExists) {
        setSelectedPlanId(savedPlanId);
      }
    }
  }, []);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    localStorage.setItem('selectedPlanId', planId);
  };

  const handleBack = () => {
    setSelectedPlanId(null);
    localStorage.removeItem('selectedPlanId');
  };

  const selectedPlan = availablePlans.find((p) => p.id === selectedPlanId);

  return (
    <AnimatePresence mode="wait">
      {selectedPlan ? (
        <div style={{ padding: '20px', overflowX: 'hidden' }}>
          <StudyPlanView key="plan-view" planConfig={selectedPlan} onBack={handleBack} />
        </div>
      ) : (
        <PlanSelection
          key="plan-selection"
          plans={availablePlans}
          onSelectPlan={handleSelectPlan}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
