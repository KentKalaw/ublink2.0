import React from 'react';
import { Modal } from 'react-bootstrap';

function SignInModal({ show, handleClose, handleShowSignUpModal}) {
    const handleSignUpClick = () => {
        handleClose(); // Close the sign-in modal
        handleShowSignUpModal(); // Show the sign-up modal
      };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <form>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email Address
      </label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input type="password" className="form-control" id="password" />
    </div>
    <div className="d-flex flex-column align-items-center">
      <button type="submit" className="btn btn-primary w-50 mb-3">
        Sign In
      </button>
      <span className="text"> Don't have an account?{' '}
      <span className="text-primary" style={{ cursor: 'pointer' }} onClick={handleSignUpClick}>Sign up here</span>
    </span>
    </div>
  </form>
</Modal.Body>
    </Modal>
  );
}

export default SignInModal;