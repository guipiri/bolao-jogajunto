import React, { useState } from "react";
import "./Palpite.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
function Palpite() {
  const [score, setScore] = useState({ A1: 0, B1: 0 });

  return (
    <div className="palpite">
      <div className="palpitesDesc">
        <h3>Bolão Joga Junto</h3>
        <p>Rodada semana do consumidor</p>
        <div className="placar">
          <div>
            <div className="teamCircle"></div>
            <span>Time A</span>
            <div className="modifyScore">
              <AiOutlineMinusCircle style={{ color: "red" }} />
              <AiOutlinePlusCircle  />
            </div>
          </div>
          <h3>
            {score.A1} x {score.B1}
          </h3>
          <div>
            <div className="teamCircle"></div>
            <span>Time B</span>
            <div className="modifyScore">
              <AiOutlineMinusCircle style={{ color: "red" }} />
              <AiOutlinePlusCircle  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Palpite;
