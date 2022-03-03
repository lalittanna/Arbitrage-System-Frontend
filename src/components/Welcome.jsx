import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigateTo = useNavigate();
  return (
    <div className="w-full justify-center items-center">
      <div
        style={{
          backgroundImage: `url(
  "https://uniswap.org/images/glimmer_bg.svg"
)`,
          minWidth: "100%",
          minHeight: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex flex-auto items-center flex-col">
            <h1 className="text-6xl py-1 text-center font-medium">
              WELCOME TO <span className="font-bold">BREW</span>
            </h1>
            <p className="text-1xl font-medium text-center mt-5 font-normal md:w-10/12 w-11/12 text-base">
              A facility for arbitraging cryptocurrencies on the leading <br />
              decentralized trading protocols
            </p>
          </div>
        </div>

        <div className="justify-center items-center w-full p-8 px-28 grid grid-cols-3 text-1xl text-center">
          <p>
            <span className="text-4xl font-bold">
              100+ <br />
            </span>
            Pairs
          </p>
          <p>
            <span className="text-4xl font-bold">
              2 <br />
            </span>
            Leading DEXs
          </p>
          <p>
            <span className="text-4xl font-bold">
              2 <br />
            </span>
            Types of Arbitrages
          </p>
        </div>

        <div className="grid grid-cols-2 p-28 px-0">
          <div className="justify-left items-left w-full p-8 px-28 text-left">
            <h2 className="text-1xl font-semibold p-2">BREW ECOSYSTEM →</h2>
            <h1 className="text-2xl font-bold p-2">
              A growing platform for <br /> arbitrage trading.
            </h1>
            <p className="font-medium p-2">
              Leverage latest technologies to trade simple and cyclic arbitrage
              on cryptocurrencies.
            </p>
          </div>

          <div
            style={{
              marginRight: "12px",
              width: "590px",
              minHeight: "100%",
              background: `url(
          "https://uniswap.org/images/apps.png"
        ) 0% 0% / cover no-repeat`,
              backgroundSize: "cover",
              backdropFilter: "blur(4px)",
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(0, 0, 0, 0.80)",
              padding: "2rem",
              borderRadius: "24px",
              boxShadow:
                "rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px, rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px",
            }}
            className="cursor-pointer"
          ></div>
        </div>
      </div>
      <div className="p-8 px-28 text-2xl font-medium">
        <h1 className="pb-10 text-3xl text-left font-bold">
          What is Arbitrage?
        </h1>
        <p>
          Let’s say you are a salesperson who wants to sell ice-creams, but you
          are not aware of the price range for your area, so you go to a market
          near your house and find the price of 1 ice-cream to be $1. Now you go
          to another market, a little far from your house and see that the price
          of 1 ice-cream is $5.
        </p>
        <p>
          This price difference in two different markets is called market
          inefficiency. How do you make a profit from it? You buy ice-creams
          from the market where it is being sold at $1 and sell it for $5 in the
          market where it's worth $5. Thus, you make a profit of $4/per
          ice-cream. This is what we call as arbitrage. It is the profit that we
          get from the price differences of identical financial instruments on
          different markets or different forms. Arbitrage takes place when
          security is bought in one market and is sold in another market at a
          higher price which is basically risk-free trading.
        </p>
      </div>

      <div className="p-8 px-28 text-2xl font-medium">
        <h1 className="pb-10 text-3xl text-left font-bold">
          What this system does?
        </h1>
        <p>
          The system arbitrages cryptocurrencies on the two leading
          decentralized exchanges build on the Ethereum blockchain, Uniswap and
          Sushiswap.
        </p>
      </div>

      <div className="p-8 px-28 text-2xl font-medium">
        <h1 className="pb-10 text-3xl text-left font-bold">
          What’s cool about this system?
        </h1>
        <p>
          It leverages latest technologies such as smart contracts and flash
          loans to overcome the risks with performing arbitrage (
          <a
            href="https://en.wikipedia.org/wiki/Arbitrage"
            className="hover:underline"
          >
            learn more
          </a>
          ).
        </p>
      </div>
    </div>
  );
};

export default Welcome;

// background-color: rgba(255, 255, 255, 0.02);
// border: 1px solid rgba(255, 255, 255, 0.19);
// padding: 2rem;
// border-radius: 24px;
// box-shadow: rgb(0 0 0 / 2%) 0px 0px 1px, rgb(0 0 0 / 2%) 0px 4px 8px, rgb(0 0 0 / 2%) 0px 16px 24px, rgb(0 0 0 / 2%) 0px 24px 32px;

<h1 style="margin:0" class="pages__StyledSectionHeader-sc-nm57rh-17 bUmKHI">
  UNISWAP ECOSYSTEM →
</h1>;

//<div class="pages__StyledCard-sc-nm57rh-14 pages__AppsCard-sc-nm57rh-21 LnEax gzRqTS"></div>

{
  /* <button
            className="flex flex-row justify-center items-center text-center text-white font-bold bg-[#2ac13a] py-2 px-7 mx-4 my-12 rounded-full cursor-pointer hover:bg-[#3399ff] drop-shadow-2xl"
            onClick={() => {
              navigateTo("/app");
            }}
          >
            Launch App
          </button> */
}
