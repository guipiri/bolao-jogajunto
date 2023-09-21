import React from "react";
import "./Ranking.css";
import logo from "../../assets/logo-bolao.svg";
import { NavLink, Outlet } from "react-router-dom";
import rankingResults from "../../supportFunctions/rankingResults";
import campeonato from "../../assets/campeonato.png";

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
              // <NavLink
              //   key={`rodadasLink${index}`}
              //   className="rodadas"
              //   to={`/ranking/${index+1}`}
              // >
              //   {`${index + 1}ª Rodada`}
              // </NavLink>
            );
          })}
        </div>
        <p className="championshipName">
          <img src={campeonato} alt="logo-do-campeonato-brasileiro" />
          Campeonato Brasileiro - Série A - 24ª rodada{" "}
        </p>
        <Outlet />
      </div>
    </div>
  );
}

export default Ranking;
