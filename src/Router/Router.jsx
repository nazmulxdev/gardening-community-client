import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import ThemeHandler from "../Utilities/ThemeHandler";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: ThemeHandler,
      },
    ],
  },
]);

export default Router;
