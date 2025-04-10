import React, { useEffect } from "react";
import { Widget } from "@typeform/embed-react";

import "./apply.css"; // Import the CSS file

const Apply = () => {
  useEffect(() => {
    document.title = "Brand Bootcamp";
  }, []);

  return (
    <div className="lander-background">
      <div>
        <Widget id="LsO4qlGX" style={{ width: "100vw" }} className="my-form" />
      </div>
    </div>
  );
};

export default Apply;
