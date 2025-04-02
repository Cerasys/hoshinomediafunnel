import React, { useEffect } from "react";
import Footer from "./footer";
import { Widget } from "@typeform/embed-react";

import "./apply.css"; // Import the CSS file

const Apply = () => {
  useEffect(() => {
    document.title = "Brand Bootcamp";
  }, []);

  return (
    <div className="lander-background">
      <div
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Widget id="LsO4qlGX" style={{ width: "100%" }} className="my-form" />

        <Footer />
      </div>
    </div>
  );
};

export default Apply;
