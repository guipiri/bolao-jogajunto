import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Regras from "./routes/regras/Regras.jsx";
import Palpite from "./routes/palpite/Palpite.jsx";
import Login from "./routes/login/Login.jsx";
import Ranking from "./routes/ranking/Ranking.jsx";
import Rodada1 from "./routes/ranking/rodadas/Rodada1.jsx";
import Rodada2 from "./routes/ranking/rodadas/Rodada2.jsx";
import Rodada3 from "./routes/ranking/rodadas/Rodada3.jsx";

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
            path: "/ranking/1",
            element: <Rodada1 />,
          },
          {
            path: "/ranking/2",
            element: <Rodada2 />,
          },
          {
            path: "/ranking/3",
            element: <Rodada3 />,
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
