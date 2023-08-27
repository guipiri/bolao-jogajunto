import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function Login() {
  const [user, setUser] = useState();
  const [login, setLogin] = useState({});
  const hadleChange = (e) => {
    setLogin({
      ...login,
      username: e.target.form[0].value,
      password: e.target.form[1].value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch("https://sb-vip.ngx.bet/login", {
    //   method: "POST",
    //   body: JSON.stringify({ ...login, auth_code: null }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "no-cors",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios({
      url: "https://sb-vip.ngx.bet/login",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...login, auth_code: null },
    })
      .then((res) => {
        console.log(res);
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
