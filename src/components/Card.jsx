export const Card = ({
  pairName,
  blockStamp,
  priceUniswap,
  priceSushiswap,
  tradeDirection,
  priceDifference,
}) => {
  return (
    <div
      className="px-3 cursor-pointer bg-[#00ffd4] hover:bg-[#3399ff] border-2 border-slate-300 hover:border-slate-400 rounded-md drop-shadow-2xl"
      style={{ width: "600px", height: "80px" }}
    >
      <div className="float-left text-black font-bold">
        <h2>Pair Name: {pairName}</h2>
        <h2>Price Uniswap: {priceUniswap}</h2>
        <h2>Trade Direction: {tradeDirection}</h2>
      </div>
      <div className="float-right text-black font-bold">
        <h2>Block Stamp: {blockStamp}</h2>
        <h2>Price Sushiswap: {priceSushiswap}</h2>
        <h2>Price Difference: {priceDifference}</h2>
      </div>
    </div>
  );
};
