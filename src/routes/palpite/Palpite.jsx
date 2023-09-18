import React, { useEffect, useState, useContext } from "react";
import "./Palpite.css";
import Placar from "../../components/placar/Placar";
import { UserContext } from "../../context/UserContext";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import logoBolao from "../../assets/bolao-palpite-header.png";
import campeonato from "../../assets/campeonato.png";
import oldFtdUsers from "../../supportFunctions/oldFtdUsers";
import matches from "../../supportFunctions/matches";
import { AlertContext } from "../../context/AlertContext";

function Palpite() {
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
  const { setAlertConfig, setAlertOn } = useContext(AlertContext);
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
        text: "Palpites fechados pois o primeiro confronto já começou!",
        type: "warning",
        dep: false,
      });
      setAlertOn(true);
    } else if (!userId) {
      setAlertConfig({
        text: "Faça login para fazer seus palpites",
        type: "warning",
        dep: false,
      });
      setAlertOn(true);
    } else if (!ftd_date && !oldFtdUsers.includes(userId)) {
      setAlertConfig({
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
      <div className="flexColumnCenter pagePalpites">
        <img
          className="palpiteHeader"
          src={logoBolao}
          alt="logo-bolao-joga-junto"
        />
        <div className="palpites flexColumnCenter">
          <div className="palpitesHeader">
            <div>
              <p>
                <img src={campeonato} alt="logo-do-campeonato-brasileiro" />
                Campeonato Brasileiro - Série A - 24ª rodada{" "}
              </p>
            </div>
            <button
              className={isChangeable ? "none" : "button"}
              onClick={handleEdit}
            >
              Editar palpites
            </button>
          </div>
          <div className="flexColumnCenter placaresDiv">
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
                    description={matches[index][2]}
                    aSrcImg={matches[index][3]}
                    bSrcImg={matches[index][4]}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="flexColumnCenter divButton">
          {isChangeable && (
            <button onClick={handleSubmit} type="submit" className="button">
              Enviar
            </button>
          )}
          {!isChangeable && (
            <button className="button above" onClick={handleEdit}>
              Editar palpites
            </button>
          )}
        </div>
      </div>
      {loaderOn && <Loader />}
    </>
  );
}

export default Palpite;
