import React, { useState } from "react";
import "./Placar.css";
import { BiSolidTShirt } from "react-icons/bi";

function Placar({
  scores,
  setScores,
  index,
  aTeamName,
  bTeamName,
  isChangeable,
  description,
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
    <div className="placarDiv">
      <p>{description}</p>
      <div className="placar">
        <div className="teams">
          <div className="teamCircle">
            <img src={`src/assets/${aTeamName}.svg`} />
          </div>
          <span>{aTeamName}</span>
          <div className="modifyScore">
            <span
              className={!isChangeable && "notChangeable"}
              onClick={() => minusOne(0)}
            >
              -
            </span>
            <span
              className={!isChangeable && "notChangeable"}
              onClick={() => plusOne(0)}
            >
              +
            </span>
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
          <span>x</span>
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
            <img src={`src/assets/${bTeamName}.svg`} />
          </div>
          <span>{bTeamName}</span>
          <div className="modifyScore">
            <span
              className={!isChangeable && "notChangeable"}
              onClick={() => minusOne(1)}
            >
              -
            </span>
            <span
              className={!isChangeable && "notChangeable"}
              onClick={() => plusOne(1)}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placar;
