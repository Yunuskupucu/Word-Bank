import React, { useState } from 'react';
import styles from '../style/Dropdown.module.scss';

const Dropdown = ({ selectedLevel, handleOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    'CEFR: All',
    'CEFR: A1',
    'CEFR: A2',
    'CEFR: B1',
    'CEFR: B2',
    'CEFR: C1',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {selectedLevel}▼
      </div>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.dropdownOption}
              onClick={() => {
                handleOptionClick(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
