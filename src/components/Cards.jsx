import { Card } from "./Card";
import io from "socket.io-client";
import { useState } from "react";

const socket = io("http://localhost:8000");

const Cards = () => {
  const [cards, setCards] = useState([]);

  socket.on("new-entry", (entry) => {
    addCard(entry);
  });

  const addCard = (cardDetails) => {
    setCards([...cards, cardDetails]);
    console.log(cards);
  };

  return (
    <div
      id="cards-container"
      className="flex w-full grid grid-cols-1 justify-center place-items-center gap-4 md:p-20"
    >
      {cards.map((cs) => (
        <Card
          key={cs.id}
          pairName={cs.pairName}
          blockStamp={cs.blockStamp}
          priceUniswap={cs.priceUniswap}
          priceSushiswap={cs.priceSushiswap}
          tradeDirection={cs.tradeDirection}
          priceDifference={cs.priceDifference}
        />
      ))}
    </div>
  );
};

export default Cards;
