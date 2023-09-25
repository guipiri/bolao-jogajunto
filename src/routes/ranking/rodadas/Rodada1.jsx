import React, { useEffect, useState } from "react";
import RankingTable from "../../../components/rankingTable/RankingTable";
import RankingPodium from "../../../components/rankingPodium/RankingPodium";
import rankingResults from "../../../supportFunctions/rankingResults.js";

function Rodada1() {
  const [podiumVisible, setPodiumVisible] = useState(true);
  const rodada1 = rankingResults[0];

  useEffect(() => {
    const handleResize = (e) => {
      if (e.target.innerWidth < 600) {
        setPodiumVisible(false);
      } else {
        setPodiumVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize({ target: { innerWidth: window.innerWidth } });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {podiumVisible && (
        <RankingPodium rankingInfo={rodada1} podiumVisible={podiumVisible} />
      )}
      <RankingTable tableInfo={rodada1} podiumVisible={podiumVisible} />
    </>
  );
}

export default Rodada1;
