import CardList from './components/CardList';
import Header from './components/Header';
import './index.scss';
import styles from './style/Main.module.scss';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <CardList />
    </div>
  );
}

export default App;
