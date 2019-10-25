import React, { useState } from "react";
import MainContainer from "../containers/MainContainer";
import CardBoard from "../components/CardBoard";
import ScareBar from "../components/ScareBar";

const CardMatch = ({ history }) => {
  const [inPlay, setInPlay] = useState(true);

  return (
    <MainContainer>
      <ScareBar />
      {inPlay ? (
        <CardBoard setInPlay={setInPlay} />
      ) : (
        <button onClick={() => {}} className="start-btn centered font-alt">
          Next Round
        </button>
      )}
    </MainContainer>
  );
};

export default CardMatch;
