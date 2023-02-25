import React, { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

var LIGHT_SYMBOL = "light";
var DARK_SYMBOL = "dark";
var STORE_THEME = "Theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");

  function handleToggleTheme() {
    const getTheme = localStorage.getItem(STORE_THEME);

    if (getTheme === LIGHT_SYMBOL) {
      document.body.className = DARK_SYMBOL;
      setTheme(DARK_SYMBOL);
      localStorage.setItem(STORE_THEME, DARK_SYMBOL);
    } else if (getTheme === DARK_SYMBOL) {
      document.body.className = LIGHT_SYMBOL;
      setTheme(LIGHT_SYMBOL);
      localStorage.setItem(STORE_THEME, LIGHT_SYMBOL);
    }
  }

  useEffect(() => {
    const InitialTheme = localStorage.getItem(STORE_THEME);

    if (!InitialTheme) {
      setTheme(LIGHT_SYMBOL);
      localStorage.setItem(STORE_THEME, LIGHT_SYMBOL);
    } else {
      setTheme(InitialTheme);
      document.body.className = InitialTheme;
    }

    return () => {
      setTheme("");
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
