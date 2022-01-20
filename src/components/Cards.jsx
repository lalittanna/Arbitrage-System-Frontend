import { Card } from "./Card";

const state = {
  cards: [],
};

const addCard = (cardDetails) => {
  state.cards.push(cardDetails);
};

export const Cards = () => {
  return (
    <div className="space-y-4">
      {state.cards.map((card) => (
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

addCard({
  id: 4,
  pairName: "DAI/ETH",
  blockStamp: "111",
  priceUniswap: "3000",
  priceSushiswap: "3030",
  tradeDirection: "UNI-SUSHI",
  priceDifference: "0.6%",
});
