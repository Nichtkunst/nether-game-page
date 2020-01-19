import React from "react";
import PlayerCard from "./PlayerCard";

/*
import AirBnbCard from "./AirBnbCard";

interface BestPlayer {
  Name: string;
  1: { Name: string; Arena: string; Rank: string };
}

const s = (a: any) => JSON.stringify(a);
*/

interface RankingList {
  path: string;
  ids: string[];
  value: any;
}

const PlayerCardList = (props: { data: RankingList }) => {
  const { data, ...restProps } = props;
  // const { value, path, ids } = data;
  const rankingList = Object.entries(data.value[0]);
  console.log("rankingList", rankingList);
  return rankingList.map((player: any) => (
    <PlayerCard player={player} {...restProps} />
  ));
};

export default PlayerCardList;
