import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './Dashboard.css';
import ExampleCarouselImage from './Pages/carousel/aespaArmageddon.jpg';
import ExampleCarouselImage2 from './images/jennie.jpg';
import ExampleCarouselImage3 from './images/karina.jpg';
import ExampleCarouselImage4 from './images/winter.jpg';
import Carousel from 'react-bootstrap/Carousel';
import ProfilePic from './images/pfp-test.png';


function Dashboard() {
  const navigate = useNavigate();
  const [logout, setLogout] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('auth');
    setLogout(true);
    window.location.href = '/';
  };

  const handleClick = () => {
    navigate('/dashboard/profile');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const userName = "Kent Francis Kalaw";
  

  return (
    <div className="dashboard">
      <div className="mobile-header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </button>
      <div className="profile-section">
          <img src={ProfilePic} alt="Profile" onClick={handleClick} className="profile-pic" />
          <span className="profile-name" onClick={handleClick}>{userName}</span>
          <i className="logout-dashboard bi bi-box-arrow-right icon-large" onClick={logoutHandler}></i>
        </div>
        <div className="first-container">
      <h1 className='ini'>Active Initiative Programs</h1>
      <Carousel className="custom-carousel">
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={ExampleCarouselImage} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Sample picture only. AESPA.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={ExampleCarouselImage} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Sample picture only. AESPA.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={ExampleCarouselImage} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Sample picture only. AESPA.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className='alumni-spotlight'>
        <h2 className='front'>Featured Alumni</h2>
        <p className='front-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Carousel className="custom-alumni">
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={ExampleCarouselImage2} alt="First slide" />
          <Carousel.Caption>
            <h4>Jennie Kim</h4>
            <p>Magna Cum Laude</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={ExampleCarouselImage3} alt="Second slide" />
          <Carousel.Caption>
            <h4>Karina</h4>
            <p>Magna Cum Laude</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img className="d-block w-100" src={ExampleCarouselImage4} alt="Third slide" />
          <Carousel.Caption>
            <h4>Winter</h4>
            <p>Magna Cum Laude</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="post-container">
      <h3>Post</h3>
      </div>
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
      </div>
    </div>
    </div>
  );
}

export default Dashboard;