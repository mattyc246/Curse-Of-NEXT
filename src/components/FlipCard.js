import React, { useEffect } from "react";
import bat from "../assets/images/bat.png";
import bible from "../assets/images/bible.png";
import book3 from "../assets/images/book 3.png";
import book from "../assets/images/book.png";
import candle from "../assets/images/candle.png";
import hat from "../assets/images/hat.png";
import man from "../assets/images/man.png";
import pumpkin2 from "../assets/images/pumkin 2.png";
import pumpkin3 from "../assets/images/pumkin 3.png";
import pumpkin1 from "../assets/images/pumpkin 1.png";
import grave from "../assets/images/rip.png";
import skull from "../assets/images/skull.png";

const FlipCard = ({ flipped, value, matched, cardId, flipCard, clickable }) => {
  const cardImg = [
    bat,
    bible,
    book3,
    book,
    pumpkin1,
    candle,
    hat,
    pumpkin2,
    grave,
    pumpkin3,
    man,
    skull
  ];

  useEffect(() => {
    cardImg.forEach(image => {
      new Image().src = image;
    });
  }, []);

  return (
    <>
      <div
        className={`flip-card ${flipped ? "flipped" : ""}`}
        onClick={
          matched || !clickable || flipped ? null : () => flipCard(cardId)
        }
      >
        {flipped ? (
          <img
            style={{ height: "100%" }}
            src={cardImg[value - 1]}
            alt={value}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FlipCard;
