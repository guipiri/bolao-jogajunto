import React from "react";
import "./Alert.css";
import { BiErrorCircle } from "react-icons/bi";

function Alert({ on, dep }) {
  return (
    <div className={on ? "alertConteiner" : "none"}>
      <div className="alert">
        <span>X</span>
        <BiErrorCircle />
        <p>Ops! Você ainda não fez um depósito!</p>
        <button className={dep ? "depButton" : "none"}>Depositar</button>
      </div>
    </div>
  );
}

export default Alert;
