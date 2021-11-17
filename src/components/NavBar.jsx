import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./toggle/Toggle";

import "../styles/navbar.css";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className="navbar_container">
        <Link to="/home">
          <button className="home_button">Home</button>
        </Link>

        <Toggle />
      </div>
    </React.Fragment>
  );
}
