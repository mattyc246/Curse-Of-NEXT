import React, { useState } from "react";
import MainContainer from "../containers/MainContainer";
import PumpkinBoard from "../components/PumpkinBoard";
import ScareBar from "../components/ScareBar";

const PumpkinSmash = ({ history }) => {
  const [inPlay, setInPlay] = useState(true);
  return (
    <MainContainer>
      <ScareBar />
      {inPlay ? (
        <PumpkinBoard setInPlay={setInPlay} />
      ) : (
        <button
          onClick={() => {
            history.push("/round-3");
          }}
          className="start-btn centered font-alt"
        >
          Next Round
        </button>
      )}
    </MainContainer>
  );
};

export default PumpkinSmash;
