import styles from '../style/Card.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.word}>
        <button>Word</button>
      </div>
      <div className={styles.sentence}>
        <button>Example Sentence</button>
      </div>
    </div>
  );
}
