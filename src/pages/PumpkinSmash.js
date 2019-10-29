import React, { useState, useEffect } from "react";
import MainContainer from "../containers/MainContainer";
import PumpkinBoard from "../components/PumpkinBoard";
import ScareBar from "../components/ScareBar";
import useStores from "../hooks/useStores";
import Footer from "../components/Footer";

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
            <p className="text-orange text-center font-alt xs-sm">
              Smash all the pumpkins as fast as you can!
            </p>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              history.push("/round-2");
            }}
            className="start-btn centered font-alt"
          >
            Next Round
          </button>
          <Footer
            message={
              "Learn to build games like this with HTML, CSS & JavaScript!"
            }
            link={
              "https://www.nextacademy.com/quantum-degrees/coding/full-time/frontend-website-html-css-javascript?utm_source=halloween-game&utm_medium=cta-button-pumpkin-smash&utm_campaign=halloween-matt"
            }
          />
        </>
      )}
    </MainContainer>
  );
};

export default PumpkinSmash;
