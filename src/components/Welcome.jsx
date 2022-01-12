const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-auto items-center flex-col">
          <h1 className="text-4xl sm:text-6xl py-1 text-center font-bold">
            DeFi Arbitrage System
          </h1>
          <p className="text-center mt-5 font-normal md:w-10/12 w-11/12 text-base">
            Arbitrage cryptocurriences on the leading decentralized trading
            protocols.
          </p>
          <button className="flex flex-row justify-center items-center text-center text-black font-bold bg-[#00ffd4] py-2 px-7 mx-4 my-12 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
