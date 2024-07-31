import React, { useState } from 'react';
import '../Accordion.scss';
import '../mixins.scss';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
       <button className={`accordion-title ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}
      >
        {title}
        <span className={`accordion-icon ${isOpen ? 'open' : 'closed'}`}>
          {isOpen ? (
            <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path d="M8 5.5L1.5 12a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5L8 5.5z"/>
            </svg>
          ) : (
            <svg width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path d="M1.5 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5L8 10 1.5 5.5z"/>
            </svg>
          )}
        </span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;

