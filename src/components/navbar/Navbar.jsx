import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div id="navbarup" class="flex-center">
        <div id="navbarlogo" class="flex-center">
          <a href="https://jogajunto.net">
            <img
              id="logo"
              alt="logo"
              src="https://bplus-logos.s3.amazonaws.com/jogajunto/icon.png"
            />
          </a>
        </div>
      </div>
      <div class="flex-center navbarlinks">
        <NavLink to="/regras">Regras</NavLink>
        <NavLink to="/palpite">Palpites</NavLink>
        <a className="registrar" href="https://jogajunto.net/">Registrar</a>
        <button>Entrar</button>
      </div>
    </nav>
  );
}

export default Navbar;
