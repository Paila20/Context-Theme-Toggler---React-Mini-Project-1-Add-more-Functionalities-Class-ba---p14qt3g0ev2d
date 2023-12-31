import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const { theme: globalTheme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(globalTheme);

  const toggleLocalTheme = () => {
    setLocalTheme((prevLocalTheme) =>
      prevLocalTheme === "light" ? "dark" : "light"
    );
  };

  // Update local theme when global theme changes
  useEffect(() => {
    setLocalTheme(globalTheme);
  }, [globalTheme]);

  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={`bg-${localTheme}`}
    >
      <p id="local-themed-text-container" className={`txt-${localTheme}`}>
        Hiiii
      </p>
      <button
        id="local-theme-toggler"
        className={`btn btn-${localTheme} txt-${localTheme}`}
        onClick={toggleLocalTheme}
      >
        {localTheme === "light"
          ? "Toggle local theme to dark"
          : "Toggle local theme to light"}
      </button>
    </div>
  )
}

export { LocalThemedBox };
