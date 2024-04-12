// Chatbot.js
import React, { useState } from "react";
import axios from "axios";
import "../assets/scss/Chatbox.scss";
import { FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (userInput.trim() === "") return;

    // Add user's input to the chat history
    const updatedChatHistory = [
      ...chatHistory,
      { sender: "user", message: userInput },
    ];
    setChatHistory(updatedChatHistory);

    try {
      // Send user's input to the backend
      const response = await axios.post("http://localhost:5000/api/chat", {
        searchQuery: userInput,
      });
      const botResponse = response.data.content[0].text;
      console.log(response);

      // Add bot's response to the updated chat history
      setChatHistory([
        ...updatedChatHistory,
        { sender: "bot", message: botResponse },
      ]);
    } catch (error) {
      console.error("Error fetching response from backend:", error);
    }

    // Clear the input box
    setUserInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />
        <button onClick={handleSubmit}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
