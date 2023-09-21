import React from "react";
import RankingTable from "../../../components/rankingTable/RankingTable";
import rankingResults from "../../../supportFunctions/rankingResults.js";

function Rodada1() {
  const { rodada1 } = rankingResults;

  return <RankingTable tableInfo={rodada1} />;
}

export default Rodada1;
