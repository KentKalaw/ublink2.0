import React from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate(); 
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false); 

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);

  return (
    <div>Profile</div>
  )
}

export default Profile