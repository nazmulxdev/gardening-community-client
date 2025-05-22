import React from "react";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import SwiperSliderCarousel from "../Components/SwiperSliderCarousel";
import ActiveGardeners from "../Components/ActiveGardeners";
import TopTrendingTips from "../Components/TopTrendingTips";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto space-y-6">
      <SwiperSliderCarousel></SwiperSliderCarousel>
      <h1 className="font-bold text-4xl text-center mt-10">
        Our <span className="primaryColor">Featured</span> Gardeners
      </h1>
      <ActiveGardeners></ActiveGardeners>
      <h1 className="font-bold text-4xl text-center mt-12 px-4">
        Top <span className="primaryColor">Trending</span> Tips
      </h1>
      <p className="text-lg text-center px-4">
        Discover the most loved gardening tips from our community! These top
        picks are trending for a reason — packed with practical advice, creative
        hacks, and plant care wisdom that fellow gardeners can't stop liking.
        Dive in and get inspired to grow your green space!
      </p>
      <TopTrendingTips></TopTrendingTips>
    </div>
  );
};

export default Home;
