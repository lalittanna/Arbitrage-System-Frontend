import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer transition: all .5s linear"
    >
      {theme === "dark" ? (
        <MdOutlineLightMode fontSize={32} />
      ) : (
        <MdDarkMode fontSize={32} />
      )}
    </div>
  );
};
