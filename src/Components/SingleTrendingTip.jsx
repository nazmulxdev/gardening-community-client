import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const SingleTrendingTip = ({ singleTip }) => {
  const { _id, photoUrl, title, description, totalLiked } = singleTip;
  return (
    <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md backGround">
      <div>
        <img src={photoUrl} alt="" className="object-cover w-full mb-4 h-60" />
        <h2 className="mb-1 text-2xl font-semibold">{title}</h2>
        <p>
          {description.length > 80
            ? `${description.slice(0, 100)}...`
            : description}
          <span>
            <Link className="primaryColor" to={`/tipDetails/${_id}`}>
              Show more
            </Link>
          </span>
        </p>
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
