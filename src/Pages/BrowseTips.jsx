import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import { Link } from "react-router";

const BrowseTips = () => {
  const [loading, setLoading] = useState(true);
  const [publicTips, setPublicTips] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  useEffect(() => {
    document.title = "GreenCircle | BrowseTips";
    setLoading(true);
    fetch(
      `https://final-gerdaning-server.vercel.app/gardenersTips/public?difficulty=${difficulty}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setPublicTips(data);
        setLoading(false);
      });
  }, [difficulty]);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <h1 className="font-bold text-4xl text-center mt-10">
          <span className="primaryColor">Browse</span> Gardening Wisdom
        </h1>
        <p className="font-medium text-lg text-center mt-2">
          Discover a collection of helpful gardening tips shared by our
          community. From composting to vertical gardening — explore what fellow
          gardeners have learned and loved.
        </p>
        <select
          onChange={(e) => setDifficulty(e.target.value)}
          className="select select-bordered w-48"
          value={difficulty}
        >
          <option value="">All</option>
          <option value="easy">Easy First</option>
          <option value="medium">Medium First</option>
          <option value="hard">Hard First</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {loading ? (
          <div className="grid md:col-span-2 lg:col-span-3">
            <LoadingSpinner />
          </div>
        ) : (
          publicTips.map((tip, index) => (
            <div key={index}
              className="backGround rounded-2xl shadow-xl overflow-hidden transition hover:scale-105 hover:shadow-green-200 duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="mask mask-squircle h-16 w-16">
                      <img src={tip.photoUrl} alt="Tip Image" />
                    </div>
                  </div>
                  <div>
                    <h2 className="card-title">{tip.title}</h2>
                    <p className="text-sm text-gray-500">#{index + 1}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-1 text-sm">
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {tip.category}
                  </p>
                  <p>
                    <span className="font-semibold">Availability:</span>{" "}
                    {tip.availability}
                  </p>
                  <p>
                    <span className="font-semibold">Difficulty:</span>{" "}
                    {tip.difficultyLevel}
                  </p>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/tipDetails/${tip._id}`}
                    data-tooltip-id={`tip-${tip._id}`}
                    data-tooltip-content="See More Details"
                  >
                    <button className="btn my-btn btn-sm">
                      <FaEye />
                    </button>
                  </Link>
                  <Tooltip
                    id={`tip-${tip._id}`}
                    className="backGround primaryColor"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseTips;
