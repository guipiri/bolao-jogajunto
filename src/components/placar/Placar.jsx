import React, { useState } from "react";
import "./Placar.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiSolidTShirt } from "react-icons/bi";

function Placar({ arrayScore, aTeamName, bTeamName, isChangeable }) {
  const [score, setScore] = useState({ A: arrayScore[0], B: arrayScore[1] });

  const plusOne = (team) => {
    if (!isChangeable) return;
    if (team === "A") {
      setScore({ ...score, A: Math.round(score.A) + 1 });
    } else {
      setScore({ ...score, B: Math.round(score.B) + 1 });
    }
  };
  const minusOne = (team) => {
    if (!isChangeable) return;
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

  const handleChange = (e) => {
    if (e.target.id == "A") {
      setScore({
        ...score,
        A: e.target.value == "" ? "" : Math.round(e.target.value),
      });
    } else {
      setScore({
        ...score,
        B: e.target.value == "" ? "" : Math.round(e.target.value),
      });
    }
  };
  return (
    <div className="placar">
      <div className="teams">
        <div className="teamCircle">
          <BiSolidTShirt />
        </div>
        <span>{aTeamName}</span>
        <div className="modifyScore">
          <AiOutlineMinusCircle onClick={() => minusOne("A")} />
          <AiOutlinePlusCircle onClick={() => plusOne("A")} />
        </div>
      </div>
      <div className="teams values">
        <input onChange={handleChange} type="number" value={score.A} id="A" />
        <span>-</span>
        <input onChange={handleChange} type="number" value={score.B} id="B" />
      </div>
      <div className="teams">
        <div className="teamCircle">
          <BiSolidTShirt />
        </div>
        <span>{bTeamName}</span>
        <div className="modifyScore">
          <AiOutlineMinusCircle onClick={() => minusOne("B")} />
          <AiOutlinePlusCircle onClick={() => plusOne("B")} />
        </div>
      </div>
    </div>
  );
}

export default Placar;
