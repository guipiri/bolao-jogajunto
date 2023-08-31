import React, { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({});
  const [loaderOn, setLoaderOn] = useState(false);
  const { handleLogin } = useContext(UserContext);
  const [alertOn, setAlertOn] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    text: "",
    error: false,
    dep: false,
    effect: null,
  });
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
        console.log(res);
        return res.json();
      })
      .then((data) => {
        if (data.hasOwnProperty("username")) {
          // Seting config data to UserContext
          handleLogin(data);
          // Configuration of login success alert
          setAlertConfig({
            text: "Seu login foi efetuado com sucesso!",
            effect: () => navigate("/palpite"),
          });
          // Activation of login success alert
          setAlertOn(true);
        } else {
          // Configuration of login success alert
          setAlertConfig({
            text: "Algo de errado com o seu login!",
            error: true,
          });
          // Activation of login success alert
          setAlertOn(true);
          e.target.reset();
        }
      })
      .catch((err) => {
        // Configuration of login error alert
        setAlertConfig({
          text: "Algo de errado com o seu login! Confira sua senha e nome de usuário.",
          error: true,
        });
        // Activation of login error alert
        setAlertOn(true);
        console.log(err);
        e.target.reset();
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
      {alertOn && (
        <Alert
          setAlertOn={setAlertOn}
          text={alertConfig.text}
          error={alertConfig.error}
          dep={alertConfig.dep}
          effect={alertConfig.effect}
        />
      )}
      {loaderOn && <Loader on={loaderOn} />}
    </>
  );
}

export default Login;
