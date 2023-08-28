import React, { useState } from "react";
import "./Placar.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiSolidTShirt } from "react-icons/bi";

function Placar() {
  const [score, setScore] = useState({ A: 0, B: 0 });
  const plusOne = (team) => {
    if (team === "A") {
      setScore({ ...score, A: score.A + 1 });
    } else {
      setScore({ ...score, B: score.B + 1 });
    }
  };
  const minusOne = (team) => {
    if (team === "A") {
      if (score.A != 0) {
        setScore({ ...score, A: score.A - 1 });
      }
    } else {
      if (score.B != 0) {
        setScore({ ...score, B: score.B - 1 });
      }
    }
  };
  return (
    <div className="placar">
      <div>
        <div className="teamCircle">
          <BiSolidTShirt />
        </div>
        <span>Time A</span>
        <div className="modifyScore">
          <AiOutlineMinusCircle onClick={() => minusOne("A")} />
          <AiOutlinePlusCircle onClick={() => plusOne("A")} />
        </div>
      </div>
      <h3>
        {score.A} x {score.B}
      </h3>
      <div>
        <div className="teamCircle">
          <BiSolidTShirt />
        </div>
        <span>Time B</span>
        <div className="modifyScore">
          <AiOutlineMinusCircle onClick={() => minusOne("B")} />
          <AiOutlinePlusCircle onClick={() => plusOne("B")} />
        </div>
      </div>
    </div>
  );
}

export default Placar;
