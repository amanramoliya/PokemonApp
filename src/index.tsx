import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
// import PokemonContainer from "./components/PokemonContainer";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import PokemonDetails from "./components/pokemonDetails";
import RouterComponent from "./components/RouterComponent";

// RequestInterceptor();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <RouterComponent>
        <HomePage></HomePage>
      </RouterComponent>
    ),
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
        element: <PokemonDetails></PokemonDetails>,
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
