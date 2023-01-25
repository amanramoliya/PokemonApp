import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import PokemonContainer from "./components/PokemonContainer";
import PokemonDetails from "./components/pokemonDetails";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs";
import PokemonDetails2 from "./components/PokemonDetails2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <App></App>,
      },
      {
        path: "details",
        element: <PokemonDetails></PokemonDetails>,
        // errorElement: <ErrorPage />,
      },
      {
        path: "details/:nameOrid",
        element: <PokemonDetails2></PokemonDetails2>,
        // errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
