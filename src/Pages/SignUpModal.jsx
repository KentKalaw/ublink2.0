import React from 'react';
import { Modal } from 'react-bootstrap';

function SignUpModal({ show, handleClose, handleShowSignInModal}) {
    const handleSignInClick = () => {
        handleClose(); // Close the sign-in modal
        handleShowSignInModal(); // Show the sign-up modal
      };

    const departments = ['Select Department','Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'CICT'];
    const courses = ['Select course','BSc', 'MSc', 'PhD', 'BSIT', 'BSIS', 'BSCS'];
    


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="mobileNo" className="form-label">Mobile Number</label>
              <input type="tel" className="form-control" id="mobileNo" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="yearGrad" className="form-label">Year Graduated</label>
              <input type="number" className="form-control" id="yearGrad" min="1900" max={new Date().getFullYear()} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="department" className="form-label">Select Department</label>
              <select className="form-control" id="department">
                {departments.map(department => (
                  <option key={department} value={department}>{department}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="course" className="form-label">Select Course</label>
              <select className="form-control" id="course">
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="proof" className="form-label">Upload Proof</label>
              <input type="file" className="form-control" id="proof" />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <button type="submit" className="btn btn-dark w-50 mb-3">
              Sign Up
            </button>
            <span className="text-muted">
              Already have an account?{' '}
              <span
                className="text-primary"
                style={{ cursor: 'pointer' }}
                onClick={handleSignInClick}
              >
                Sign in here
              </span>
            </span>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
