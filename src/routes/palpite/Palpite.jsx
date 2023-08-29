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
  const [scores, setScores] = useState();

  const { user } = useContext(UserContext);
  let userId;
  let ftd_date;
  if (user) {
    userId = user._id;
    ftd_date = user.ftd_date;
  }

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

  return (
    <div className="palpite">
      <div className="palpitesDesc">
        <h3>Bolão Joga Junto</h3>
        <p>Rodada semana do consumidor</p>
        {scores
          ? scores.map((element, index) => {
              if (index < 10) {
                return (
                  <Placar
                    key={`partida${index + 1}`}
                    aTeamName={matches[index][0]}
                    bTeamName={matches[index][1]}
                    arrayScore={element}
                    isChangeable={true}
                  />
                );
              }
            })
          : matches.map((element, index) => {
              return (
                <Placar
                  key={`placar${index + 1}`}
                  aTeamName={element[0]}
                  bTeamName={element[1]}
                  arrayScore={[0, 0]}
                  isChangeable={true}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Palpite;
