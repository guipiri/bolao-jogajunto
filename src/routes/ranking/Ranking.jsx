import React from "react";
import "./Ranking.css";
import logo from "../../assets/logo-bolao.svg";
import { NavLink, Outlet } from "react-router-dom";
import rankingResults from "../../supportFunctions/rankingResults";

function Ranking() {
  return (
    <div className="rankingPage flexColumnCenter">
      <div className="ranking flexColumnCenter">
        <img className="logoBolao" src={logo} />
        <div className="menuRanking">
          {rankingResults.map((rodada, index) => {
            return (
              <NavLink
                key={`rodadasLink${index}`}
                className="rodadas"
                to={`/ranking`}
              >
                {`${index + 1}ª Rodada`}
              </NavLink>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Ranking;
