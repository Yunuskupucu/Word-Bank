import { useNavigate } from 'react-router-dom';
import styles from '../style/Header.module.scss';
import Dropdown from './Dropdown';
import { IoBagCheck } from 'react-icons/io5';

function Header({ selectedLevel, handleOptionClick }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/wordBox');
  };

  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <h1 className={styles.headerTitle}>
          <span>WORD BANK</span>
        </h1>
        <p>2025</p>
      </div>
      <div className={styles.dropdownContainer}>
        <button className={styles.bagCheck} onClick={() => handleNavigate()}>
          <IoBagCheck />
        </button>
        <Dropdown
          selectedLevel={selectedLevel}
          handleOptionClick={handleOptionClick}
        />
      </div>
    </div>
  );
}

export default Header;
