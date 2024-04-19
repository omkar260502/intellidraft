import React from "react";
import Heading from "../components/Heading.jsx";
import "./css/AboutUs.scss";
import SideBar from "../components/SideBar.jsx";

const team = [
  {
    id: 1,
    name: "RASALINA DE",
    exper: "12 YEAR EXPERIENCE",
    cover: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "MARK HENERYTIX",
    exper: "09 YEAR EXPERIENCE",
    cover: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "YLINA PITERSON KIM",
    exper: "06 YEAR EXPERIENCE",
    cover: "https://via.placeholder.com/200",
  },
];

const socialIcon = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    name: "facebook",
  },
  {
    icon: <i className="fab fa-twitter"></i>,
    name: "twitter",
  },
  {
    icon: <i className="fab fa-youtube"></i>,
    name: "youtube",
  },
  {
    icon: <i className="fab fa-instagram"></i>,
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
