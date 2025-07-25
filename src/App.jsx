import './index.scss';
import { Routes, Route } from 'react-router-dom';
import WordBox from './pages/WordBox';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wordBox" element={<WordBox />} />
    </Routes>
  );
}
export default App;
