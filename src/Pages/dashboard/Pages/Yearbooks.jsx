import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Yearbooks.css'; // Import the CSS file
import yearbookImage1 from '../images/kotoko-pic.jpg';
import yearbookImage2 from '../images/yunha-pic.jpg';

function Yearbooks() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [logout, setLogout] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/');
  }, [logout, navigate]);

  // Function to handle choosing delivery option
  const handleDeliveryOption = (option) => {
    setDeliveryOption(option);
  };

  const handleSubscription = () => {
    setSubscribed(true);
  };

  const handleSubmitDeliveryInfo = () => {

    navigate('/dashboard/delivery-confirmation');
  };

  return (
    <div className="yearbooks-container">
      <h1>Yearbooks</h1>
      {!subscribed ? (
        <div>
          <p>Please subscribe to access yearbook options.</p>
          <button onClick={handleSubscription}>Subscribe</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleDeliveryOption('digital')}>Digital Yearbooks</button>
          <button onClick={() => handleDeliveryOption('physical')}>Physical Yearbooks</button>
        </div>
      )}
      {deliveryOption === 'digital' && subscribed && (
       <div className="digital-yearbooks-container">
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage2} alt="Profile" className="yearbook-profile-pic" />
         <h3>Bang Yunha</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage2} alt="Profile" className="yearbook-profile-pic" />
         <h3>Bang Yunha</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage2} alt="Profile" className="yearbook-profile-pic" />
         <h3>Bang Yunha</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage2} alt="Profile" className="yearbook-profile-pic" />
         <h3>Bang Yunha</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage2} alt="Profile" className="yearbook-profile-pic" />
         <h3>Jane Smith</h3>
         <p>Bang Yunha</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage2} alt="Profile" className="yearbook-profile-pic" />
         <h3>Bang Yunha</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
       <div className="yearbook-entry">
         <img src={yearbookImage1} alt="Profile" className="yearbook-profile-pic" />
         <h3>Fujiyoshi Kotoko</h3>
         <p>Information Technology</p>
         <p>2024</p>
       </div>
     </div>
      )}
      {deliveryOption === 'physical' && subscribed && (
        <div>
          <h2>Fill Up Delivery Information</h2>
          <form onSubmit={handleSubmitDeliveryInfo}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Contact Number" />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Yearbooks;
