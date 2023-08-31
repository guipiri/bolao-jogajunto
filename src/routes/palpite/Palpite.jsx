import React, { useEffect, useState, useContext } from "react";
import "./Palpite.css";
import Placar from "../../components/placar/Placar";
import { UserContext } from "../../context/UserContext";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";

function Palpite() {
  const matches = [
    ["Bahia", "Santos"],
    ["Vasco", "CFC"],
    ["América", "Bragantino"],
    ["Goias", "Flamengo"],
    ["Fluminense", "Cruzeiro"],
    ["São Paulo", "Fortaleza"],
    ["CAP", "Internacional"],
    ["Grêmio", "Palmeiras"],
    ["Corinthians", "Botafogo"],
    ["CAM", "Cuiabá"],
  ];

  const url =
    "https://script.google.com/macros/s/AKfycbxFhcy77WfGk3iFhZJsh5Fsqxfq7CLAFuuvsiz-P35XyLi4_CArOq0IeR4T2AZLhaI/exec";

  const [isChangeable, setIsChangeable] = useState(false);
  const [loaderOn, setLoaderOn] = useState(false);
  const [scores, setScores] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    undefined,
    undefined,
  ]);
  const [alertOn, setAlertOn] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    text: "",
    type: "",
    dep: false,
    effect: null,
  });

  const { user } = useContext(UserContext);
  let userId;
  let ftd_date;
  if (user) {
    userId = user._id;
    ftd_date = user.ftd_date;
  }

  const handleEdit = () => {
    const nowUnix = Math.round(Date.now() / 1000);
    const firstMatch = 1695078000;
    if (nowUnix > firstMatch) {
      setAlertConfig({
        ...alertConfig,
        text: "Palpites fechados pois o primeiro confronto já começou!",
        type: "warning",
        dep: false,
      });
      setAlertOn(true);
    } else if (!userId) {
      setAlertConfig({
        ...alertConfig,
        text: "Faça login para fazer seus palpites",
        type: "warning",
        dep: false,
      });
      setAlertOn(true);
    } else if (!ftd_date) {
      setAlertConfig({
        ...alertConfig,
        text: "Faça seu primeiro depósito para participar!",
        type: "warning",
        dep: true,
      });
      setAlertOn(true);
    } else {
      setIsChangeable(true);
    }
  };

  useEffect(() => {
    if (userId) {
      setLoaderOn(true);
      fetch(`${url}?id=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        redirect: "follow",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data) {
            let placares = [];
            data.forEach((element, index) => {
              if (index < 10) {
                placares.push(JSON.parse(element));
              } else {
                placares.push(element);
              }
            });
            setScores(placares);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoaderOn(false);
        });
    }
  }, []);

  const handleSubmit = () => {
    const body = [...scores];
    body.pop();
    body.pop();
    setLoaderOn(true);
    console.log(loaderOn);
    fetch(`${url}?id=${userId}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      // mode: "no-cors",
      redirect: "follow",
    })
      .then((res) => {
        setIsChangeable(false);
        return res.json();
      })
      .then((data) => {
        setAlertConfig({
          text: "Palpiter enviados com sucesso!",
          type: "success",
          dep: false,
        });
        setAlertOn(true);
      })
      .catch((err) => {
        setAlertConfig({
          text: "Os seus palpites não foram enviados! Tente novamente mais tarde.",
          type: "error",
          dep: false,
        });
        setAlertOn(true);
      })
      .finally(() => {
        setLoaderOn(false);
      });
  };
  return (
    <>
      <div className="flexColumnCenter">
        <div className="palpites flexColumnCenter">
          <div className="palpitesHeader">
            <div>
              <h3>Bolão Joga Junto</h3>
              <p>Qual será a pontuação correta?</p>
            </div>
            <button
              className={isChangeable ? "none" : "button"}
              onClick={handleEdit}
            >
              Editar palpites
            </button>
          </div>
          {matches.map((element, index) => {
            if (index < 10) {
              return (
                <Placar
                  key={`partida${index + 1}`}
                  aTeamName={element[0]}
                  bTeamName={element[1]}
                  arrayScore={element}
                  isChangeable={isChangeable}
                  scores={scores}
                  setScores={setScores}
                  index={index}
                />
              );
            }
          })}
        </div>
        <div className="flexColumnCenter divButton">
          <button
            onClick={handleSubmit}
            type="submit"
            className={!isChangeable ? "none" : "button"}
          >
            Enviar
          </button>
          <button
            className={isChangeable ? "none" : "button above"}
            onClick={handleEdit}
          >
            Editar palpites
          </button>
        </div>
      </div>
      {alertOn && (
        <Alert
          setAlertOn={setAlertOn}
          text={alertConfig.text}
          type={alertConfig.type}
          dep={alertConfig.dep}
          effect={alertConfig.effect}
        />
      )}
      {loaderOn && <Loader />}
    </>
  );
}

export default Palpite;
