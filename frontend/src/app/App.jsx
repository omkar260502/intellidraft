import React from "react";
import { ThemeContext, themes } from "../theme/theme.jsx";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login.jsx";
import Generate from "../Pages/Generate.jsx";
import GeneratedDox from "../Pages/GeneratedDox.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import Summary from "../Pages/Summary.jsx";
import Review from "../Pages/Review.jsx";
import ReviewededDox from "../Pages/ReviewedDox.jsx";
import ConnectLawyer from "../Pages/ConnectLawyer.jsx";
import AboutUs from "../Pages/AboutUs.jsx";

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/generate/:searchQuery" element={<GeneratedDox />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/review" element={<Review />} />
            <Route path="/review/revieweddoc" element={<ReviewededDox />} />
            <Route path="/connectlawyer" element={<ConnectLawyer />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Router>
      </>
    </ThemeContext.Provider>
  );
}

export default App;
