/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from 'react';
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
  const [domainStats, setDomainStats] = useState<
    Record<string, { total: number; completed: number }>
  >({});

  const itemToDomainMap = useMemo(() => {
    const map: Record<string, string> = {};
    planConfig.data.domains.forEach((domain) => {
      domain.days.forEach((day) => {
        day.checklist.forEach((item) => {
          map[item.id] = domain.id;
        });
      });
    });
    return map;
  }, [planConfig]);

  useEffect(() => {
    const initialInputs: Record<string, boolean> = {};
    const initialStats: Record<string, { total: number; completed: number }> = {};

    planConfig.data.domains.forEach((domain) => {
      let total = 0;
      let completed = 0;

      domain.days.forEach((day) => {
        day.checklist.forEach((item) => {
          total++;
          const saved = localStorage.getItem(item.id);
          if (saved === 'true') {
            initialInputs[item.id] = true;
            completed++;
          }
        });
      });

      initialStats[domain.id] = { total, completed };
    });

    setInputValues(initialInputs);
    setDomainStats(initialStats);
  }, [planConfig]);

  const toggleItem = useCallback(
    (id: string) => {
      setInputValues((prev) => {
        const newState = !prev[id];
        const nextValues = { ...prev, [id]: newState };

        if (newState) {
          localStorage.setItem(id, 'true');
        } else {
          localStorage.removeItem(id);
        }

        const domainId = itemToDomainMap[id];
        if (domainId) {
          setDomainStats((ds) => ({
            ...ds,
            [domainId]: {
              ...ds[domainId],
              completed: ds[domainId].completed + (newState ? 1 : -1),
            },
          }));
        }

        return nextValues;
      });
    },
    [itemToDomainMap],
  );

  const getDomainProgress = useCallback(
    (domainId: string) => {
      const stats = domainStats[domainId];
      if (!stats || stats.total === 0) return 0;
      return Math.round((stats.completed / stats.total) * 100);
    },
    [domainStats],
  );

  const totalProgress = useMemo(() => {
    let total = 0;
    let completed = 0;
    Object.values(domainStats).forEach((stats) => {
      total += stats.total;
      completed += stats.completed;
    });
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  }, [domainStats]);

  const completedDomainsCount = useMemo(() => {
    return Object.values(domainStats).filter(
      (stats) => stats.total > 0 && stats.completed === stats.total,
    ).length;
  }, [domainStats]);

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
