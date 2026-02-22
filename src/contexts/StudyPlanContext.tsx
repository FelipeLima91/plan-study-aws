/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PlanConfig } from '../data/studyPlan';

interface StudyPlanContextType {
  inputValues: Record<string, boolean>;
  toggleItem: (id: string) => void;
  getDomainProgress: (domainId: string) => number;
  totalProgress: number;
  completedDomainsCount: number;
  totalDomainsCount: number;
}

const StudyPlanContext = createContext<StudyPlanContextType | undefined>(undefined);

interface StudyPlanProviderProps {
  children: ReactNode;
  planConfig: PlanConfig;
}

export function StudyPlanProvider({ children, planConfig }: StudyPlanProviderProps) {
  const [inputValues, setInputValues] = useState<Record<string, boolean>>({});

  // Initialize state from localStorage
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    const allCheckboxes: string[] = [];

    planConfig.data.domains.forEach((domain) => {
      domain.days.forEach((day) => {
        day.checklist.forEach((item) => {
          allCheckboxes.push(item.id);
          const saved = localStorage.getItem(item.id);
          if (saved === 'true') {
            initialState[item.id] = true;
          }
        });
      });
    });
    setInputValues(initialState);
  }, [planConfig]);

  const toggleItem = (id: string) => {
    setInputValues((prev) => {
      const newState = !prev[id];
      const nextValues = { ...prev, [id]: newState };

      // Persist to localStorage
      if (newState) {
        localStorage.setItem(id, 'true');
      } else {
        localStorage.removeItem(id);
      }

      return nextValues;
    });
  };

  const getDomainProgress = (domainId: string) => {
    const domain = planConfig.data.domains.find((d) => d.id === domainId);
    if (!domain) return 0;

    let total = 0;
    let completed = 0;

    domain.days.forEach((day) => {
      day.checklist.forEach((item) => {
        total++;
        if (inputValues[item.id]) {
          completed++;
        }
      });
    });

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  const totalProgress = (() => {
    let total = 0;
    let completed = 0;

    planConfig.data.domains.forEach((domain) => {
      domain.days.forEach((day) => {
        day.checklist.forEach((item) => {
          total++;
          if (inputValues[item.id]) {
            completed++;
          }
        });
      });
    });

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  })();

  const completedDomainsCount = planConfig.data.domains.filter(
    (domain) => getDomainProgress(domain.id) === 100,
  ).length;

  const totalDomainsCount = planConfig.data.domains.length;

  return (
    <StudyPlanContext.Provider
      value={{
        inputValues,
        toggleItem,
        getDomainProgress,
        totalProgress,
        completedDomainsCount,
        totalDomainsCount,
      }}
    >
      {children}
    </StudyPlanContext.Provider>
  );
}

export function useStudyPlan() {
  const context = useContext(StudyPlanContext);
  if (context === undefined) {
    throw new Error('useStudyPlan must be used within a StudyPlanProvider');
  }
  return context;
}
