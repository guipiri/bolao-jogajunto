import React, { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AffiliateIdContext } from "../../context/AffiliateIdContext";
import { AlertContext } from "../../context/AlertContext";

function Login() {
  const [login, setLogin] = useState({});
  const [loaderOn, setLoaderOn] = useState(false);
  const { handleLogin } = useContext(UserContext);
  const affiliateId = useContext(AffiliateIdContext);
  const { setAlertConfig, setAlertOn } = useContext(AlertContext);

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
      .then((res) => res.json())
      .then((data) => {
        if (data.hasOwnProperty("username")) {
          // Seting config data to UserContext
          handleLogin(data);
          // Configuration of login success alert
          setAlertConfig({
            text: "Seu login foi efetuado com sucesso!",
            type: "success",
            effect: () => navigate("/palpite"),
          });
        } else {
          // Configuration of login error alert
          setAlertConfig({
            text: "Algo de errado com o seu login!",
            type: "error",
          });
          e.target.reset();
        }
      })
      .catch((err) => {
        // Configuration of login error alert
        setAlertConfig({
          text: "Algo de errado com o seu login! Confira sua senha e nome de usuário.",
          type: "error",
        });
        // Activation of login error alert
        setAlertOn(true);
        console.log(err);
        e.target.reset();
      })
      .finally(() => {
        // Alert activation
        setAlertOn(true);
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
          <AiFillEye
            id="visibleEye"
            onClick={(e) => {
              const inpuPassword = document.getElementById("password");
              const invisibleEye = document.getElementById("invisibleEye");
              const visibleEye = document.getElementById("visibleEye");
              inpuPassword.attributes.type.value = "text";
              invisibleEye.classList.toggle("none");
              visibleEye.classList.toggle("none");
            }}
          />
          <AiFillEyeInvisible
            id="invisibleEye"
            className="none"
            onClick={(e) => {
              const inpuPassword = document.getElementById("password");
              const invisibleEye = document.getElementById("invisibleEye");
              const visibleEye = document.getElementById("visibleEye");
              inpuPassword.attributes.type.value = "password";
              invisibleEye.classList.toggle("none");
              visibleEye.classList.toggle("none");
            }}
          />
          <button className="entrar" type="submit">
            Entrar
          </button>
          <span>
            Ainda não tem uma conta Joga Junto?
            <a
              href={`https://www.jogajunto.net/register${affiliateId}`}
              target="_blank"
            >
              {" "}
              Cadastre-se.
            </a>
          </span>
        </form>
      </div>
      {loaderOn && <Loader />}
    </>
  );
}

export default Login;
