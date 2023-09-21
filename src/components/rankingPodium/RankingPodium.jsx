import React from "react";
import "./RankingPodium.css";
import infoIcon from "../../assets/infoicon.png";

function RankingPodium() {
  return (
    <div className="rankingPodium">
      <div className="secondPlace podium">
        <div className="flexColumnCenter">
          <h2>2º</h2>
          <p>R$ 5 em dinheiro</p>
          <p>
            <span>8 placares cravados</span>
          </p>
          <img src={infoIcon} alt="info-icon" />
        </div>
      </div>
      <div className="firstPlace podium">
        <div className="flexColumnCenter">
          <h2>1º</h2>
          <p>R$ 5.000 em dinheiro</p>
          <p>
            <span>8 placares cravados</span>
          </p>
          <img src={infoIcon} alt="info-icon" />
        </div>
      </div>
      <div className="thirdPlace podium">
        <div className="flexColumnCenter">
          <h2>3º</h2>
          <p>R$ 5 em dinheiro</p>
          <p>
            <span>8 placares cravados</span>
          </p>

          <img src={infoIcon} alt="info-icon" />
        </div>
      </div>
    </div>
  );
}

export default RankingPodium;
