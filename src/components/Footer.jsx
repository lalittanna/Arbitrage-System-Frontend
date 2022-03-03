import { BsGithub } from "react-icons/bs";
import { useDarkMode } from "../styles/useDarkMode";

const Footer = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? "#fefefe" : "#000000";
  return (
    <div
      className={`w-full flex md:justify-center justify-between items-center flex-col p-4 bg-[${themeMode}] absolute bottom-0 left-0 right-0`}
    >
      <BsGithub
        fontSize={28}
        className={`text-[${themeMode}] cursor-pointer`}
        onClick={() =>
          window.open(
            "https://github.com/lalittanna/Arbitrage-System-Frontend",
            "_blank"
          )
        }
      />
      <div className="sm:w-[50%] w-full h-[0.25px] bg-gray-400 mt-7" />
      <div>
        <p className={`text-[${themeMode}] text-center font-normal text-base`}>
          &copy;{new Date().getFullYear()} Aata the Dough dam raeet INC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
