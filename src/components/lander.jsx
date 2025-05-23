import React from "react";
import "./landingPage.css";
import Testimonial from "./testimonial";
import MarketingHighlights from "./marketingHighlights";

const LandingPage = () => {
  return (
    <div className="intro">
      <div className="overlay">
        <div className="container brand-section">
          <br />
          <h4>influencer marketingHighlights</h4>

          <h1 className="headline">
            Where <span className="highlight">Integrity</span> Meets
            <span className="highlight"> Storytelling</span>
          </h1>
          <div className="row">
            <p className="mission-statement">
              We connect high-integrity creators with brands that value depth,
              curiosity, and storytelling
              <br />
              <i> So you don't have to sell out </i>🤪✌️
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
