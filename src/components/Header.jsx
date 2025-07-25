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
      {!homePage && (
        <button className={styles.backButton} onClick={() => navigate('/')}>
          ← Geri
        </button>
      )}
      <div className={styles.brand} onClick={() => navigate('/')}>
        <h1 className={styles.headerTitle}>
          <span>WORD BANK</span>
        </h1>
        <p>2025</p>
      </div>
      {homePage && (
        <div className={styles.dropdownContainer}>
          <button className={styles.bagCheck} onClick={() => handleNavigate()}>
            <IoBagCheck />
          </button>
          <Dropdown
            selectedLevel={selectedLevel}
            handleOptionClick={handleOptionClick}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
