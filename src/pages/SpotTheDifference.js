import React, { useState, useEffect, useRef } from "react";
import MainContainer from "../containers/MainContainer";
import SpotTheDiff from "../assets/images/spot-the-diff.png";
import DiffCircle from "../components/DiffCircle";
import ScareBar from "../components/ScareBar";
import ScaryImage from "../assets/images/portrait-lady-2.jpg";
import ScreamAudio from "../assets/audio/terrible-scream.mp3";
import Footer from "../components/Footer";

const SpotTheDifference = ({ history }) => {
  const audioFile = new Audio(ScreamAudio);

  const [diffCircles, setDiffCircles] = useState([
    { id: 1, posX: "57%", posY: "20%", size: "10%", visible: false },
    { id: 2, posX: "68%", posY: "16.5%", size: "8%", visible: false },
    { id: 3, posX: "68%", posY: "39.5%", size: "8%", visible: false },
    { id: 4, posX: "58.5%", posY: "69%", size: "10%", visible: false },
    { id: 5, posX: "64%", posY: "78%", size: "10%", visible: false },
    { id: 6, posX: "89%", posY: "48%", size: "14%", visible: false },
    { id: 7, posX: "89%", posY: "93.5%", size: "8%", visible: false },
    { id: 8, posX: "81%", posY: "15.5%", size: "8%", visible: false }
  ]);

  const spotTheDiffImg = [SpotTheDiff];

  const [buttonShown, setButtonShown] = useState(false);

  const [spotsFound, setSpotsFound] = useState(0);

  const [scareMe, setScareMe] = useState(false);

  const spottedDiff = circleId => {
    let newCircles = diffCircles.map(circle => {
      return { ...circle };
    });

    let foundCircle = newCircles.find(({ id }) => {
      return id === circleId;
    });

    foundCircle.visible = true;
    setSpotsFound(spotsFound + 1);
    setDiffCircles(newCircles);
  };

  useEffect(() => {
    spotTheDiffImg.forEach(image => {
      new Image().src = image;
    });
  }, []);

  useEffect(() => {
    if (spotsFound === 8) {
      setTimeout(() => {
        setButtonShown(true);
      }, 1000);
    }
  }, [spotsFound]);

  return (
    <MainContainer>
      <ScareBar />
      {scareMe ? (
        <div className="flex-img-box">
          <img className="scary-lady" src={ScaryImage} alt="scary-lady" />
        </div>
      ) : buttonShown ? (
        <>
          <button
            onClick={() => {
              setScareMe(true);
              audioFile.play();
              setTimeout(() => {
                history.push("end");
              }, 2000);
            }}
            className="start-btn centered font-alt"
          >
            Continue
          </button>
          <Footer
            message={
              "Learn to build games like this and more in our 10 week Full Stack Bootcamp!"
            }
            link={
              "https://www.nextacademy.com/quantum-degrees/coding/full-time/full-stack-web-development?utm_source=halloween-game&utm_medium=cta-button-spot-the-diff&utm_campaign=halloween-matt"
            }
          />
        </>
      ) : (
        <>
          <div className="flex-img-box">
            <div className="spd-container">
              {diffCircles.map(circle => {
                return (
                  <DiffCircle
                    key={circle.id}
                    circleId={circle.id}
                    posX={circle.posX}
                    posY={circle.posY}
                    size={circle.size}
                    visible={circle.visible}
                    spottedDiff={spottedDiff}
                  />
                );
              })}
              <img
                src={spotTheDiffImg[0]}
                alt="std"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="w-50 mx-auto">
            <p className="text-orange text-center font-alt xs-sm">
              Find all 8 differences. Click on the bottom picture.
            </p>
          </div>
        </>
      )}
    </MainContainer>
  );
};

export default SpotTheDifference;
