import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Navbar.css';
import logoImg from './landing-images/ublink2-logo-white.png';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

function Navbar() {
    const [showNavsidebar, setShowNavsidebar] = useState(false);

    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    function toggleNavsidebar() {
        setShowNavsidebar(!showNavsidebar); 
    }

    const handleShowSignInModal = () => setShowSignInModal(true);
    const handleCloseSignInModal = () => setShowSignInModal(false);

    const handleShowSignUpModal = () => setShowSignUpModal(true);
    const handleCloseSignUpModal = () => setShowSignUpModal(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
                <a className="navbar-brand fs-4" href="#home">
                    <img src={logoImg} alt="UBLink 2.0 Logo" />
                </a>

                <button className="navbar-toggler shadow-none border-0" type="button" onClick={toggleNavsidebar}>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className={`navsidebar offcanvas offcanvas-start ${showNavsidebar ? 'show' : ''}`} tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                    <div className="offcanvas-header text-white">
                        <img src={logoImg} alt="UBLink 2.0" />
                        <button className='btn-close btn-close-black shadow-none' onClick={toggleNavsidebar} aria-label="Close"></button>
                    </div>

                    <div className='offcanvas-body d-flex flex-column flex-lg-row p-4'>
                        <ul className='navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3'>
                            <li className='nav-item mx-2'>
                                <a className='nav-link' aria-current="page" href='#home'>Home</a>
                            </li>
                            <li className='nav-item mx-2'>
                                <a className='nav-link' href='#about'>About</a>
                            </li>
                        </ul>

                        <div className='d-flex flex-column justify-content-center align-items-center gap-3 flex-lg-row'>
                            <button className='btn btn-dark' onClick={handleShowSignInModal}>Sign in</button>
                            <button className='btn btn-dark' onClick={handleShowSignUpModal}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionally render the sign-in and sign-up modals */}
            <SignInModal show={showSignInModal} handleClose={handleCloseSignInModal} handleShowSignUpModal={handleShowSignUpModal} />
            <SignUpModal show={showSignUpModal} handleClose={handleCloseSignUpModal} handleShowSignInModal={handleShowSignInModal} />
        </nav>
    )
}

export default Navbar;
