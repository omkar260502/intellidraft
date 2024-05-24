// Import necessary libraries and components
import React from "react";
import "./css/Dashboard.scss";
import SideBar from "../components/SideBar.jsx";
import Container1 from "../components/Container1.jsx";
import Container3 from "../components/Container3.jsx";
import Container4 from "../components/Container4.jsx";
import Container2 from "../components/Container2.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";

// Dashboard component
const Dashboard = () => {
  return (
    <>
      {/* Main dashboard container */}
      <div className="dashboard">
        {/* Sidebar section */}
        <div className="sidebar-dash">
          <SideBar />
        </div>
        {/* Main content section */}
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
