import React from "react";
import RedCircle from "../assets/images/red-circle.png";

const DiffCircle = ({ circleId, posX, posY, visible, size, spottedDiff }) => {
  return (
    <img
      className="diff-circle"
      src={RedCircle}
      alt="diff-circle"
      style={{
        top: posX,
        left: posY,
        opacity: visible ? "1" : "0",
        width: size
      }}
      onClick={() => {
        spottedDiff(circleId);
      }}
    />
  );
};

export default DiffCircle;
