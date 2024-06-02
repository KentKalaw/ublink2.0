import React from 'react'
import { useNavigate } from 'react-router-dom';

function AlumniID() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);

  return (
    <div>Alumni Privilege Card</div>
  )
}

export default AlumniID