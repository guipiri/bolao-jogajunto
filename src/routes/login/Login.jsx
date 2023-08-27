import React, { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../../context/UserContext";

function Login() {
  const [login, setLogin] = useState({});
  const { user, handleLogin } = useContext(UserContext);
  const hadleChange = (e) => {
    setLogin({
      ...login,
      username: e.target.form[0].value,
      password: e.target.form[1].value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycbxdulvX2FKuZ3o5JTY7dIULcooVV8Bo4T8gFDer16N3vMzT8_Ml5LZanQbcrt-VSBqF/exec",
      {
        method: "POST",
        body: JSON.stringify({ ...login, auth_code: null }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        redirect: "follow",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        handleLogin(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="formdiv">
      <form onChange={hadleChange} onSubmit={handleSubmit} id="form">
        <label htmlFor="username">Nome de usuário</label>
        <input autoComplete="true" type="text" id="username" required />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" required />
        <button className="entrar" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
