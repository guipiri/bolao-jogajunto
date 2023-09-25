import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Regras from "./routes/regras/Regras.jsx";
import Palpite from "./routes/palpite/Palpite.jsx";
import Login from "./routes/login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Regras />,
      },
      {
        path: "/palpite",
        element: <Palpite />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
        children: [
          {
            path: "/ranking",
            element: <Rodada1 />,
          },
          {
            path: "/ranking/2",
            element: <Rodada2 />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
