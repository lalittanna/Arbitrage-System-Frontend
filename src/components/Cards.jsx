import { Card } from "./Card";

const state = {
  cards: [],
};

const addCard = (cardDetails) => {
  state.cards.push(cardDetails);
};

const Cards = () => {
  return (
    <div className="flex w-full grid grid-cols-1 justify-center place-items-center gap-4 md:p-20">
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

export default Cards;
