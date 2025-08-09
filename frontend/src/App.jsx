import './index.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import WordBox from './pages/WordBox';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setUserStart, setUserSuccess, setUserError } from './redux/userSlice';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      dispatch(setUserStart());

      try {
        const res = await axios.get(`${API_BASE_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setUserSuccess(res.data));
      } catch (err) {
        dispatch(
          setUserError(
            err.response?.data?.message || 'Kullanıcı bilgisi alınamadı'
          )
        );
        localStorage.removeItem('token');
      }
    };

    fetchUser();
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/home"
        element={token ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/login"
        element={!token ? <Login /> : <Navigate to="/home" replace />}
      />
      <Route
        path="/register"
        element={!token ? <Register /> : <Navigate to="/home" replace />}
      />
      <Route
        path="/wordBox"
        element={token ? <WordBox /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;
