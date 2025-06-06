import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Navigate, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";
import Login from "./components/Login/Login.jsx";
import { githubInfoLoader } from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
