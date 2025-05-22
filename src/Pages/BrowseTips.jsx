import React from "react";
import { FaEye } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const BrowseTips = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="font-bold text-4xl text-center mt-10">
        <span className="primaryColor">Browse</span> Gardening Wisdom
      </h1>
      <p className="font-medium text-lg text-center mt-2">
        Discover a collection of helpful gardening tips shared by our community.
        From composting to vertical gardening — explore what fellow gardeners
        have learned and loved.
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1.</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
