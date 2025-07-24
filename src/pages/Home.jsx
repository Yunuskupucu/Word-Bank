import styles from '../style/Main.module.scss';
import { setSelectedLevel } from '../redux/levelSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import CardList from '../components/CardList';

const Home = () => {
  const selectedLevel = useSelector((state) => state.level.selectedLevel);
  const dispatch = useDispatch();

  const handleOptionClick = (level) => {
    dispatch(setSelectedLevel(level));
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
};

export default Home;
