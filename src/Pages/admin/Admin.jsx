import React from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate(); 
    // eslint-disable-next-line
    const [logout, setLogout] = React.useState(false); 
  
    React.useEffect(() => {
      if (!localStorage.getItem('admin-auth')) navigate('/'); // eslint-disable-next-line
    }, [logout, navigate]);

  return (
    <div>Admin</div>
  )
}

export default Admin