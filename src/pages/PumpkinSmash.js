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
          <div className="w-50 mx-auto">
            <p className="text-orange text-center font-alt">
              Smash all the pumpkins as fast as possible.
            </p>
          </div>
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
