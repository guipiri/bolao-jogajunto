import React, { useState } from "react";
import "./Placar.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiSolidTShirt } from "react-icons/bi";

function Placar({
  scores,
  setScores,
  index,
  aTeamName,
  bTeamName,
  isChangeable,
}) {
  const plusOne = (team) => {
    if (!isChangeable) return;
    const newScores = [...scores];
    newScores[index][team] = Math.round(newScores[index][team]) + 1;
    setScores([...newScores]);
  };

  const minusOne = (team) => {
    if (!isChangeable) return;
    if (scores[index][team] <= 0) return;
    const newScores = [...scores];
    newScores[index][team] = Math.round(newScores[index][team]) - 1;
    setScores([...newScores]);
  };

  const handleChange = (e) => {
    const newScores = [...scores];
    newScores[index][e.target.className] = e.target.value;
    setScores([...newScores]);
  };

  const handleBlur = () => {
    const newScores = scores.map((score, i) => {
      if (i < 10) {
        return [
          Math.max(0, Math.round(score[0])),
          Math.max(0, Math.round(score[1])),
        ];
      } else {
        return score;
      }
    });
    setScores([...newScores]);
  };
  return (
    <div className="placar">
      <div className="teams">
        <div className="teamCircle">
          <BiSolidTShirt />
        </div>
        <span>{aTeamName}</span>
        <div className="modifyScore">
          <AiOutlineMinusCircle
            className={!isChangeable && "notChangeable"}
            onClick={() => minusOne(0)}
          />
          <AiOutlinePlusCircle
            className={!isChangeable && "notChangeable"}
            onClick={() => plusOne(0)}
          />
        </div>
      </div>
      <div className="teams values">
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          type="number"
          value={scores[index][0]}
          className="0"
          name={aTeamName}
          disabled={!isChangeable}
        />
        <span>-</span>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          type="number"
          value={scores[index][1]}
          className="1"
          name={bTeamName}
          disabled={!isChangeable}
        />
      </div>
      <div className="teams">
        <div className="teamCircle">
          <BiSolidTShirt />
        </div>
        <span>{bTeamName}</span>
        <div className="modifyScore">
          <AiOutlineMinusCircle
            className={!isChangeable && "notChangeable"}
            onClick={() => minusOne(1)}
          />
          <AiOutlinePlusCircle
            className={!isChangeable && "notChangeable"}
            onClick={() => plusOne(1)}
          />
        </div>
      </div>
    </div>
  );
}

export default Placar;
