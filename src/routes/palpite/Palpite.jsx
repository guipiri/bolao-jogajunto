import React, { useEffect, useState, useContext } from "react";
import "./Palpite.css";
import Placar from "../../components/placar/Placar";
import { UserContext } from "../../context/UserContext";

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

  const [isChangeable, setIsChangeable] = useState(false);
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
    console.log(nowUnix, firstMatch);
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
      fetch(
        `https://script.google.com/macros/s/AKfycbx0OWPEcmTJYq6I5DWIYOE2XezV4emJV6-rQ6x_p9BUExDCLcHl6BMNfyjh3oFoYL4/exec?id=${userId}`,
        {
          method: "GET",
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
        });
    }
  }, []);

  const handleSubmit = () => {
    const body = [...scores];
    body.pop();
    body.pop();
    console.log(JSON.stringify(body));
    // fetch(
    //   `https://script.google.com/macros/s/AKfycbwojqzBmKfbcsMnw-gJ5H6t3EsJwfj1X-Pp3ok_gEEyY8Qisg109jy6H11wJwl84aw/exec?id=${userId}`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify(scores),
    //     headers: {
    //       "Content-Type": "text/plain;charset=utf-8",
    //     },
    //     // mode: "no-cors",
    //     redirect: "follow",
    //   }
    // )
    //   .then((res) => console.log(res))
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  };
  return (
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
        {scores.map((element, index) => {
          if (index < 10) {
            return (
              <Placar
                key={`partida${index + 1}`}
                aTeamName={matches[index][0]}
                bTeamName={matches[index][1]}
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
          Enviar palpites
        </button>
      </div>
    </div>
  );
}

export default Palpite;
