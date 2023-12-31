import React, { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
const initialValue={
  theme,
  toggleTheme,
}

  return (
    <React.Fragment>
    <ThemeContext.Provider value={initialValue}>
    {props.children}
    </ThemeContext.Provider>;
    </React.Fragment>
  )
};


export { ThemeProvider, ThemeContext };
