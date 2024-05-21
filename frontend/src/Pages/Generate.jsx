import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import "./css/Generate.scss";
import SearchBar from "../components/SearchBar";
import imgg from "../assets/svg/image 24.svg";

function Generate() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/generate/${encodeURIComponent(category)}`, {
      state: category,
    });
  };

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
            <button onClick={() => handleCategoryClick("Loan Agreement")}>
              Loan Agreement
            </button>
            <button onClick={() => handleCategoryClick("Rent Agreement")}>
              Rent Agreement
            </button>
            <button onClick={() => handleCategoryClick("Business")}>
              Business
            </button>
            <button onClick={() => handleCategoryClick("Affidavit")}>
              Affidavit
            </button>
            <button onClick={() => handleCategoryClick("Other")}>Other</button>
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
