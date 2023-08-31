import React from "react";
import "./Alert.css";
import { BiErrorCircle } from "react-icons/bi";

function Alert({ alertOn, setAlertOn, dep }) {
  function handleClose() {
    setAlertOn(false);
  }
  return (
    <div className={alertOn ? "alertConteiner" : "none"}>
      <div className="alert">
        <span onClick={handleClose}>X</span>
        <BiErrorCircle />
        <p>Ops! Você ainda não fez um depósito!</p>
        <button className={dep ? "depButton" : "none"}>Depositar</button>
      </div>
    </div>
  );
}

export default Alert;
