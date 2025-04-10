import React from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToAnchor from "./components/util/scroll";
import { Privacy } from "./components/privacy";
import { Terms } from "./components/terms";
import { EarningsDisclaimer } from "./components/earningsDisclaimer";
import Header from "./components/header";
import ApplyCalendly from "./components/applyCalendly";
import LandingPage from "./components/lander";

// import ReactPixel from "react-facebook-pixel";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/apply" element={<ApplyCalendly />}></Route>
        {/* <Route exact path="/book-a-call" element={<BookCall />}></Route> */}

        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route exact path="/terms-of-service" element={<Terms />}></Route>
        <Route
          exact
          path="/earnings-disclaimer"
          element={<EarningsDisclaimer />}
        ></Route>
        <Route path="/*" element={<LandingPage />}></Route>

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
