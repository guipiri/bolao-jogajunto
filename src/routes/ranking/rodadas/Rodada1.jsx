import React from "react";
import RankingTable from "../../../components/rankingTable/RankingTable";
import RankingPodium from "../../../components/rankingPodium/RankingPodium";
import rankingResults from "../../../supportFunctions/rankingResults.js";

function Rodada1() {
  const rodada1 = rankingResults[0];

  return (
    <>
      <RankingPodium rankingInfo={rodada1} />
      <RankingTable tableInfo={rodada1} />
    </>
  );
}

export default Rodada1;
