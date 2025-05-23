import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContest";

function Button() {
    const {theme,setTheme} = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600`}>
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    );
    }
export default Button;
