import { useDispatch, useSelector } from 'react-redux';
import CardList from './components/CardList';
import Header from './components/Header';
import './index.scss';
import styles from './style/Main.module.scss';
import { setSelectedLevel } from './redux/levelSlice';

function App() {
  const selectedLevel = useSelector((state) => state.level.selectedLevel);
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    dispatch(setSelectedLevel(option));
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
