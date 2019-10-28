import React, { useEffect, useState } from "react";
import MainContainer from "../containers/MainContainer";
import useStores from "../hooks/useStores";

const EndPage = () => {
  const {
    gameStore: { stopTimer, minutes, seconds }
  } = useStores();

  const [gFormUrl, setFormUrl] = useState(
    "https://docs.google.com/forms/d/e/1FAIpQLSd6JYOdjsO-ejXcp0-zilcL649aPj8jepFqrgqlcwU4n2P67Q/viewform?usp=pp_url&entry.1158048600="
  );

  useEffect(() => {
    stopTimer();
    let newFormUrl = `${gFormUrl}${minutes}mins+${seconds}secs`;
    setFormUrl(newFormUrl);
  }, []);

  const submitDetails = () => {
    window.open(gFormUrl);
  };

  return (
    <MainContainer>
      <h2 className="font-main text-orange big-font text-center">
        Congratulations!
      </h2>
      <div className="w-50 mx-auto">
        <h4 className="font-alt text-orange text-center">
          You completed the game in:
        </h4>
        <h2 className="font-alt text-orange text-center">
          {minutes} minutes and {seconds} seconds!
        </h2>
        <p className="font-alt text-orange text-center">
          Leave your details below to stand a chance to win 2 tickets to Hauntu.
        </p>
      </div>
      <button
        onClick={() => submitDetails()}
        className="btn-orange text-orange font-alt mx-auto d-block"
      >
        Open Form
      </button>
    </MainContainer>
  );
};

export default EndPage;
