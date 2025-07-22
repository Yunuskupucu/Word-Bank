import React, { useState } from 'react';
import styles from '../style/Dropdown.module.scss';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('CEFR: A1');

  const options = ['CEFR: A1', 'CEFR: A2', 'CEFR: B1', 'CEFR: B2', 'CEFR: C1'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  console.log(selectedOption);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {selectedOption}▼
      </div>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.dropdownOption}
              onClick={() => handleOptionClick(option)}
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
