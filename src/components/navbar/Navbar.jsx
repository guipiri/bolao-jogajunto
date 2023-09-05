import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD

function Navbar() {
  const { user } = useContext(UserContext);
  let username;
  if (user) {
    let { username } = user;
  }
  console.log(username);
=======
import { UserContext } from "../../context/UserContext";

function Navbar() {
  const { user, handleLogout } = useContext(UserContext);
  let username;
  if (user) {
    username = user.username;
  }
>>>>>>> main

  return (
    <nav className="navbar">
      <div id="navbarup" className="flex-center">
        <span className={username ? "bemvindo" : "none"}>Olá, {username}!</span>
        <div id="navbarlogo" className="flex-center">
          <a href="https://jogajunto.net" target="_blank">
            <img
              id="logo"
              alt="logo"
              src="https://bplus-logos.s3.amazonaws.com/jogajunto/icon.png"
            />
          </a>
        </div>
      </div>
      <div className="flex-center navbarlinks">
<<<<<<< HEAD
          <NavLink to="/regras">Regras</NavLink>
          <NavLink to="/palpite">Palpites</NavLink>
          <button>Entrar</button>
=======
        <NavLink to="/" className="regrasepalpites">
          Como Jogar
        </NavLink>
        <NavLink to="/palpite" className="regrasepalpites">
          Palpites
        </NavLink>
        <NavLink
          to="/login"
          className={() => (username ? "login none" : "login")}
        >
          Entrar
        </NavLink>
        <button onClick={handleLogout} className={username ? "login" : "none"}>
          Sair
        </button>
>>>>>>> main
      </div>
    </nav>
  );
}

export default Navbar;
