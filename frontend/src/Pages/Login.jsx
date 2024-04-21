import React from "react";
import Lawyer from "../assets/img/8777961.png";
import "./css/Login.scss";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <section id="main">
        <div className="nav-item">
          <a className="navbar-brand" href="/">
            IntelliDraft
          </a>
        </div>
        <div className="main-row">
          <div className="main-row-img">
            <img className="head-phone-img" src={Lawyer} alt="" />
          </div>
          <div className="main-row-text">
            <h1>AI Powered Legal Document Assisant</h1>
            <p>Effortless legal help, powered by AI</p>
            <Link to={"/dashboard"} className="btn">
              Try for Free
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
