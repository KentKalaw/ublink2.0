import React from 'react'
import { useNavigate } from 'react-router-dom';
import InitiativeImage1 from './carousel/aespaArmageddon.jpg';
import './InitiativeProgram.css';

function InitiativeProgram() {
  const navigate = useNavigate(); 
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false); 

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);



  return (
    <div className="initiative-program-container">
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
    <div className="initiative-container">
      <img src={InitiativeImage1} alt="Initiative Program 1" />
      <div className="initiative-details">
        <h3>Title of the Program</h3>
        <p>Start Date: January 1, 2024</p>
        <p>End Date: December 31, 2024</p>
        <button>View Initiative Program</button>
      </div>
    </div>
  </div>
  );
}

export default InitiativeProgram