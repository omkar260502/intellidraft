import React from "react";
import Heading from "../components/Heading.jsx";
import "./css/AboutUs.scss";
import SideBar from "../components/SideBar.jsx";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "RASALINA DE",
    exper: "Web Dev",
    cover: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "MARK HENERYTIX",
    exper: "Android dev",
    cover: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "YLINA PITERSON KIM",
    exper: "Devops",
    cover: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "YLINA PITERSON KIM",
    exper: "Devops",
    cover: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "YLINA PITERSON KIM",
    exper: "Devops",
    cover: "https://via.placeholder.com/200",
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
              <Heading subtitle="Our Professional" title="MEET OUR STUFF" />

              <div className="content grid2">
                {team.map((val, index) => (
                  <div className="box" key={index}>
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="name">
                      <h3>{val.name}</h3>
                      <span>{val.exper}</span>
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
