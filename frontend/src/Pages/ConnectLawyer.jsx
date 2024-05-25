import React, { useState } from "react";
import SideBar from "../components/SideBar";
import imgg from "../assets/img/Group 1918.png";
import "./css/ConnectLawyer.scss";
import { ImCross } from "react-icons/im";

const ConnectLawyer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="main-containercon">
      <div className="sidebar-connect">
        <SideBar />
      </div>
      <div className="main-connect">
        <div className="left-columncon">
          <img src={imgg} alt="hero" />
        </div>
        <div className="right-columncon">
          <h1>
            Connect with our <br />
            <span className="legal">Legal Advisors</span>
          </h1>
          <div className="lorem">
            <p>
            Need legal guidance? Connect with our expert legal advisor for personalized support and advice
            </p>
          </div>
          <button className="talk-button" onClick={togglePopup}>
            Talk to lawyer
          </button>
          {showPopup && (
            <div className="popup">
              <button className="close-button" onClick={togglePopup}>
                <ImCross />
              </button>
              {/* Add your cards/photos and contact details here */}
              <div className="popup-content">
                {/* Sample card */}
                <div className="lawyer-card">
                  <img src="https://lawrato.com/expert_images/thumb/webp/advocate-ravi-jadhav.webp" alt="Lawyer" />
                  <h3>Advocate Ravi Jadhav</h3>
                  <p>ravijadha@gmail.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://www.iforher.com/wp-content/uploads/2022/07/Women-Lawyers-In-India-Karuna-Nandy.jpg" alt="Lawyer" />
                  <h3>Kavita Kushal</h3>
                  <p>kavitaKushal@gmail.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://lawrato.com/expert_images/thumb/webp/advocate-shweta-pandey.webp" alt="Lawyer" />
                  <h3>Advocate Shweta Pandey</h3>
                 
                  <p>shweta.pandey@gmail.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://lawrato.com/expert_images/thumb/webp/advocate-shweta-joshi.webp" alt="Lawyer" />
                  <h3>Advocate Shweta Joshi</h3>
                 
                  <p>joshishweta@gmail.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://lawrato.com/expert_images/thumb/advocate-a-p-khobragade.jpg" alt="Lawyer" />
                  <h3>Advocate A P Khobragade</h3>
                  
                  <p>ap.khobragade@gmail.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://lawrato.com/expert_images/thumb/webp/advocate-harshad-rathod.webp" alt="Lawyer" />
                  <h3>Advocate Harshad Rathod</h3>
                  
                  <p>harshad.rathod@gmail.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://lawrato.com/expert_images/thumb/webp/advocate-juhi-qureshi.webp" alt="Lawyer" />
                  <h3>Advocate Juhi Qureshi</h3>
                  
                  <p>juhi@gmail.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://lawrato.com/expert_images/thumb/webp/advocate-rani-sonawane.webp" alt="Lawyer" />
                  <h3>Advocate Rani Sonawane</h3>
                  
                  <p>sonawanerani@gmail.com</p>
                </div>

                {/* More cards can be added here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectLawyer;
