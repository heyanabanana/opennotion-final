import React from "react";
import HomeList from "../components/HomeList";
import { Link } from "react-router-dom";
import { ReactComponent as Rocket } from "../assets/images/login-image.svg";
import "../styles/home.css";

export default function StartPage() {
  return (
    <React.Fragment>
      <div className="container_home">
        <div className="heading_home">
          {" "}
          <Rocket className="image_home" />{" "}
          <div className="container_heading_home">
            {" "}
            <h1 className="title_home">Empieza aquí! </h1>
            <Link to="/editorapp">
              <button className="newpost_home" to="./EditorApp.js">
                Nuevo Post
              </button>
            </Link>{" "}
          </div>
        </div>
        <Link to="/login"></Link>
        <div>
          <HomeList />
        </div>
      </div>
    </React.Fragment>
  );
}
