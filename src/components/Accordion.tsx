import { useState } from 'react';
import { Domain } from '../types';
import { Day } from './Day';

interface AccordionProps {
  domain: Domain;
}

export function Accordion({ domain }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
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
    </div>
  );
}
