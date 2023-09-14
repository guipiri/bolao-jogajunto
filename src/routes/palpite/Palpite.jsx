import React, { useEffect, useState, useContext } from "react";
import "./Palpite.css";
import Placar from "../../components/placar/Placar";
import { UserContext } from "../../context/UserContext";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import AME from "../../assets/AME.svg";
import BAH from "../../assets/BAH.svg";
import BOT from "../../assets/BOT.svg";
import CAM from "../../assets/CAM.svg";
import CAP from "../../assets/CAP.svg";
import CFC from "../../assets/CFC.svg";
import COR from "../../assets/COR.svg";
import CRU from "../../assets/CRU.svg";
import CUI from "../../assets/CUI.svg";
import FLA from "../../assets/FLA.svg";
import FLU from "../../assets/FLU.svg";
import FOR from "../../assets/FOR.svg";
import GOI from "../../assets/GOI.svg";
import GRE from "../../assets/GRE.svg";
import INT from "../../assets/INT.svg";
import PAL from "../../assets/PAL.svg";
import RBB from "../../assets/RBB.svg";
import SAN from "../../assets/SAN.svg";
import SAO from "../../assets/SAO.svg";
import VAS from "../../assets/VAS.svg";
import logoBolao from "../../assets/bolao-palpite-header.png";
import campeonato from "../../assets/campeonato.png";
import oldFtdUsers from "../../supportFunctions/oldFtdUsers";

function Palpite() {
  const matches = [
    [
      "BAH",
      "SAN",
      "SEG 18/09/2023 - ITAIPAVA ARENA FORTE FONTE NOVA - 20:00",
      BAH,
      SAN,
    ],
    ["AME", "RBB", "TER 19/09/2023 - INDEPENDÊNCIA - 21:30", AME, RBB],
    [
      "GOI",
      "FLA",
      "QUA 20/09/2023 - HAILÉ PINHEIRO (SERRINHA) - 19:00",
      GOI,
      FLA,
    ],
    ["FLU", "CRU", "QUA 20/09/2023 - MARACANÃ - 21:30", FLU, CRU],
    ["SAO", "FOR", "QUA 20/09/2023 - MORUMBI - 21:30", SAO, FOR],
    ["VAS", "CFC", "QUI 21/09/2023 - SÃO JANUARIO - 19:00", VAS, CFC],
    ["CAP", "INT", "QUI 21/09/2023 - LIGGA ARENA - 19:30", CAP, INT],
    ["GRE", "PAL", "QUI 21/09/2023 - ARENA DO GRÊMIO - 21:30", GRE, PAL],
    ["COR", "BOT", "SEX 22/09/2023 - NEO QUÍMICA ARENA - 20:00", COR, BOT],
    ["CAM", "CUI", "SÁB 23/09/2023 - ARENA RMV - 21:00", CAM, CUI],
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
    } else if (!ftd_date && !oldFtdUsers.includes(userId)) {
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
