import React, { useEffect, useState } from "react";
import { FaEye, FaFilter, FaTimes } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import { Link } from "react-router";
import useBase from "../Hooks/useBase";

const BrowseTips = () => {
  const baseUrl = useBase();
  const [loading, setLoading] = useState(true);
  const [publicTips, setPublicTips] = useState([]);
  const [filters, setFilters] = useState({
    difficulty: "",
    category: "",
    availability: ""
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = "GreenCircle | BrowseTips";
    setLoading(true);
    
    // Construct query parameters
    const queryParams = new URLSearchParams();
    if (filters.difficulty) queryParams.append('difficulty', filters.difficulty);
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.availability) queryParams.append('availability', filters.availability);

    fetch(`${baseUrl}/gardenersTips/public?${queryParams.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setPublicTips(data);
        setLoading(false);
      });
  }, [filters, baseUrl]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      difficulty: "",
      category: "",
      availability: ""
    });
  };

  // Extract unique categories for filter dropdown
  const categories = [...new Set(publicTips.map(tip => tip.category))];

  // Count active filters
  const activeFilterCount = Object.values(filters).filter(val => val !== "").length;

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="text-center py-8">
        <h1 className="font-bold text-4xl">
          <span className="primaryColor">Browse</span> Gardening Wisdom
        </h1>
        <p className="font-medium text-lg mt-2 max-w-3xl mx-auto">
          Discover a collection of helpful gardening tips shared by our
          community. From composting to vertical gardening — explore what fellow
          gardeners have learned and loved.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filter Tips</h2>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="btn my-btn btn-sm"
          >
            <FaFilter className="mr-2" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
        </div>

        {showFilters && (
          <div className="bg-base-100 p-4 rounded-lg shadow-md mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Difficulty Filter */}
              <div>
                <label className="label">
                  <span className="label-text">Difficulty Level</span>
                </label>
                <select
                  name="difficulty"
                  onChange={handleFilterChange}
                  className="select select-bordered w-full"
                  value={filters.difficulty}
                >
                  <option value="">All Levels</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  onChange={handleFilterChange}
                  className="select select-bordered w-full"
                  value={filters.category}
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="label">
                  <span className="label-text">Availability</span>
                </label>
                <select
                  name="availability"
                  onChange={handleFilterChange}
                  className="select select-bordered w-full"
                  value={filters.availability}
                >
                  <option value="">All Types</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-4 gap-2">
              {activeFilterCount > 0 && (
                <button 
                  onClick={resetFilters} 
                  className="btn btn-outline btn-sm"
                >
                  <FaTimes className="mr-1" />
                  Clear Filters
                </button>
              )}
              <button 
                onClick={() => setShowFilters(false)} 
                className="btn my-btn btn-sm"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {loading ? (
          <div className="col-span-full flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : publicTips.length > 0 ? (
          publicTips.map((tip, index) => (
            <div
              key={tip._id}
              className="backGround rounded-2xl shadow-xl overflow-hidden transition hover:scale-105 hover:shadow-green-200 duration-300"
            >
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
                    <span className={`badge ${
                      tip.difficultyLevel === 'easy' ? 'badge-success' :
                      tip.difficultyLevel === 'medium' ? 'badge-warning' : 'badge-error'
                    }`}>
                      {tip.difficultyLevel}
                    </span>
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
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl mb-4">No tips found matching your filters</p>
            <button 
              onClick={resetFilters} 
              className="btn my-btn"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTips;