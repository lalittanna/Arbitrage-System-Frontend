import { useDarkMode } from "../styles/useDarkMode";
import { Toggle } from "./Toggle";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

import logo1 from "../images/logo.png";
import logo2 from "../images/logo1.png";

const Navbar = () => {
  const navigateTo = useNavigate();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const logo = theme === "light" ? logo1 : logo2;
  return (
    <ThemeProvider theme={themeMode}>
      <nav class="flex w-full justify-between items-center p-4 px-20">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-15 cursor-pointer drop-shadow-2xl"
          onClick={() => {
            navigateTo("/");
          }}
        />
        <div className="flex justify-self-end items-center gap-4">
          <a
            href="/"
            class="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Home
          </a>
          <a
            href="/simple"
            class="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Simple
          </a>
          <a
            href="/projects"
            class="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Cyclic
          </a>
          <a
            href="/reports"
            class="font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          >
            Test
          </a>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
      {/* <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.8] flex-initial justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-15 cursor-pointer drop-shadow-2xl"
            onClick={() => {
              navigateTo("/");
            }}
          />
        </div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </nav> */}
    </ThemeProvider>
  );
};

export default Navbar;
