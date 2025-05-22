import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import LoadingSpinner from "../Utilities/LoadingSpinner";

const BrowseTips = () => {
  const [loading, setLoading] = useState(true);
  const [publicTips, setPublicTips] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  console.log(typeof difficulty, difficulty);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/gardenersTips/public?difficulty=${difficulty}`)
      .then((res) => res.json())
      .then((data) => {
        setPublicTips(data);
        setLoading(false);
      });
  }, [difficulty]);
  console.log(publicTips);
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Availability</th>
              <th>Difficulty</th>
              <th>Details</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan="6" className="mx-auto">
                  <LoadingSpinner></LoadingSpinner>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {publicTips.map((tip, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={tip.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{tip.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{tip.category}</td>
                  <td>{tip.availability}</td>
                  <td>{tip.difficultyLevel}</td>
                  <th>
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="See More Details"
                    >
                      <button className="btn my-btn btn-xs">
                        <FaEye></FaEye>
                      </button>
                    </a>
                    <Tooltip
                      id="my-tooltip"
                      className="backGround primaryColor"
                    ></Tooltip>
                  </th>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
