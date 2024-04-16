import React from "react";
import SideBar from "../components/SideBar";
import "./css/Generate.scss";
import SearchBar from "../components/SearchBar";
import imgg from "../assets/svg/image 24.svg";

function Generate() {
  return (
    <div className="templates-container">
      <div className="sidebar-templates">
        <SideBar />
      </div>
      <div className="main-templates">
        <div className="centered-content">
          <h1>Find templates here</h1>
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="template-categories">
            <button>Loan Agreement</button>
            <button>Rent Agreement</button>
            <button>Business</button>
            <button>Affidavit</button>
            <button>Other</button>
          </div>
        </div>
        <div className="imggg">
          <img src={imgg} height="250" alt="homephoto" />
        </div>
      </div>
    </div>
  );
}

export default Generate;
