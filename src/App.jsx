import CardList from './components/CardList';
import Header from './components/Header';
import './index.scss';
import styles from './style/Main.module.scss';
import { useState } from 'react';

function App() {
  const [selectedLevel, setSelectedLevel] = useState('CEFR: All');

  const handleOptionClick = (option) => {
    setSelectedLevel(option);
    console.log(option);
  };

  return (
    <div className={styles.main}>
      <Header
        selectedLevel={selectedLevel}
        handleOptionClick={handleOptionClick}
      />
      <CardList selectedLevel={selectedLevel} />
    </div>
  );
}

export default App;
