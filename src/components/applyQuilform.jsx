import React, { useEffect } from "react";

import "./applyQuilform.css"; // Import the CSS file

const ApplyQuilform = () => {
  useEffect(() => {
    document.title = "Creator Application";
  }, []);

  return (
    <div className="lander-background">
      <iframe
        title="quilform"
        src="https://4411849f6164.quillforms.app/forms/application/"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default ApplyQuilform;
