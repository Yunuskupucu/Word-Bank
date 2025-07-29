import './index.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import WordBox from './pages/WordBox';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setUserStart, setUserSuccess, setUserError } from './redux/userSlice';
import Dashboard from './pages/Dashboard';

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
  const token = localStorage.getItem('token');

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
