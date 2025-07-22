import styles from '../style/Header.module.scss';
import Dropdown from './Dropdown';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <h1 className={styles.headerTitle}>
          <span> WORD BANK</span>
        </h1>
        <p>2025</p>
      </div>
      <div className={styles.dropdownContainer}>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
