import styles from '../style/Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <h1 className={styles.headerTitle}>
          <span> WORD BANK</span>
        </h1>
        <p>2025</p>
      </div>
    </div>
  );
}

export default Header;
