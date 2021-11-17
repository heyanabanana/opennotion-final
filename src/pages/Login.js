import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LoginImage } from "../assets/images/login-image.svg";

import { ReactComponent as EyeOpen } from "../assets/icons/eye-open.svg";
import { ReactComponent as EyeClosed } from "../assets/icons/eye-closed.svg";

import "../styles/login.css";
export default function Login() {
  const showPassword = () => {
    let pass = document.getElementById("password-show");
    let iconOpen = document.getElementById("iconOpen");
    let iconClosed = document.getElementById("iconClosed");

    if (pass.type === "password") {
      pass.type = "text";
      iconOpen.classList.remove("oculto");

      iconClosed.classList.add("oculto");
    } else {
      pass.type = "password";
      iconOpen.classList.remove("descubierto");
      iconOpen.classList.add("oculto");

      iconClosed.classList.remove("oculto");
    }
  };

  return (
    <div className="container_login">
      <div className="left_login">
        <h1 className="title_login">Hey! 👋</h1>
        <h2 className="subtitle_login">Inicia sesion o registrate.</h2>
      </div>
      <div className="right_login">
        <LoginImage className="login_image" />

        <input className="form_login email" type="email" placeholder="Email" />
        <label className="label_password">
          <input
            className="form_login password"
            type="password"
            placeholder="Password"
            id="password-show"
          />
          <button className="show_password" onClick={showPassword}>
            <EyeOpen id="iconOpen" className="oculto" />
            <EyeClosed id="iconClosed" />
          </button>
        </label>
        <Link to="/home">
          <button className="login_button">Login</button>
        </Link>
      </div>
    </div>
  );
}
