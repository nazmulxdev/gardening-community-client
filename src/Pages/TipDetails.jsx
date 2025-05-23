import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const TipDetails = () => {
  const tip = useLoaderData();

  const [likes, setLikes] = useState(tip.totalLiked);
  const [liked, setLiked] = useState(false);

  const handleLike = (id, currentLikes) => {
    if (!liked) {
      const newLikes = currentLikes + 1;
      setLikes(newLikes);
      setLiked(true);

      fetch(`https://final-gerdaning-server.vercel.app/tipsDetails/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ totalLiked: newLikes }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  useEffect(() => {
    document.title = `GreenCircle | ${tip.title}`;
  }, [tip]);
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="my-8">
        <h1 className="font-bold text-4xl text-center mt-10">
          <span className="primaryColor">Gardener</span> Tip Details
        </h1>
        <p className="max-w-6xl mx-auto font-medium text-lg text-center mt-2">
          Explore in-depth gardening insights shared by our passionate
          community. From pruning techniques to seasonal care, discover how real
          gardeners nurture their plants. You can like and appreciate tips that
          resonate with your gardening journey. s
        </p>
      </div>
      <div className="max-w-3xl mx-auto backGround shadow-xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src={tip.photoUrl}
            alt={tip.title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-bold primaryColor">{tip.title}</h2>
          <p className="text-sm text-gray-500">
            By {tip.name} ({tip.email})
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Plant Type:</span> {tip.plantType}
            </p>
            <p>
              <span className="font-semibold">Difficulty:</span>{" "}
              <span className="capitalize badge badge-error text-white">
                {tip.difficultyLevel}
              </span>
            </p>
            <p>
              <span className="font-semibold">Category:</span> {tip.category}
            </p>
            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {tip.availability}
            </p>
          </div>

          <p className=" pt-2 leading-relaxed">{tip.description}</p>

          <div className="pt-4 flex items-center gap-2">
            <button
              onClick={() => handleLike(tip._id, likes)}
              className={`btn btn-sm ${
                liked ? "btn-error text-red-500" : "btn-outline btn-error"
              }`}
              disabled={liked}
            >
              <FaHeart /> {likes}
            </button>
            <span className="text-sm ">
              {liked ? "You liked this tip" : "Like this tip"}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center my-10">
        <Link to="/browseTips">
          <button className="btn my-btn ">
            <FaArrowLeft></FaArrowLeft> Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TipDetails;
