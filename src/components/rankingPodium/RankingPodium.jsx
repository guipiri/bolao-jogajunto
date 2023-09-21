import React from "react";
import "./RankingPodium.css";
import infoIcon from "../../assets/infoicon.png";
import trofeuPrata from "../../assets/trofeu-prata.png";
import trofeuOuro from "../../assets/trofeu-ouro.png";
import trofeuBronze from "../../assets/trofeu-bronze.png";
import triangle from "../../assets/triangle.png";

function RankingPodium({ rankingInfo }) {
  return (
    <>
      <div className="trofeus">
        <div className="second flexColumnCenter">
          <img src={trofeuPrata} alt="trofeu-prata" />
          <h2>{rankingInfo[1].user}</h2>
        </div>
        <div className="first flexColumnCenter">
          <img src={trofeuOuro} alt="trofeu-ouro" />
          <h2>{rankingInfo[0].user}</h2>
        </div>
        <div className="third flexColumnCenter">
          <img src={trofeuBronze} alt="trofeu-bronze" />
          <h2>{rankingInfo[2].user}</h2>
        </div>
      </div>
      <div className="rankingPodium">
        <div className="secondPlace podium">
          <div className="flexColumnCenter">
            <h2>2º</h2>
            <p>
              {rankingInfo[1].reward.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              })}{" "}
              em dinheiro
            </p>
            <p>
              <span>{rankingInfo[1].correctScores} placares cravados</span>
            </p>
            <div className="infoIconImg">
              <img src={infoIcon} alt="incone-de-informação" />
              <div className="tooltip">
                <img className="triangle" src={triangle} alt="triangle-azul" />
                {`Palpite feito em: ${new Date(
                  rankingInfo[1].date * 1000
                ).toLocaleString()}. O momento da aposta
                    (Data/hora) é um dos critérios de desempate.`}
              </div>
            </div>
          </div>
        </div>
        <div className="firstPlace podium">
          <div className="flexColumnCenter">
            <h2>1º</h2>
            <p>
              {rankingInfo[0].reward.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              })}{" "}
              em dinheiro
            </p>
            <p>
              <span>{rankingInfo[0].correctScores} placares cravados</span>
            </p>
            <div className="infoIconImg">
              <img src={infoIcon} alt="incone-de-informação" />
              <div className="tooltip">
                <img className="triangle" src={triangle} alt="triangle-azul" />
                {`Palpite feito em: ${new Date(
                  rankingInfo[0].date * 1000
                ).toLocaleString()}. O momento da aposta
                    (Data/hora) é um dos critérios de desempate.`}
              </div>
            </div>
          </div>
        </div>
        <div className="thirdPlace podium">
          <div className="flexColumnCenter">
            <h2>3º</h2>
            <p>
              {rankingInfo[2].reward.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
              })}{" "}
              em dinheiro
            </p>
            <p>
              <span>{rankingInfo[2].correctScores} placares cravados</span>
            </p>
            <div className="infoIconImg">
              <img src={infoIcon} alt="incone-de-informação" />
              <div className="tooltip">
                <img className="triangle" src={triangle} alt="triangle-azul" />
                {`Palpite feito em: ${new Date(
                  rankingInfo[2].date * 1000
                ).toLocaleString()}. O momento da aposta
                    (Data/hora) é um dos critérios de desempate.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RankingPodium;
