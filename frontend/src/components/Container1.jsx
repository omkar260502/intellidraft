import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/Container1.scss";
import hero from "../assets/img/image 1.png";

function Container1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generate"); // Navigate to /generate route on click
  };
  return (
    <div className="container1">
      <div className="hero-section">
        <div className="content">
          <h1>IntelliDraft</h1>
          <h2>Your Legal Assistant</h2>
          <p>
            Your most critical processes, easily managed on a single platform.
          </p>
          <button onClick={handleClick}>Let's get Started</button>
        </div>
        <div className="illustration">
          <img src={hero} alt="Legal Assistant Illustration" />
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <h3>Data Privacy</h3>
        </div>
        <div className="feature">
          <h3>AI Assistance</h3>
        </div>
        <div className="feature">
          <h3>Local Language Support</h3>
        </div>
        <div className="feature">
          <h3>Free to Use</h3>
        </div>
        <div className="feature">
          <h3>Customization</h3>
        </div>
      </div>
    </div>
  );
}

export default Container1;
