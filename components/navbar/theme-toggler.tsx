"use client";

import { useTheme } from "next-themes";
import Moon from "../icons/moon";
import Sun from "../icons/sun";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button className="ml-3" onClick={toggleTheme}>
      <Sun />
      <Moon />
    </button>
  );
};

export default ThemeToggler;
