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
      },
      {
        path: "/browseTips",
        Component: BrowseTips,
      },
      {
        path: "/shareGardenTips",
        Component: ShareGardenTips,
      },
      {
        path: "/myTips",
        Component: MyTips,
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
