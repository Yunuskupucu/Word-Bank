import Card from './Card';
import words from '../words.json';
import styles from '../style/CardList.module.scss';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function CardList({ selectedLevel }) {
  const filteredWords =
    selectedLevel === 'CEFR: All'
      ? shuffle(words)
      : shuffle(
          words.filter(
            (word) => word.level === selectedLevel.replace('CEFR: ', '')
          )
        );

  return (
    <div className={styles.list}>
      {filteredWords.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
