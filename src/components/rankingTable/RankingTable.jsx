import React, { useEffect } from "react";
import trofeu from "../../assets/trofeu.svg";
import "./RankingTable.css";
import infoIcon from "../../assets/infoicon.png";
import triangle from "../../assets/triangle.png";

function RankingTable({ tableInfo, podiumVisible }) {
  return (
    <table className="tableRanking">
      <tbody>
        <tr>
          <th>Posição</th>
          <th>Usuário</th>
          <th>Prêmio</th>
          <th>Placares cravados</th>
        </tr>
        {tableInfo.map((row, index) => {
          if (podiumVisible) {
            if (index >= 3) {
              return (
                <tr key={`id${row.position}`}>
                  <td>
                    <div className="trofeuDiv">
                      <img src={trofeu} alt="" /> {row.position}
                    </div>
                  </td>
                  <td>{row.user}</td>
                  <td>
                    {row.reward.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td>{row.correctScores}</td>
                  <td className="infoIcon">
                    <div className="infoIconImg">
                      <img src={infoIcon} alt="incone-de-informação" />
                      <div className="tooltip">
                        <img
                          className="triangle"
                          src={triangle}
                          alt="triangle-azul"
                        />
                        {`Palpite feito em: ${new Date(
                          row.date * 1000
                        ).toLocaleString()}. O momento da aposta
                        (Data/hora) é um dos critérios de desempate.`}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }
          } else {
            return (
              <tr key={`id${row.position}`} className={index<3?`lugar${row.position}`:""}>
                <td>
                  <div className="trofeuDiv">
                    <img src={trofeu} alt="" /> {row.position}
                  </div>
                </td>
                <td>{row.user}</td>
                <td>
                  {row.reward.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td>{row.correctScores}</td>
                <td className="infoIcon">
                  <div className="infoIconImg">
                    <img src={infoIcon} alt="incone-de-informação" />
                    <div className="tooltip">
                      <img
                        className="triangle"
                        src={triangle}
                        alt="triangle-azul"
                      />
                      {`Palpite feito em: ${new Date(
                        row.date * 1000
                      ).toLocaleString()}. O momento da aposta
                      (Data/hora) é um dos critérios de desempate.`}
                    </div>
                  </div>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default RankingTable;
