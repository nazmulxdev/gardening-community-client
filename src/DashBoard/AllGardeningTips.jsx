import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import { Link } from "react-router";
import useBase from "../Hooks/useBase";

const AllGardeningTips = () => {
  const baseUrl = useBase();
  const [loading, setLoading] = useState(true);
  const [publicTips, setPublicTips] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  useEffect(() => {
    document.title = "GreenCircle | BrowseTips";
    setLoading(true);
    fetch(`${baseUrl}/gardenersTips/dashboard/public?difficulty=${difficulty}`)
      .then((res) => res.json())
      .then((data) => {
        setPublicTips(data);
        setLoading(false);
      });
  }, [difficulty, baseUrl]);
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
      <div className="overflow-x-auto my-8">
        <table className="table w-full">
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
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  <LoadingSpinner />
                </td>
              </tr>
            ) : (
              publicTips.map((tip, index) => (
                <tr
                  key={index}
                  className="hover:bg-base-200 transition duration-300"
                >
                  <td>{index + 1}</td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-14 w-14">
                          <img src={tip.photoUrl} alt={`Tip ${index + 1}`} />
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

                  <td>
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
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGardeningTips;
