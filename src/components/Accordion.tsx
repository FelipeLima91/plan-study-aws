import { motion } from 'framer-motion';
import { Domain } from '../types';
import { Day } from './Day';
import { useLocalStorageBoolean } from '../hooks/useLocalStorage';
import { useStudyPlan } from '../contexts/StudyPlanContext';

interface AccordionProps {
  domain: Domain;
  planId: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Accordion({ domain, planId }: AccordionProps) {
  const { getDomainProgress } = useStudyPlan();
  const [isOpen, setIsOpen] = useLocalStorageBoolean(`accordion_${planId}_${domain.id}`, false);
  const progress = getDomainProgress(domain.id);

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    setIsOpen(e.currentTarget.open);
  };

  return (
    <motion.div variants={itemVariants}>
      <details
        className="collapse collapse-arrow bg-base-100 border border-base-200 rounded-lg mb-2 accordion-hover"
        open={isOpen}
        onToggle={handleToggle}
      >
        <summary className="collapse-title font-semibold text-base flex items-center justify-between px-2 pl-4 py-2 md:px-4 md:py-4 pr-10 md:pr-10">
          <span>{domain.title}</span>
          <span className="text-sm opacity-70 ml-auto mr-2">{progress}%</span>
        </summary>
        <div className="collapse-content px-2 pb-2 md:px-4 md:pb-4">
          {domain.days.map((day) => (
            <Day key={day.id} day={day} />
          ))}
        </div>
      </details>
    </motion.div>
  );
}
