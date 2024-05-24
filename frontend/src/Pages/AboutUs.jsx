// Import necessary libraries and components
import React from "react";
import Heading from "../components/Heading.jsx";
import "./css/AboutUs.scss";
import SideBar from "../components/SideBar.jsx";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import omkar from "../assets/img/omkar.jpg";
import pradyumna from "../assets/img/pradyumna.jpg";
import diksha from "../assets/img/diksha.jpg";
import prasad from "../assets/img/prasad.jpg";
import sonal from "../assets/img/sonal.jpg";

// Define team member details
const team = [
  {
    id: 1,
    name: "Omkar Taple",
    exper: "Web Dev",
    cover: omkar,
  },
  {
    id: 2,
    name: "Diksha Prajapati",
    exper: "Android dev",
    cover: diksha,
  },
  {
    id: 3,
    name: "Pradyumna Thakare",
    exper: "Devops",
    cover: pradyumna,
  },
  {
    id: 4,
    name: "Prasad Jadhav",
    cover: prasad,
  },
  {
    id: 5,
    name: "Sonal Gupta",
    cover: sonal,
  },
];

// Define social media icons
const socialIcon = [
  {
    icon: <FaFacebookF />,
    name: "facebook",
  },
  {
    icon: <FaTwitter />,
    name: "twitter",
  },
  {
    icon: <FaLinkedin />,
    name: "linkedin",
  },
  {
    icon: <FaInstagram />,
    name: "instagram",
  },
];

// AboutUs component
const AboutUs = () => {
  return (
    <>
      <div className="main-containeraboutus">
        {/* Sidebar section */}
        <div className="sidebar-aboutus">
          <SideBar />
        </div>
        {/* Main content section */}
        <div className="main-aboutus">
          <div className="team">
            <div className="scontainer">
              {/* Heading component */}
              <Heading subtitle="Our Professional" title="MEET OUR MEMBERS" />
              {/* Team member details */}
              <div className="content grid2">
                {team.map((val, index) => (
                  <div className="box" key={index}>
                    <div className="img">
                      <img src={val.cover} alt="img not found" />
                    </div>
                    <div className="name">
                      <h3>{val.name}</h3>
                      {/* Uncomment to show experience */}
                      {/* <span>{val.exper}</span> */}
                    </div>
                    {/* Social media icons */}
                    <div className="socialIcon">
                      {socialIcon.map((val, index) => (
                        <label key={index}>{val.icon}</label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
