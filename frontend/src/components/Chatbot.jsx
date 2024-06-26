import React, { useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import "../assets/scss/Chatbox.scss";
import { FaPaperPlane } from "react-icons/fa";

const Chatbot = forwardRef((props, ref) => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    setUserInput,
    handleSubmit,
  }));

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
    setIsLoading(true); // Set loading state to true

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

    setIsLoading(false); // Set loading state to false
    setUserInput(""); // Clear the input box
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.message}
          </div>
        ))}
        {isLoading && (
          <div className="message bot typing-indicator">
            <span className="typing-dot">.</span>
            <span className="typing-dot">.</span>
            <span className="typing-dot">.</span>
          </div>
        )}
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
});

export default Chatbot;
