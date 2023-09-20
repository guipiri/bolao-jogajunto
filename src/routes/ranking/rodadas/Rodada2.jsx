import React from "react";
import RankingTable from "../../../components/rankingTable/RankingTable";
import RankingPodium from "../../../components/rankingPodium/RankingPodium";
import rankingResults from "../../../supportFunctions/rankingResults";

function Rodada2() {
  const rodada2 = rankingResults[1];

  return (
    <>
      <RankingPodium />
      <RankingTable tableInfo={rodada2} />
    </>
  );
}

export default Rodada2;
