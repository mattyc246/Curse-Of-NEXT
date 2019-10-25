import React, { useState, useEffect } from "react";
import PumpkinPatch from "../components/PumpkinPatch";

const PumpkinBoard = ({ setInPlay }) => {
  const [pumpkinPatch, setPumpkinPatch] = useState([
    { id: 1, clickCount: 3 },
    { id: 2, clickCount: 3 },
    { id: 3, clickCount: 3 },
    { id: 4, clickCount: 3 },
    { id: 5, clickCount: 3 },
    { id: 6, clickCount: 3 },
    { id: 7, clickCount: 3 },
    { id: 8, clickCount: 3 },
    { id: 9, clickCount: 3 }
  ]);

  const smashPumpkin = pumpkinId => {
    const newPumpkins = pumpkinPatch.map(pumpkin => {
      return { ...pumpkin };
    });

    let currentPumpkin = newPumpkins.find(({ id }) => {
      return id === pumpkinId;
    });

    if (currentPumpkin.clickCount > 0) {
      currentPumpkin.clickCount = currentPumpkin.clickCount - 1;
    }

    setPumpkinPatch(newPumpkins);
  };

  useEffect(() => {
    let gameComplete = true;

    pumpkinPatch.forEach(pumpkin => {
      if (pumpkin.clickCount > 0) {
        gameComplete = false;
      }
    });

    if (gameComplete) {
      setInPlay(false);
    }
  }, [pumpkinPatch]);

  return (
    <>
      <div className="pumpkin-board">
        <div className="pumpkin-board-content">
          {pumpkinPatch.map(pumpkin => {
            return (
              <PumpkinPatch
                key={pumpkin.id}
                pumpkinId={pumpkin.id}
                clickCount={pumpkin.clickCount}
                smashPumpkin={smashPumpkin}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PumpkinBoard;
