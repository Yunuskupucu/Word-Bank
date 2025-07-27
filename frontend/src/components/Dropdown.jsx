import React, { useState, useRef, useEffect } from 'react';
import styles from '../style/Dropdown.module.scss';

const Dropdown = ({ selectedLevel, handleOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const levels = [
    { value: 'CEFR: All', label: 'Tüm Seviyeler', color: '#667eea' },
    { value: 'CEFR: A1', label: 'Başlangıç (A1)', color: '#4ade80' },
    { value: 'CEFR: A2', label: 'Temel (A2)', color: '#22d3ee' },
    { value: 'CEFR: B1', label: 'Orta Alt (B1)', color: '#fbbf24' },
    { value: 'CEFR: B2', label: 'Orta Üst (B2)', color: '#f97316' },
    { value: 'CEFR: C1', label: 'İleri (C1)', color: '#ef4444' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getSelectedOption = () => {
    return levels.find((level) => level.value === selectedLevel) || levels[0];
  };

  // dropdown dışına tıklayınca kapansın
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div
        className={`${styles.dropdownHeader} ${isOpen ? styles.active : ''}`}
        onClick={toggleDropdown}
      >
        <div className={styles.selectedOption}>
          <div
            className={styles.levelIndicator}
            style={{ backgroundColor: getSelectedOption().color }}
          ></div>
          <span className={styles.selectedText}>
            {getSelectedOption().label}
          </span>
        </div>

        {/* dropdown oku */}
        <div className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
      </div>

      <div className={`${styles.dropdownOptions} ${isOpen ? styles.open : ''}`}>
        <div className={styles.optionsContainer}>
          {levels.map((option, index) => (
            <div
              key={index}
              className={`${styles.dropdownOption} ${
                selectedLevel === option.value ? styles.selected : ''
              }`}
              onClick={() => {
                handleOptionClick(option.value);
                setIsOpen(false);
              }}
            >
              <div
                className={styles.optionIndicator}
                style={{ backgroundColor: option.color }}
              ></div>
              <div className={styles.optionContent}>
                <span className={styles.optionLabel}>{option.label}</span>
                <span className={styles.optionValue}>{option.value}</span>
              </div>
              {selectedLevel === option.value && (
                <div className={styles.checkmark}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
