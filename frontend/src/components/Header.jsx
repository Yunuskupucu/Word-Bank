import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../style/Header.module.scss';
import Dropdown from './Dropdown';
import { IoExitOutline } from 'react-icons/io5';
import { FaRegStar } from 'react-icons/fa';

function Header({ selectedLevel, handleOptionClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/home';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        <div className={styles.leftSection}>
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
              {!isMobile && <span>Geri</span>}
            </button>
          )}
        </div>

        <div className={styles.brand} onClick={() => navigate('/home')}>
          <div className={styles.brandContent}>
            <h1 className={styles.headerTitle}>
              <span className={styles.wordBank}>
                {' '}
                {isMobile ? 'WB' : 'WORD BANK'}
              </span>
            </h1>
            <p className={styles.year}>2025</p>
          </div>
        </div>

        <div className={styles.rightSection}>
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
                <FaRegStar />
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
