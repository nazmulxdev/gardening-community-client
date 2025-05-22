import React from "react";
import Lottie from "lottie-react";
import "./index.css";

import errorAnimation from "../public/Animation - 1747934004264 (1).json";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen mx-auto bg-[#05a540]">
      <Lottie
        className="max-w-xl mx-auto"
        animationData={errorAnimation}
        loop
        autoplay
      />
      <div className="text-center">
        <Link
          to="/"
          className="btn btn-3xl text-green-700 border-none shadow-2xl"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
