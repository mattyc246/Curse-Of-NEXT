import React, { useState, useEffect } from "react";
import MainContainer from "../containers/MainContainer";
import SpotTheDiff from "../assets/images/spot-the-diff.png";
import DiffCircle from "../components/DiffCircle";

const SpotTheDifference = ({ history }) => {
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

  const [buttonShown, setButtonShown] = useState(false);

  const [spotsFound, setSpotsFound] = useState(0);

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
    if (spotsFound === 8) {
      setTimeout(() => {
        setButtonShown(true);
      }, 1000);
    }
  }, [spotsFound]);

  return (
    <MainContainer>
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
          <img src={SpotTheDiff} alt="std" style={{ width: "100%" }} />
        </div>
      </div>
      {buttonShown ? (
        <button
          onClick={() => {
            history.push("/round-2");
          }}
          className="start-btn font-alt"
        >
          Next Round
        </button>
      ) : (
        ""
      )}
    </MainContainer>
  );
};

export default SpotTheDifference;
