import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { availablePlans } from './data/studyPlan';
import { PlanSelection } from './components/PlanSelection';
import { StudyPlanView } from './components/StudyPlanView';
// Footer imported removed

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
    <div className="container" style={{ overflowX: 'hidden' }}>
      <AnimatePresence mode="wait">
        {selectedPlan ? (
          <StudyPlanView key="plan-view" planConfig={selectedPlan} onBack={handleBack} />
        ) : (
          <PlanSelection
            key="plan-selection"
            plans={availablePlans}
            onSelectPlan={handleSelectPlan}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
