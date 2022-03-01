import { useState } from "react";
import io from "socket.io-client";
import { Card } from "./Card";

const socket = io("http://localhost:8000");

const Cards = () => {
  const [cards, setCards] = useState([]);

  socket.on("new-entry", (cardDetails) => {
    setCards([...cards, cardDetails]);
  });

  return (
    <div
      id="cards-container"
      className="flex w-full grid grid-cols-1 justify-center place-items-center gap-4 md:p-20"
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          pairName={card.pairName}
          blockStamp={card.blockStamp}
          priceUniswap={card.priceUniswap}
          priceSushiswap={card.priceSushiswap}
          tradeDirection={card.tradeDirection}
          priceDifference={card.priceDifference}
        />
      ))}
    </div>
  );
};

export default Cards;
