import React, { useEffect } from "react";
import "./bookCall.css"; // Import the CSS file

const ApplyCalendly = () => {
  useEffect(() => {
    document.title = "Brand Bootcamp";

    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      // Initialize Calendly widget after script is loaded
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/nathanblee/bookings?primary_color=ff6f3c",
          parentElement: document.querySelector(".calendly-inline-widget"),
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="lander-background">
      <div className="bookcall-background">
        <div className="callout">
          <h1>Book a Call Below 👇</h1>
          <b>⏳ Please give the calendar a few seconds to load ⏳</b>
          <br />
        </div>
        <div className="calendly-inline-widget"></div>
      </div>{" "}
    </div>
  );
};

export default ApplyCalendly;
