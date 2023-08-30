import React, { useEffect, useState, useContext } from "react";
import "./Palpite.css";
import Placar from "../../components/placar/Placar";
import { UserContext } from "../../context/UserContext";
import Loader from "../../components/loader/Loader";

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
      alert("Palpites fechados! O primeiro confronto já começou!");
    } else if (!userId) {
      alert("Faça login para fazer seus palpites");
    } else if (!ftd_date) {
      alert("Faça seu primeiro depósito para participar!");
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
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
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
      <Loader on={loaderOn} />
    </>
  );
}

export default Palpite;
