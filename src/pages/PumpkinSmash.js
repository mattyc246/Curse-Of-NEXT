import React, { useState, useEffect } from "react";
import MainContainer from "../containers/MainContainer";
import PumpkinBoard from "../components/PumpkinBoard";
import ScareBar from "../components/ScareBar";
import useStores from "../hooks/useStores";

const PumpkinSmash = ({ history }) => {
  const [inPlay, setInPlay] = useState(true);
  const {
    gameStore: { startTimer }
  } = useStores();

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <MainContainer>
      <ScareBar />
      {inPlay ? (
        <>
          <PumpkinBoard setInPlay={setInPlay} />
          w
        </>
      ) : (
        <button
          onClick={() => {
            history.push("/round-2");
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
