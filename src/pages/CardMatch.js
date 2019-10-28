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
        <>
          <CardBoard setInPlay={setInPlay} />
          <div className="w-50 mx-auto">
            <p className="text-orange text-center font-alt">
              Match all 12 of the Halloween cards.
            </p>
          </div>
        </>
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

export default CardMatch;
