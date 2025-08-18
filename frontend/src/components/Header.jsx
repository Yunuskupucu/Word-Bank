import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../style/Header.module.scss';
import Dropdown from './Dropdown';
import { IoBagCheck, IoExitOutline } from 'react-icons/io5';

function Header({ selectedLevel, handleOptionClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/home';

  const handleNavigate = () => {
    navigate('/wordBox');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
    navigate('/login');
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        {isHome && (
          <Dropdown
            selectedLevel={selectedLevel}
            handleOptionClick={handleOptionClick}
          />
        )}

        {!isHome && location.pathname !== '/' && (
          <button
            className={styles.backButton}
            onClick={() => navigate('/home')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Geri</span>
          </button>
        )}

        <div className={styles.brand} onClick={() => navigate('/home')}>
          <div className={styles.brandContent}>
            <h1 className={styles.headerTitle}>
              <span className={styles.wordBank}>WORD BANK</span>
            </h1>
            <p className={styles.year}>2025</p>
          </div>
        </div>
        <div>
          <div className={styles.dropdownContainer}>
            <div className={styles.dropdownWrapper}>
              <button className={styles.exitButton} onClick={handleLogout}>
                <IoExitOutline />
                <span className={styles.exitTooltip}>Çıkış Yap</span>
              </button>
            </div>
            {isHome && (
              <button
                className={styles.bagCheck}
                onClick={() => handleNavigate()}
              >
                <IoBagCheck />
                <span className={styles.bagTooltip}>Kelime Kutusu</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
