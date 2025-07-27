import './index.scss';
import { Routes, Route } from 'react-router-dom';
import WordBox from './pages/WordBox';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setUserStart, setUserSuccess, setUserError } from './redux/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      dispatch(setUserStart());

      try {
        const res = await axios.get('http://localhost:5001/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setUserSuccess(res.data));
      } catch (err) {
        dispatch(setUserError(err.response?.data?.message || 'Hata'));
        localStorage.removeItem('token');
      }
    };
    fetchUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wordBox" element={<WordBox />} />
    </Routes>
  );
}

export default App;
