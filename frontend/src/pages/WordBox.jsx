import styles from '../style/WordBox.module.scss';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';

export default function WordBox() {
  const savedWords = useSelector((state) => state.savedWords.words);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <h1>🏆 TAMAMLANANLAR 🧠</h1>
        <div className={styles.cardContainer}>
          {savedWords.map((word, index) => (
            <Card key={index} {...word} />
          ))}
        </div>
      </div>
    </>
  );
}
