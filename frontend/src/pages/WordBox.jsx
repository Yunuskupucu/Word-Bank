import { useEffect } from 'react';
import styles from '../style/WordBox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';
import { setAllWords } from '../redux/savedWordsSlice';

export default function WordBox() {
  const dispatch = useDispatch();
  const savedWords = useSelector((state) => state.savedWords.words);
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await fetch(`${API_BASE_URL}/api/users/wordbox`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const words = await response.json();
          dispatch(setAllWords(words));
        }
      } catch (error) {
        console.error('WordBox getirme hatası:', error);
      }
    };

    fetchWords();
  }, [dispatch]);

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
