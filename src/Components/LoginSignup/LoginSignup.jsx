import React from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user icon" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="forgot-password">
        Lost Password? <span>Click here</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};