import React, { useEffect } from "react";
import MainContainer from "../containers/MainContainer";
import useStores from "../hooks/useStores";

const EndPage = () => {
  const {
    gameStore: { stopTimer, minutes, seconds }
  } = useStores();
  useEffect(() => {
    stopTimer();
  }, []);
  return (
    <MainContainer>
      <h2 className="font-main text-orange big-font text-center">
        Congratulations!
      </h2>
      <h4 className="font-alt text-orange">
        You completed the game in <strong>{minutes} minutes</strong> and{" "}
        <strong>{seconds} seconds</strong>!
      </h4>
      <p className="font-alt text-orange">
        Leave your details below to stand a chance to win 2 tickets to Hauntu.
      </p>
    </MainContainer>
  );
};

export default EndPage;
