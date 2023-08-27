import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div id="navbarup" className="flex-center">
        <div id="navbarlogo" className="flex-center">
          <a href="https://jogajunto.net">
            <img
              id="logo"
              alt="logo"
              src="https://bplus-logos.s3.amazonaws.com/jogajunto/icon.png"
            />
          </a>
        </div>
      </div>
      <div className="flex-center navbarlinks">
        <NavLink to="/regras" className="regrasepalpites">
          Regras
        </NavLink>
        <NavLink to="/palpite" className="regrasepalpites">
          Palpites
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "login" : "login")}
        >
          Entrar
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
