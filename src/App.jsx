import Card from './components/Card';
import CardList from './components/CardList';
import './index.scss';
import styles from './style/Main.module.scss';

function App() {
  return (
    <div className={styles.main}>
      <CardList />
    </div>
  );
}

export default App;
