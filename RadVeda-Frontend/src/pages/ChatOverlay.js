import React, { useState, useEffect } from "react";
import "./ChatOverlay.css"; // CSS for styling the chat overlay

const ChatOverlay = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Function to send a new message
  const sendMessage = () => {
    // Call your backend API to send the message
    // Make sure to include authentication token or any necessary data
    // After successful sending, you may want to update the message list
    if(newMessage != ""){
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
    }
  };

  // Function to fetch message history
  const fetchMessageHistory = () => {
    setMessages([{text: "message1", sender: "user1"}, {text: "message2", sender: "user2"}])
    // Call your backend API to fetch message history
    // Update the messages state with the fetched messages
    // Example:
    // fetch('/api/messages')
    //   .then(response => response.json())
    //   .then(data => setMessages(data));
  };

  // Use useEffect to fetch message history when the component mounts
  useEffect(() => {
    fetchMessageHistory();
  }, []);

  return (
    <div className="chat-overlay">
      <div className="chat-header">
        <h2>Chat with Authorized Representatives</h2>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "other"}`}>
            {message.sender === "user" ? (
                // If the sender is the user, display only the message text
                <span>{message.text}</span>
            ) : (
                // If the sender is someone else, display the sender's name and message text
                <div>
                <span style={{ color: 'blue' }}>{message.sender}: </span>
                <span>{message.text}</span>
                </div>
            )}
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatOverlay;