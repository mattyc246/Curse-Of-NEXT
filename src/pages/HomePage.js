import React, { useState } from "react";
import MainContainer from "../containers/MainContainer";
import useStores from "../hooks/useStores";
import InstructionModal from "../components/InstructionModal";

const HomePage = ({ history }) => {
  const {
    gameStore: { startPlaying }
  } = useStores();
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return (
    <>
      <MainContainer>
        <h1 className="font-main text-orange big-font text-center xs-md">
          The curse of <br />
          NEXT Academy
        </h1>
        <div className="w-50 mx-auto">
          <p className="text-orange text-center font-alt xs-sm">
            Complete all 3 rounds of the Curse of NEXT Academy game and stand
            the chance to win 2 tickets to Hauntu Immersive Horror Experience.{" "}
          </p>
        </div>
        <button
          className="font-alt text-center btn-orange text-orange mx-auto d-block"
          onClick={toggle}
        >
          Read how to play!
        </button>
        <button
          className="start-btn font-alt"
          onClick={() => {
            startPlaying();
            history.push("/round-1");
          }}
        >
          Start Scaring
        </button>
      </MainContainer>
      <InstructionModal visible={isVisible} toggle={toggle} />
    </>
  );
};

export default HomePage;
