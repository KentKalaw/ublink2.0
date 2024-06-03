import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Messages.css';
import userImage from '../images/pfp-test.png';
import userImage1 from '../images/kotoko-pic.jpg';
import userImage2 from '../images/kotoko-pic.jpg';

import userImage3 from '../images/kotoko-pic.jpg'; 
import userImage4 from '../images/gehlee-pic.jpg';
import userImage5 from '../images/hyeonju-pic.jpg';
import userImage6 from '../images/nana-pic.jpg';
import userImage7 from '../images/seowon-pic.jpg';
import userImage8 from '../images/yoona-pic.jpg';
import userImage9 from '../images/yunha-pic.jpg';
import userImage10 from '../images/elisia-pic.jpg';

function Messages() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/');
  }, [logout, navigate]);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  const users = [
    { name: 'Fujiyoshi Kotoko', image: userImage3, lastYouMessage: 'You: Test' },
    { name: 'Gehlee Dangca', image: userImage4, lastMessage: 'gehl gehl' },
    { name: 'Jin Hyeonju', image: userImage5, lastYouMessage: 'You: ROTY soon leadernim!' },
    { name: 'Ezatoki Nana', image: userImage6, lastMessage: 'Good morning evies!' },
    { name: 'Lim Seowon', image: userImage7, lastYouMessage: 'You: Maknae!' },
    { name: 'Oh Yoona', image: userImage8, lastYouMessage: 'You: Wsg' },
    { name: 'Bang Yunha', image: userImage9, lastMessage: 'What\'s up?' },
    { name: 'Elisia Parmisano', image: userImage10, lastYouMessage: 'You: Elmandu!' }
  ];
  

  return (
    <div className="message-container">
      <div className="message-sidebar">
        <div className="user-profile">
          <img src={userImage} alt="Profile" className="message-profile-pic" />
          <span className="user-name">Kent Francis Kalaw</span>
          <i className='bi bi-three-dots message-3dot'></i>
        </div>
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search" />
          <i class="bi bi-person-plus-fill"></i>
        </div>
        <div className="user-list">
          {users.map((user, index) => (
            <div key={index} className="user-item">
              <img src={user.image} alt="Profile" />
              <div>
                <span>{user.name}</span>
                <span className="last-message">{user.lastMessage}</span>
                <span className="last-you-message">{user.lastYouMessage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-window">
        <div className="chat-header">
          <div className="chat-header-left">
            <img src={userImage1} alt="Profile" className="message-profile-pic-1" />
            <div>
              <span className="chat-user-name">Fujiyoshi Kotoko</span>
              <span className="chat-user-status">UNIS - here is the users status</span>
            </div>
          </div>
          <div className="chat-header-right">
            <i className="bi bi-info-circle"></i>
          </div>
        </div>
        <div className="chat-messages">
        <div className="message received">
            <span>Stan UNIS!</span>
          </div>
          <div className="message received">
            <span>Good Morning evies!</span>
          </div>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
        <i class="bi bi-plus-lg"></i>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={handleMessageChange}
          />
          <i class="bi bi-send-fill" onClick={handleSendMessage}></i>
        </div>
      </div>
      <div className="profile-panel">
        <div className="message-profile-info">
          <img src={userImage2} alt="Profile" className="message-profile-pic-2" />
          <span className="message-profile-name">Fujiyoshi Kotoko</span>
          <span className="profile-status">UNIS - here is the users status</span>
        </div>
        <div className="profile-settings">
          <div className="settings-section">Chat settings</div>
          <div className="settings-section">Privacy & help</div>
        </div>
        <div className="shared-media">
          <div className="media-section">Shared photos</div>
          <div className="media-section">twice_photo_2024_6_1.png</div>
          <div className="media-section">aespa_photo_2024_6_1.png</div>
          <div className="media-section">unis_photo_2024_6_1.png</div>
        </div>
        <div className="block-user">
          <button>Block User</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
