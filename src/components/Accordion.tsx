import { useState } from 'react';
import { motion } from 'framer-motion';
import { Domain } from '../types';
import { Day } from './Day';

interface AccordionProps {
  domain: Domain;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Accordion({ domain }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="accordion"
      variants={itemVariants}
    >
      <button
        className={`accordion-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{domain.title}</span>
        <span className="accordion-icon">{isOpen ? '▼' : '▶'}</span>
      </button>
      <div className={`accordion-content ${isOpen ? 'active' : ''}`}>
        {domain.days.map((day) => (
          <Day key={day.id} day={day} />
        ))}
      </div>
    </motion.div>
  );
}
