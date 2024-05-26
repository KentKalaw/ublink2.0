import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function SignInModal({ show, handleClose, handleShowSignUpModal}) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  React.useEffect(()=> {
    if(localStorage.getItem('auth')) navigate('/Dashboard')
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'lunceus' && password === 'kazuya') {
      alert('Login successful');
      handleClose(); 
      navigate('/Dashboard');
      localStorage.setItem('auth', true);
  
    } else {
      setError('Invalid username or password');
    }
  };

    const handleSignUpClick = () => {
        handleClose(); 
        handleShowSignUpModal(); 
      };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username</label>
      <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleInputChange} />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleInputChange} />
    </div>
    {error && <div className="text-danger mb-3">{error}</div>}
    <div className="d-flex flex-column align-items-center">
      <button type="submit" className="btn btn-dark w-50 mb-3">Sign In</button>
      <span className="text-muted"> Don't have an account?{' '}
      <span className="text-primary" style={{ cursor: 'pointer' }} onClick={handleSignUpClick}>Sign up here</span>
    </span>
    </div>
  </form>
</Modal.Body>
    </Modal>
  );
}

export default SignInModal;