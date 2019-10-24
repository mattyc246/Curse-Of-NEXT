import React from "react";
import MainContainer from "../containers/MainContainer";

const PumpkinSmash = ({ history }) => {
  return (
    <MainContainer>
      <h1>PumpkinSmash</h1>
      <button
        className="start-btn font-alt"
        onClick={() => {
          history.push("/round-3");
        }}
      >
        Start Scaring
      </button>
    </MainContainer>
  );
};

export default PumpkinSmash;
