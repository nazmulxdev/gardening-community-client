import React from "react";
import { BarLoader, FadeLoader, PropagateLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center  flex-col  my-8 min-w-sm">
      <FadeLoader color="#05a540" height={15} radius={2} width={5} />
      <PropagateLoader color="#05a540" size={15} />
    </div>
  );
};

export default LoadingSpinner;
