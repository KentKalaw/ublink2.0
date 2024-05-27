import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('auth');
    setLogout(true);
    window.location.href = '/';
  };

  return (
    <div className="dashboard">
      Home/Dashboard
      <Sidebar logoutHandler={logoutHandler} />
      <div className="main-content">
      </div>
    </div>
  );
}

export default Dashboard;