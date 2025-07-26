import { useState, useMemo } from 'react';
import styles from '../style/Card.module.scss';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addWord, removeWord } from '../redux/savedWordsSlice';

export default function Card({ word, mean_tr, example_en, example_tr, level }) {
  const [meaning, setMeaning] = useState(false);
  const [example, setExample] = useState(false);
  const dispatch = useDispatch();
  const savedWords = useSelector((state) => state.savedWords.words);
  const isSaved = savedWords.some((savedWord) => savedWord.word === word);

  const cardColor = useMemo(() => getRandomColor(), []);

  function getRandomColor() {
    const colors = [
      'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
      'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
      'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
      'linear-gradient(135deg, #b7f8db 0%, #50a7c2 100%)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleSaveWord = () => {
    if (isSaved) {
      dispatch(removeWord({ word }));
    } else {
      dispatch(addWord({ word, mean_tr, example_en, example_tr, level }));
    }
  };

  return (
    <div className={styles.card} style={{ background: cardColor }}>
      <div className={styles.word}>
        <button
          className={styles.tooltipBtn}
          onClick={() => setMeaning(!meaning)}
        >
          {meaning ? (mean_tr?.trim() ? mean_tr : 'Anlamı bulunamadı') : word}
        </button>
      </div>
      <div className={styles.sentence}>
        <button
          className={styles.tooltipBtn}
          onClick={() => setExample(!example)}
        >
          {example ? example_tr : example_en}
        </button>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.addBtnDiv}>
          <button className={styles.addBtn} onClick={handleSaveWord}>
            {isSaved ? <FaCheckSquare /> : <FaRegSquare />}
          </button>
        </div>
        <div className={styles.level}>{level}</div>
      </div>
    </div>
  );
}
