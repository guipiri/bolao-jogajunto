import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);
  let username;
  if (user) {
    let { username } = user;
  }
  console.log(username);

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
        <NavLink to="/regras">Regras</NavLink>
        <NavLink to="/palpite">Palpites</NavLink>
        <button>Entrar</button>
      </div>
    </nav>
  );
}

export default Navbar;
