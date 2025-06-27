import React, { useEffect, useState } from "react";
import FeatureGardeners from "./FeatureGardeners";
import LoadingSpinner from "../Utilities/LoadingSpinner";

const ActiveGardeners = () => {
  const baseUrl=import.meta.env.VITE_BASE_URL
  const [activeGardeners, setActiveGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/activeGardeners`)
      .then((res) => res.json())
      .then((data) => {
        setActiveGardeners(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 sm:gap-4 mb-10">
          {activeGardeners.map((gardener, index) => (
            <FeatureGardeners
              key={index}
              gardener={gardener}
            ></FeatureGardeners>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveGardeners;
