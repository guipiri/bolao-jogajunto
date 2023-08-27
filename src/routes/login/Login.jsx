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
        localStorage.setItem("USER", JSON.stringify(data));
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios({
    //   url: "https://script.google.com/macros/s/AKfycbxu9UMRXpiOcwO5vUZqf1n2j3EfxgAMlw-d_LD-BSL8qo1beLGXXLZ9Q0AANH_0GQJB/exec",
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization:
    //     // "Bearer ya29.a0AfB_byDQv4uLoWlgUurG4jQXLk5AK4FlIhGzw4tuiBDScUCIxl2-gm-QnuvNJcCTm3g3kCjCGZifkRNsT5iCcB_jiOZ4-tAYHmntVo0m3rcnuvOyTQ3jieBKZS8bz2vLUQ1stnlaHFtZ0rsl3h-uIlGU7z4mKS1GdnNLT4kaCgYKAUgSARASFQHsvYlsOeXTqzaiEYJoFEPSTHbpaA0174",
    //   },
    //   data: { ...login, auth_code: null },
    //   mode: "no-cors",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
