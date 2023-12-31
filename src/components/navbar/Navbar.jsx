import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AffiliateIdContext } from "../../context/AffiliateIdContext";

function Navbar() {
  const { user, handleLogout } = useContext(UserContext);
  const affiliateId = useContext(AffiliateIdContext);

  let username;
  if (user) {
    username = user.username;
  }

  return (
    <nav className="navbar">
      <div id="navbarup" className="flex-center">
        <span className={username ? "bemvindo" : "none"}>Olá, {username}!</span>
        <div id="navbarlogo" className="flex-center">
          <a
            href={`https://www.jogajunto.net/register${affiliateId}`}
            target="_blank"
          >
            <img
              id="logo"
              alt="logo"
              src="https://bplus-logos.s3.amazonaws.com/jogajunto/icon.png"
            />
          </a>
        </div>
      </div>
      <div className="flex-center navbarlinks">
        <NavLink to="/" className="regrasepalpites">
          Como Jogar
        </NavLink>
        <NavLink to="/palpite" className="regrasepalpites">
          Palpites
        </NavLink>
        <NavLink to="/ranking" className="regrasepalpites">
          Ranking
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
      </div>
    </nav>
  );
}

export default Navbar;
