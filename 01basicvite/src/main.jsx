import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import First from "./first.jsx";

const reactElement = React.createElement(
  "img",
  {
    src: "/src/assets/dd.jpg",
    alt: "Placeholder Image",
    height: 300,
    width: 400,
  },
  null
);
createRoot(document.getElementById("root")).render(
  <>
    {reactElement}
    <App />
    <First />
  </>
);
