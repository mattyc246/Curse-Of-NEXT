import React, { useState } from "react";
import MainContainer from "../containers/MainContainer";
import CardBoard from "../components/CardBoard";
import ScareBar from "../components/ScareBar";
import Footer from "../components/Footer";

const CardMatch = ({ history }) => {
  const [inPlay, setInPlay] = useState(true);

  return (
    <MainContainer>
      <ScareBar />
      {inPlay ? (
        <>
          <CardBoard setInPlay={setInPlay} />
          <div className="w-50 mx-auto">
            <p className="text-orange text-center font-alt xs-sm">
              Match all 12 of the Halloween cards.
            </p>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              history.push("/round-3");
            }}
            className="start-btn centered font-alt"
          >
            Next Round
          </button>
          <Footer
            message={"Learn to build advanced UI like this with React.js!"}
            link={
              "https://www.nextacademy.com/quantum-degrees/coding/full-time/frontend-react-js?utm_source=halloween-game&utm_medium=cta-button-card-match&utm_campaign=halloween-matt"
            }
          />
        </>
      )}
    </MainContainer>
  );
};

export default CardMatch;
