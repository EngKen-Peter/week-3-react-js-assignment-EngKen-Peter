import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-white text-blue-600 px-2 py-1 rounded text-sm"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
