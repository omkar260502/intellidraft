import React from "react";
import SideBar from "../components/SideBar";
import "./css/Generate.scss";
import SearchBar from "../components/SearchBar";

function Generate() {
  return (
    <div className="home-music-container">
      <div className="sidebar-home">
        <SideBar />
      </div>
      <div className="main-home">
        <div className="centered-content">
          <h1>Find Templates Here</h1>
          <div className="search-bar">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate;
