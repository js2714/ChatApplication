// Chat.js

import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      setMessages([...messages, { text: messageInput, user: 'You' }]);
      setMessageInput('');
    }
  };

  return (
    <div className="chat-body">
      <div className="chat-container">
        <div className="message-container">
          {messages.map((msg, index) => (
            <div key={index} className="message-wrapper">
              <strong className="message-text">{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="message-input"
          />
          <button onClick={sendMessage} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
