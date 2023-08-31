import React, { useEffect } from "react";
import "./Alert.css";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";

function Alert({ text, setAlertOn, error, dep, effect }) {
  function handleClose() {
    setAlertOn(false);
  }

  useEffect(() => {
    console.log("oi");
    setTimeout(() => {
      effect ? effect() : setAlertOn(false);
    }, 5000);
  }, []);

  return (
    <div className="alertConteiner">
      <div className="alert">
        <span onClick={handleClose}>X</span>
        {error && <BiErrorCircle className="error" />}
        {!error && <BiCheckCircle className="success" />}
        <p>{text}</p>
        <button className={dep ? "depButton" : "none"}>Depositar</button>
      </div>
    </div>
  );
}

export default Alert;
