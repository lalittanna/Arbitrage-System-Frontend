import { useDarkMode } from "../styles/useDarkMode";
import { Toggle } from "./Toggle";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import logo from "../images/logo.png";

const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.8] flex-initial justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-32 cursor-pointer drop-shadow-2xl"
          />
        </div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
