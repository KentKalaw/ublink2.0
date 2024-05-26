

import React from 'react'
import { useNavigate } from 'react-router'

function Dashboard() {
  const navigate = useNavigate();
  const [logout, setLogout] = React.useState(false)

  React.useEffect(()=> {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  },[logout]);

  const logoutHandler = e =>{
    e.preventDefault();
    localStorage.removeItem('auth');
    setLogout(true);
  }

  return (
    <div>Dashboard
    <p>
    <button type="button" class="btn btn-dark" onClick={logoutHandler}>Sign out</button>
    </p>
    </div>
  )
}

export default Dashboard