import React from "react";
import { FaHeart } from "react-icons/fa";

const SingleTrendingTip = ({ singleTip }) => {
  const { photoUrl, title, description, totalLiked } = singleTip;
  return (
    <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md backGround h-full">
      <div>
        <img
          src={photoUrl}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96"
        />
        <h2 className="mb-1 text-2xl font-semibold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex items-center space-x-4 text-lg justify-between">
        <h1 className="text-xl font-bold">Total Likes:{totalLiked} </h1>
        <div className="flex items-center space-x-2 border border-red-600 px-4 py-2 rounded-lg">
          <FaHeart className="text-red-600" />
          <p>{totalLiked}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTrendingTip;
