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
import TipDetails from "../Pages/TipDetails";
import UpdateTip from "../Pages/UpdateTip";
import ErrorPage from "../ErrorPage";
import DashBoardLayOut from "../DashBoard/DashBoardLayout";
import DashBoardHome from "../DashBoard/DashBoardHome";
import AllGardeningTips from "../DashBoard/AllGardeningTips";
import ShareGardeningTipsDash from "../DashBoard/ShareGardeningTipsDash";
import MyTipsDash from "../DashBoard/MyTipsDash";

const baseUrl = import.meta.env.VITE_BASE_URL;

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
        loader: () => fetch(`${baseUrl}/gardenersData`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/browseTips",
        Component: BrowseTips,
      },
      {
        path: "/tipDetails/:id",
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${baseUrl}/tipsDetails/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/updateSharedTip/:id",
        element: (
          <PrivateRoute>
            <UpdateTip></UpdateTip>
          </PrivateRoute>
        ),
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
  {
    path: "/*",
    Component: ErrorPage,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayOut></DashBoardLayOut>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoardHome></DashBoardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allGardeningTips",
        element: (
          <PrivateRoute>
            <AllGardeningTips></AllGardeningTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/shareGardeningTips",
        element: (
          <PrivateRoute>
            <ShareGardeningTipsDash></ShareGardeningTipsDash>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myGardeningTips",
        element: (
          <PrivateRoute>
            <MyTipsDash></MyTipsDash>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
