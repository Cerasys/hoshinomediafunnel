import React from "react";
import "./landingPage.css";
import Testimonial from "./testimonial";
import MarketingHighlights from "./marketingHighlights";

const LandingPage = () => {
  return (
    <div className="intro">
      <div className="overlay">
        <div className="container brand-section">
          <h1 className="headline">
            Tell <span className="highlight">Stories</span> the World{" "}
            <span className="highlight">Remembers</span>
          </h1>
          <div className="row">
            <p className="mission-statement">
              ...Without Having To Pitch Yourself to Corporations 🤪✌️
            </p>
            <br />
            <a href="/apply" className="cta-button">
              Apply Now
            </a>
          </div>
        </div>
        <div className="row">
          <Testimonial />
        </div>

        <div className="row">
          <MarketingHighlights />
        </div>
        {/* Partner Logos and Copyright */}
        <div className="partner-section">
          {/* <div className="partner">
            <img
              src="/img/Meta-Business-Partner.webp"
              alt="Meta Business Partner"
            />
          </div>
          <div className="partner">
            <img
              src="/img/Shopify-Partners-300x251.webp"
              alt="Shopify Partner"
            />
          </div> */}
          <div className="copyright">© Hoshino Media 2025</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
