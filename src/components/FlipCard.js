import React from "react";

const FlipCard = ({ flipped, value, matched, cardId, flipCard, clickable }) => {
  return (
    <>
      <div
        className={`flip-card ${flipped ? "flipped" : ""}`}
        onClick={matched || !clickable ? null : () => flipCard(cardId)}
      >
        <h2 className="flip-text">{flipped ? value : ""}</h2>
      </div>
    </>
  );
};

export default FlipCard;
