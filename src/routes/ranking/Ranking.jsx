import React from "react";
import "./Ranking.css";
import logo from "../../assets/logo-bolao.svg";
import trofeu from "../../assets/trofeu.svg";

function Ranking() {
  return (
    <div className="rankingPage flexColumnCenter">
      <div className="ranking flexColumnCenter">
        <img className="logoBolao" src={logo} />
        <div className="menuRanking">
          <button className="rodadas">1ª Rodada</button>
          <button className="rodadas">2ª Rodada</button>
          <button className="rodadas">3ª Rodada</button>
        </div>
        <table cellPadding="8">
          <tbody>
            <tr>
              <th>Posição</th>
              <th>Usuário</th>
              <th>Prêmio</th>
              <th>Placares cravados</th>
            </tr>
            <tr>
              <td>
                <div className="trofeuDiv">
                  <img src={trofeu} alt="" /> 1º
                </div>
              </td>
              <td>guicrm</td>
              <td>R$10.000</td>
              <td>6</td>
            </tr>
            <tr>
              <td>
                <div className="trofeuDiv">
                  <img src={trofeu} alt="" /> 1º
                </div>
              </td>
              <td>guicrm</td>
              <td>R$10.000</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
