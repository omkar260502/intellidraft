import React from "react";
import "./css/Dashboard.scss";
import SideBar from "../components/SideBar.jsx";
import Container1 from "../components/Container1.jsx";
import Container3 from "../components/Container3.jsx";
import Container4 from "../components/Container4.jsx";
import Container2 from "../components/Container2.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="sidebar-dash">
          <SideBar />
        </div>
        <div className="main-dash">
          <Container1 />
          <Container2 />
          <Container4 />
          <Container3 />
          <WhyChooseUs />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
