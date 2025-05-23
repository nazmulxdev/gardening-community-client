import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { successMessage } from "../Utilities/sweetAlerts";

const ShareGardenTips = () => {
  const { presentUser } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const gardenTip = Object.fromEntries(formData.entries());
    const tipDetails = { ...gardenTip, totalLiked: 0 };
    fetch("https://final-gerdaning-server.vercel.app/gardenersTips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          successMessage("Your have shared your garden tips successfully");
        }
      });
  };

  useEffect(() => {
    document.title = "GreenCircle | ShareGardenTips";
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="font-bold text-4xl text-center mt-10">
        <span className="primaryColor">Spread </span>Your Green Knowledge
      </h1>
      <p className="font-medium text-lg text-center mt-2">
        Got a green trick up your sleeve? Share your favorite gardening tip and
        help our community grow one leaf at a time.
      </p>
      <form onSubmit={handleForm} className="my-6">
        <div className="card-body grid grid-cols-1 md:grid-cols-2">
          <fieldset className="fieldset">
            <label className="text-lg font-medium">Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              required
              placeholder="Enter title (e.g., “How I Grow Tomatoes Indoors”)"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="text-lg font-medium">Plant Type/Topic</label>
            <input
              type="text"
              required
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
              className="input w-full"
              name="photoUrl"
              placeholder="Enter image URL"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="text-lg font-medium">Difficulty Level</label>
            <select
              defaultValue="Pick a Level"
              name="difficultyLevel"
              required
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
              defaultValue="Pick a Level"
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
              value={presentUser.displayName}
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
              value={presentUser.email}
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
            required
          ></textarea>
          <input
            type="submit"
            className="btn w-full my-btn "
            name="details"
            value="Share Now"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ShareGardenTips;
