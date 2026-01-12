import { motion } from 'framer-motion';
import { Domain } from '../types';
import { Day } from './Day';

interface AccordionProps {
  domain: Domain;
  planId: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

import { useLocalStorageBoolean } from '../hooks/useLocalStorage'; // Import hook
import { useStudyPlan } from '../contexts/StudyPlanContext';

export function Accordion({ domain, planId }: AccordionProps) {
  const { getDomainProgress } = useStudyPlan();
  // Unique key for local storage based on plan and domain
  const [isOpen, setIsOpen] = useLocalStorageBoolean(`accordion_${planId}_${domain.id}`, false);
  const progress = getDomainProgress(domain.id);

  const handleToggle = () => {
     setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="accordion"
      variants={itemVariants}
    >
      <button
        className={`accordion-button ${isOpen ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <span style={{textAlign: 'left'}}>{domain.title}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.8em', opacity: 0.8 }}>{progress}%</span>
                <span className="accordion-icon">{isOpen ? '▼' : '▶'}</span>
            </div>
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? 'active' : ''}`}>
        {domain.days.map((day) => (
          <Day key={day.id} day={day} />
        ))}
      </div>
    </motion.div>
  );
}
