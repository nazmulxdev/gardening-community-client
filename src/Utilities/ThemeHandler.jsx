import React, { useEffect, useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";

const ThemeHandler = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <label className="toggle text-base-content">
        <input
          onChange={() => {
            setDarkMode(!darkMode);
          }}
          checked={darkMode}
          type="checkbox"
          name="theme-toggle"
          value={darkMode ? "Dark" : "Light"}
        />
        <FaRegSun className="text-yellow-400">
          <span className="text-sm font-medium">Dark</span>
        </FaRegSun>

        <FaMoon style={{ color: "green" }} className="text-blue-500">
          <span className="text-sm font-medium">Light</span>
        </FaMoon>
      </label>
    </div>
  );
};

export default ThemeHandler;
