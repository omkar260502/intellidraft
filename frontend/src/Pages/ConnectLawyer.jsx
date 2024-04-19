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
              Lorem ipsum dolor sit amet consectetur, id tator nunc tristique
              orci felis condimentum feugiat in ut. Lectus eu denec sed ac.
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
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
                </div>
                <div className="lawyer-card">
                  <img src="https://via.placeholder.com/100" alt="Lawyer" />
                  <h3>John Doe</h3>
                  <p>Senior Lawyer</p>
                  <p>john.doe@email.com</p>
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
