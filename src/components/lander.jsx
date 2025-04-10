import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <h1 className="headline">
        Build a <span className="highlight">Brand</span> the World{" "}
        <span className="highlight">Remembers</span>
      </h1>
      <div className="row">
        <div className="col-med">
          {/* <p className="mission-statement">
            We exist to help our clients achieve star status… and build brands
            worth owning.
          </p> */}
          <p className="mission-statement">
            ...Without Having To Constantly Update Your Lookbook, Spend Hours
            Managing Social Media, Or Struggle To Find Influencer Partners...
          </p>
          <br />
          <a href="/apply" className="cta-button">
            Apply Now
          </a>
        </div>
        <div className="col-med"></div>
      </div>
    </div>
  );
};

export default LandingPage;
