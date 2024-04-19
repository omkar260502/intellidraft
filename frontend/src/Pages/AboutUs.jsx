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
    // exper: "Devops",
    cover: prasad,
  },
  {
    id: 5,
    name: "Sonal Gupta",
    // exper: "Devops",
    cover: sonal,
  },
];

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

const AboutUs = () => {
  return (
    <>
      <div className="main-containeraboutus">
        <div className="sidebar-aboutus">
          <SideBar />
        </div>
        <div className="main-aboutus">
          <div className="team">
            <div className="scontainer">
              <Heading subtitle="Our Professional" title="MEET OUR MEMBERS" />

              <div className="content grid2">
                {team.map((val, index) => (
                  <div className="box" key={index}>
                    <div className="img">
                      <img src={val.cover} alt="img not found" />
                      {/* console.log(val.cover) */}
                    </div>
                    <div className="name">
                      <h3>{val.name}</h3>
                      {/* <span>{val.exper}</span> */}
                    </div>
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
