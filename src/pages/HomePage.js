import React from "react";
import MainContainer from "../containers/MainContainer";

const HomePage = ({ history }) => {
  return (
    <MainContainer>
      <h1 className="font-main text-orange big-font">
        The curse of <br />
        NEXT Academy
      </h1>
      <h2 className="font-main text-orange">
        Round 1: Spot The Difference <br />
        Round 2: Whack A Ghoul <br />
        Round 3: Match The Cards
      </h2>
      <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
        <h3 className="font-alt text-orange">
          There are 3 rounds, complete all 3 rounds to stand a chance to win 2
          tickets to Hauntu Immersive Horror Experience.
        </h3>
      </div>
      <button
        className="start-btn font-alt"
        onClick={() => {
          history.push("/round-1");
        }}
      >
        Start Scaring
      </button>
    </MainContainer>
  );
};

export default HomePage;
