import { useNavigate } from 'react-router-dom';
import styles from '../style/Dashboard.module.scss';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login');
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContent}>
        <h1>WORD BOX 🧠📚</h1>
        <p>
          Yabancı dil öğrenimini eğlenceli hale getiren bir kelime kartı
          uygulamasına hoş geldiniz!
        </p>
        <ul>
          <li>Öğrendiğin kelimeleri sakla</li>
          <li>Günlük tekrarlar yap</li>
          <li>Bilgilerini tazele</li>
        </ul>
      </div>

      <button className={styles.continueBtn} onClick={handleContinue}>
        Devam Et
      </button>
    </div>
  );
};

export default Dashboard;
