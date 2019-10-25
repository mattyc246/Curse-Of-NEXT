import React from "react";
import MainContainer from "../containers/MainContainer";
import CardBoard from "../components/CardBoard";
import ScareBar from "../components/ScareBar";

const CardMatch = () => {
  return (
    <MainContainer>
      <ScareBar />
      <CardBoard />
    </MainContainer>
  );
};

export default CardMatch;
