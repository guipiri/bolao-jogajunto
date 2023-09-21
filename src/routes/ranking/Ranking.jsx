import React from "react";
import "./Ranking.css";
import logo from "../../assets/logo-bolao.svg";
import { NavLink, Outlet } from "react-router-dom";

function Ranking() {
  return (
    <div className="rankingPage flexColumnCenter">
      <div className="ranking flexColumnCenter">
        <img className="logoBolao" src={logo} />
        <div className="menuRanking">
          <NavLink className="rodadas" to="/ranking/1">
            1ª Rodada
          </NavLink>
          <NavLink className="rodadas" to="/ranking/2">
            2ª Rodada
          </NavLink>
          <NavLink className="rodadas" to="/ranking/3">
            3ª Rodada
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Ranking;
