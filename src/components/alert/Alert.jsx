import React, { useEffect } from "react";
import "./Alert.css";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";

function Alert({ text, setAlertOn, type, dep, effect }) {
  function handleClose() {
    effect ? effect() : setAlertOn(false);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      effect ? effect() : setAlertOn(false);
    }, 4000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <div className="alertConteiner">
      <div className="alert">
        <span onClick={handleClose}>X</span>
        {type == "error" && <BiErrorCircle className="error" />}
        {type == "warning" && <BiErrorCircle className="warning" />}
        {type == "success" && <BiCheckCircle className="success" />}
        <p>{text}</p>
        <a
          href="https://www.jogajunto.net/deposit?modal=open"
          className={dep ? "depButton" : "none"}
        >
          Depositar
        </a>
      </div>
    </div>
  );
}

export default Alert;
