import React, { useEffect, useState } from "react";
import MainContainer from "../containers/MainContainer";
import useStores from "../hooks/useStores";
import Footer from "../components/Footer";

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
      <h2 className="font-main text-orange big-font text-center xs-md">
        Congratulations!
      </h2>
      <div className="w-50 mx-auto">
        <h4 className="font-alt text-orange text-center xs-sm">
          You completed the game in:
        </h4>
        <h4 className="font-alt text-orange text-center">
          {minutes} minute{minutes > 1 ? "s" : ""}
          <br />
          {seconds} second{seconds > 1 ? "s" : ""}!
        </h4>
        <p className="font-alt text-orange text-center xs-sm">
          Follow the link below and fill out your details to stand a chance to
          win 2 tickets to Hauntu Immersive Horror Experience.
        </p>
      </div>
      <button
        onClick={() => submitDetails()}
        className="btn-orange text-orange font-alt mx-auto d-block"
      >
        Open Google Form
      </button>
      <button
        onClick={() => window.location.reload()}
        className="btn-orange text-orange font-alt mx-auto d-block"
        style={{ marginTop: "10px" }}
      >
        Play Again?
      </button>
      <Footer
        message={
          "Start your coding journey with us now! What are you waiting for?"
        }
        link={"https://www.nextacademy.com"}
      />
    </MainContainer>
  );
};

export default EndPage;
