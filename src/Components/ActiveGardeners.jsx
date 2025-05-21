import React, { useEffect, useState } from "react";
import FeatureGardeners from "./FeatureGardeners";

const ActiveGardeners = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/activeGardeners")
      .then((res) => res.json())
      .then((data) => {
        setActiveGardeners(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 sm:gap-4 mb-10">
      {activeGardeners.map((gardener, index) => (
        <FeatureGardeners key={index} gardener={gardener}></FeatureGardeners>
      ))}
    </div>
  );
};

export default ActiveGardeners;
