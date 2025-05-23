import React, { useEffect, useState } from "react";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import SingleTrendingTip from "./SingleTrendingTip";

const TopTrendingTips = () => {
  const [loading, setLoading] = useState(true);
  const [trendingTips, setTrendingTips] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://final-gerdaning-server.vercel.app/trendingTips")
      .then((res) => res.json())
      .then((data) => {
        setTrendingTips(data);
        setLoading(false);
      });
  }, []);
  console.log(trendingTips);
  return (
    <div>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-6 mb-12">
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
