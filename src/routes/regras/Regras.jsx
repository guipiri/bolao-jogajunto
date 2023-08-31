import React, { useState } from "react";
import "./Regras.css";
import Alert from "../../components/alert/Alert";

function Regras() {
  const [alertOn, setAlertOn] = useState(true);
  return (
    <>
      <div>Regras</div>;
      <Alert alertOn={alertOn} dep={true} setAlertOn={setAlertOn} />
    </>
  );
}

export default Regras;
