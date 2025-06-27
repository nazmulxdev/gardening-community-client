import React, { useEffect, useState } from "react";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import SingleTrendingTip from "./SingleTrendingTip";

const TopTrendingTips = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(true);
  const [trendingTips, setTrendingTips] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/trendingTips`)
      .then((res) => res.json())
      .then((data) => {
        setTrendingTips(data);
        setLoading(false);
      });
  }, [baseUrl]);
  return (
    <div>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {trendingTips.map((singleTip, index) => (
            <SingleTrendingTip
              key={index}
              singleTip={singleTip}
            ></SingleTrendingTip>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopTrendingTips;
