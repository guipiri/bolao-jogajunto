import React from "react";
import "./Loader.css";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#0A347B"
      ariaLabel="tail-spin-loading"
      radius="0"
      wrapperStyle={{}}
      wrapperClass="loaderConteiner"
      visible={true}
    />
  );
}

export default Loader;
