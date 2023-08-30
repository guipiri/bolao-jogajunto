import React, { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

function Login() {
  const [login, setLogin] = useState({});
  const [loaderOn, setLoaderOn] = useState(false);
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const hadleChange = (e) => {
    setLogin({
      ...login,
      username: e.target.form[0].value,
      password: e.target.form[1].value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoaderOn(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbwoLx3bRQ7uPnZhI6mb1k-9MkxhmANmIvPPxNCArmzbDo1cKI56VPGtPHoZP5__N-3l/exec",
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
        if (data.hasOwnProperty("username")) {
          handleLogin(data);
          navigate("/");
        } else {
          alert("Algo de errado com seu login!");
          e.target.reset();
        }
      })
      .catch((err) => {
        alert(`Algo de errado com seu login: ${err}`);
        console.log(err);
      })
      .finally(() => {
        setLoaderOn(false);
      });
  };

  return (
    <>
      <div className="formdiv">
        <form onChange={hadleChange} onSubmit={handleSubmit} id="form">
          <label htmlFor="username">Nome de usuário</label>
          <input autoComplete="true" type="text" id="username" required />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" required />
          <button className="entrar" type="submit">
            Entrar
          </button>
          <span>
            Ainda não tem uma conta Joga Junto?
            <a href="https://www.jogajunto.net/create-user"> Cadastre-se.</a>
          </span>
        </form>
      </div>
      <Loader on={loaderOn} />
    </>
  );
}

export default Login;
