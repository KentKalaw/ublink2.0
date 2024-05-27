import React from 'react'
import { useNavigate } from 'react-router-dom';

function Messages() {
  const navigate = useNavigate(); 
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false); 

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);

  return (
    <div>Messages</div>
  )
}

export default Messages