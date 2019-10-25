import React from "react";
import pumpkinOne from "../assets/images/pumpkin 1.png";
import pumpkinTwo from "../assets/images/pumkin 2.png";
import pumpkinThree from "../assets/images/pumkin 3.png";
import orangeSplat from "../assets/images/orange-splat.png";

const PumpkinPatch = ({ pumpkinId, clickCount, smashPumpkin }) => {
  const imageToShow = [orangeSplat, pumpkinThree, pumpkinTwo, pumpkinOne];
  return (
    <>
      <div className="pumpkin-square">
        <img
          className="centered"
          src={imageToShow[clickCount]}
          style={{ height: "90%" }}
          alt="pumpkin"
          onClick={() => {
            smashPumpkin(pumpkinId);
          }}
        />
      </div>
    </>
  );
};

export default PumpkinPatch;
