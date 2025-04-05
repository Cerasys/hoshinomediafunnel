import React from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToAnchor from "./components/util/scroll";
import { Privacy } from "./components/privacy";
import { Terms } from "./components/terms";
import { EarningsDisclaimer } from "./components/earningsDisclaimer";
import Apply from "./components/apply";

// import ReactPixel from "react-facebook-pixel";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // useEffect(() => {
  //   const options = {
  //     autoConfig: true, // set pixel's autoConfig
  //     debug: false, // enable logs
  //   };
  //   ReactPixel.init("544708918525106", options);
  // }, []);

  return (
    <div>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Apply />}></Route>
        {/* <Route exact path="/book-a-call" element={<BookCall />}></Route> */}

        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route exact path="/terms-of-service" element={<Terms />}></Route>
        <Route
          exact
          path="/earnings-disclaimer"
          element={<EarningsDisclaimer />}
        ></Route>

        {/* Catch-all route */}
      </Routes>
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
