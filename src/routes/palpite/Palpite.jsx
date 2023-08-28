import React, { useState } from "react";
import "./Palpite.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiSolidTShirt } from "react-icons/bi";
import Placar from "../../components/placar/Placar";

function Palpite() {
  return (
    <div className="palpite">
      <div className="palpitesDesc">
        <h3>Bolão Joga Junto</h3>
        <p>Rodada semana do consumidor</p>
        <Placar />
        <Placar />
        <Placar />
        <Placar />
        <Placar />
      </div>
    </div>
  );
}

export default Palpite;
