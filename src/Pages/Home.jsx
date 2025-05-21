import React from "react";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import SwiperSliderCarousel from "../Components/SwiperSliderCarousel";
import ActiveGardeners from "../Components/ActiveGardeners";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto space-y-6">
      <SwiperSliderCarousel></SwiperSliderCarousel>
      <h1 className="font-bold text-4xl text-center mt-10">
        Our <span className="primaryColor">Featured</span> Gardeners
      </h1>
      <ActiveGardeners></ActiveGardeners>
    </div>
  );
};

export default Home;
