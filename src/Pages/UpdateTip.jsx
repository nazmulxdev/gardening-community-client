import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import AuthContext from "../Context/AuthContext";

const UpdateTip = () => {
  const { id } = useParams();
  const [updateUser, setUpdateUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/tipsDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateUser(data);
        setLoading(false);
      });
  }, [id]);

  const {
    title,
    email,
    name,
    plantType,
    photoUrl,
    difficultyLevel,
    category,
    description,
    availability,
  } = updateUser;

  console.log(id);
  console.log(updateUser);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="font-bold text-4xl text-center mt-10">
        <span className="primaryColor">Edit </span> Your Gardening Tip
      </h1>
      <div>
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <form className="my-6">
            <div className="card-body grid grid-cols-1 md:grid-cols-2">
              <fieldset className="fieldset">
                <label className="text-lg font-medium">Title</label>
                <input
                  type="text"
                  className="input w-full"
                  name="title"
                  defaultValue={title}
                  required
                  placeholder="Enter title (e.g., “How I Grow Tomatoes Indoors”)"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="text-lg font-medium">Plant Type/Topic</label>
                <input
                  type="text"
                  required
                  defaultValue={plantType}
                  className="input w-full"
                  name="plantType"
                  placeholder="Enter Plant Type/Topic"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="text-lg font-medium">Image URL</label>
                <input
                  type="text"
                  required
                  defaultValue={photoUrl}
                  className="input w-full"
                  name="photoUrl"
                  placeholder="Enter image URL"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="text-lg font-medium">Difficulty Level</label>
                <select
                  name="difficultyLevel"
                  required
                  defaultValue={difficultyLevel}
                  className="select w-full"
                >
                  <option disabled={true}>Select Level</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <label className="text-lg font-medium">Category</label>
                <select
                  id="category"
                  name="category"
                  defaultValue={category}
                  className="select w-full"
                  required
                >
                  <option disabled>Select Category</option>
                  <option value="Composting">Composting</option>
                  <option value="Plant Care">Plant Care</option>
                  <option value="Vertical Gardening">Vertical Gardening</option>
                  <option value="Hydroponics">Hydroponics</option>
                  <option value="Balcony Gardening">Balcony Gardening</option>
                  <option value="Seed Starting">Seed Starting</option>
                  <option value="Organic Farming">Organic Farming</option>
                  <option value="Pest Control">Pest Control</option>
                  <option value="Soil Health">Soil Health</option>
                  <option value="Garden Design">Garden Design</option>
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="text-lg font-medium">Availability</label>
                <select
                  defaultValue={availability}
                  name="availability"
                  required
                  className="select w-full"
                >
                  <option disabled={true}>Select Availability</option>
                  <option value="public">Public</option>
                  <option value="hidden">Hidden</option>
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="text-lg font-medium">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  name="name"
                  value={name}
                  readOnly
                  placeholder="Enter your name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="text-lg font-medium">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  name="email"
                  value={email}
                  readOnly
                  placeholder="Enter your email"
                />
              </fieldset>
            </div>
            <fieldset className="fieldset card-body space-y-4">
              <legend className="fieldset-legend">Description</legend>
              <textarea
                className="textarea h-24 w-full"
                placeholder="Description"
                name="description"
                defaultValue={description}
                required
              ></textarea>
              <input
                type="submit"
                className="btn w-full my-btn "
                name="details"
                value="Update Now"
              />
            </fieldset>
          </form>
        )}
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full border-t-2 border-[#05a540] my-4" />
        <p className="px-3 ">OR</p>
        <hr className="w-full border-t-2 border-[#05a540] my-4" />
      </div>
      <h1 className="font-bold text-center mb-8">
        Have changed mind?{" "}
        <Link to={-1} className="primaryColor">
          go back!
        </Link>
      </h1>
    </div>
  );
};

export default UpdateTip;
