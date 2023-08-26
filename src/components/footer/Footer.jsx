import React from "react";
import "./Footer.css";
import logo from  "../../assets/logo.png"

function Footer() {
  return (
    <footer className="flex-center">
      <img src={logo} />
      <span>© 2023 - JogaJunto</span>
    </footer>
  );
}

export default Footer;
