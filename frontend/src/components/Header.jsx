import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../style/Header.module.scss';
import Dropdown from './Dropdown';
import { IoBagCheck } from 'react-icons/io5';

function Header({ selectedLevel, handleOptionClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === '/';

  const handleNavigate = () => {
    navigate('/wordBox');
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.brand} onClick={() => navigate('/')}>
          <div className={styles.brandContent}>
            <h1 className={styles.headerTitle}>
              <span className={styles.wordBank}>WORD BANK</span>
            </h1>
            <p className={styles.year}>2025</p>
          </div>
        </div>
        <div className={styles.backButtonContainer}>
          {!homePage && (
            <button className={styles.backButton} onClick={() => navigate('/')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>Geri</span>
            </button>
          )}
        </div>
        {homePage && (
          <div className={styles.dropdownContainer}>
            <button
              className={styles.bagCheck}
              onClick={() => handleNavigate()}
            >
              <IoBagCheck />
              <span className={styles.bagTooltip}>Kelime Kutusu</span>
            </button>
            <div className={styles.dropdownWrapper}>
              <Dropdown
                selectedLevel={selectedLevel}
                handleOptionClick={handleOptionClick}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
