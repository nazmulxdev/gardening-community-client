import React, { useEffect, useState } from "react";
import GardenerSingleData from "../Components/GardenerSingleData";
import { useLoaderData } from "react-router";

const ExploreGardeners = () => {
  const gardenersData = useLoaderData();
  const [allGardeners, setAllGardeners] = useState([]);
  useEffect(() => {
    setAllGardeners(gardenersData);
  }, [gardenersData]);

  console.log(allGardeners);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="font-bold text-4xl text-center mt-10">
        <span className="primaryColor">Explore All</span> Gardeners
      </h1>
      <p className="font-medium text-lg text-center mt-2">
        Explore our community of gardeners. View profiles, learn about their
        specialties, and get inspired by their shared knowledge.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {allGardeners.map((gardener, index) => (
          <GardenerSingleData
            key={index}
            gardener={gardener}
          ></GardenerSingleData>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
