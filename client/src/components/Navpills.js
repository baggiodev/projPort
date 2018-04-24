import React from "react";
import { Link } from "react-router-dom";

const Navpills = () => (
  <div className="row">
  <div className="col-md-12">
  <ul className="nav nav-tabs d-flex justify-content-around">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/about">About</Link>
    </li>
    <li className={window.location.pathname === "/portfolio" ? "active" : ""}>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li className={window.location.pathname === "/contact" ? "active" : ""}>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
  </div>
  </div>
);

export default Navpills;
