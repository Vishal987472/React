import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Background from "./components/Background.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <h1 className="bg-blue-500 p-5 text-white text-2xl">hello vishal</h1>
    <App />
    <div>
      <Background />
    </div>
  </>
);
