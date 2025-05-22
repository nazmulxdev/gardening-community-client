import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ExploreGardeners from "../Pages/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips";
import ShareGardenTips from "../Pages/ShareGardenTips";
import MyTips from "../Pages/MyTips";
import PrivateRoute from "../Private/PrivateRoute";
import LoadingSpinner from "../Utilities/LoadingSpinner";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/exploreGardeners",
        Component: ExploreGardeners,
        loader: () => fetch("http://localhost:3000/gardenersData"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/browseTips",
        Component: BrowseTips,
        loader: () => fetch("http://localhost:3000/gardenersTips/public"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/shareGardenTips",
        element: (
          <PrivateRoute>
            <ShareGardenTips></ShareGardenTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: LogIn,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default Router;
