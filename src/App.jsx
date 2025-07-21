import Card from './components/Card';
import './index.scss';
import styles from './style/Main.module.scss';

function App() {
  return (
    <div className={styles.main}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
