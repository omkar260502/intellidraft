import React from "react";
import "../assets/scss/Container2.scss";
import hero from "../assets/img/howitworks.png";

function Container2() {
  return (
    <div className="container2">
      <div className="hero-section">
        <div className="illustration">
          <img src={hero} height="30vh" alt="Legal Assistant Illustration" />
        </div>
        <div className="content">
          {/* <h1>IntelliDraft</h1> */}
          <h2>How it works?</h2>
          <p>
            Operationalize your critical data, move beyond rigid tools, and
            reimagine workflows with AI. No code required.
          </p>
          {/* <button>Let's get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export default Container2;
