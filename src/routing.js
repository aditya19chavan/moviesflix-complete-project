
import React from "react";


import {createBrowserRouter} from "react-router-dom";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import App from "./App";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/top",
        element: <TopRated />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movie",
        element: <MovieDetails/>
      },
    ],
  },
]);

export default router;