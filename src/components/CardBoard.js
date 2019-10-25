import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import FlipCard from "./FlipCard";

const CardBoard = ({ history }) => {
  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [clickable, setClickable] = useState(true);

  const [lastFlip, setLastFlip] = useState(null);

  const [currentCard, setCurrentCard] = useState(null);

  const [flipCards, setFlipCards] = useState(
    shuffle([
      { id: 1, value: "1", flipped: false, matched: false },
      { id: 2, value: "1", flipped: false, matched: false },
      { id: 3, value: "2", flipped: false, matched: false },
      { id: 4, value: "2", flipped: false, matched: false },
      { id: 5, value: "3", flipped: false, matched: false },
      { id: 6, value: "3", flipped: false, matched: false },
      { id: 7, value: "4", flipped: false, matched: false },
      { id: 8, value: "4", flipped: false, matched: false },
      { id: 9, value: "5", flipped: false, matched: false },
      { id: 10, value: "5", flipped: false, matched: false },
      { id: 11, value: "6", flipped: false, matched: false },
      { id: 12, value: "6", flipped: false, matched: false },
      { id: 13, value: "7", flipped: false, matched: false },
      { id: 14, value: "7", flipped: false, matched: false },
      { id: 15, value: "8", flipped: false, matched: false },
      { id: 16, value: "8", flipped: false, matched: false },
      { id: 17, value: "9", flipped: false, matched: false },
      { id: 18, value: "9", flipped: false, matched: false },
      { id: 19, value: "10", flipped: false, matched: false },
      { id: 20, value: "10", flipped: false, matched: false },
      { id: 21, value: "11", flipped: false, matched: false },
      { id: 22, value: "11", flipped: false, matched: false },
      { id: 23, value: "12", flipped: false, matched: false },
      { id: 24, value: "12", flipped: false, matched: false }
    ])
  );

  const checkForWin = (currentCards, callback) => {
    let winner = true;
    currentCards.forEach(card => {
      if (!card.matched) {
        winner = false;
      }
    });

    if (winner) {
      setTimeout(() => {
        history.push("/round-3");
      }, 800);
    } else {
      callback();
    }
  };

  useEffect(() => {
    if (currentCard && lastFlip) {
      let newCards = flipCards.map(card => {
        return { ...card };
      });
      if (currentCard.value === lastFlip.value) {
        newCards.forEach(card => {
          if (card.id === currentCard.id || card.id === lastFlip.id) {
            card.matched = true;
          }
        });
      } else {
        newCards.forEach(card => {
          if (
            card.id === currentCard.id ||
            (card.id === lastFlip.id && !card.matched)
          ) {
            card.flipped = false;
          }
        });
      }

      const setCards = () => {
        setTimeout(() => {
          setClickable(true);
          setFlipCards(newCards);
          setLastFlip(null);
          setCurrentCard(null);
        }, 800);
      };

      checkForWin(newCards, setCards);
    } else {
      setClickable(true);
    }
  }, [currentCard, lastFlip]);

  const flipCard = cardId => {
    setClickable(false);
    let newCards = flipCards.map(card => {
      return { ...card };
    });

    let card = newCards.find(({ id }) => {
      return id === cardId;
    });

    card.flipped = true;

    if (!currentCard) {
      setCurrentCard(card);
    } else {
      setLastFlip(currentCard);
      setCurrentCard(card);
    }

    setFlipCards(newCards);
  };

  return (
    <div className="card-board">
      {flipCards.map(card => {
        return (
          <FlipCard
            key={card.id}
            cardId={card.id}
            value={card.value}
            flipped={card.flipped}
            matched={card.matched}
            flipCard={flipCard}
            clickable={clickable}
          />
        );
      })}
    </div>
  );
};

export default withRouter(CardBoard);
