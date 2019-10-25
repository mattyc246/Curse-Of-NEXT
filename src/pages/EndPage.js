import React, { useEffect } from "react";
import MainContainer from "../containers/MainContainer";
import useStores from "../hooks/useStores";

const EndPage = () => {
  const {
    gameStore: { stopTimer }
  } = useStores();
  useEffect(() => {
    stopTimer();
  }, []);
  return (
    <MainContainer>
      <h1>End Page</h1>
    </MainContainer>
  );
};

export default EndPage;
