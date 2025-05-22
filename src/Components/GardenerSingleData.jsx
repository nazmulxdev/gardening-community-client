import React from "react";

const GardenerSingleData = ({ gardener }) => {
  console.log(gardener);
  return (
    <div className="">
      <div
        className="max-w-screen-2xl mx-auto p-8 mb-8 rounded-2xl grid grid-cols-1  sm:grid-cols-3
     items-center justify-center gap-16 backGround"
      >
        <div className="sm:col-span-1 rounded-[0.75rem]">
          <img
            className="w-80 h-80 object-cover rounded-[0.75rem] mx-auto sm:mx-0"
            src={gardener.image}
            alt=""
          />
        </div>
        <div className="sm:col-span-2  text-start ">
          <div className="flex items-center space-x-2 mt-4">
            <h1 className="font-bold text-2xl">{gardener.name}</h1>
            <div>
              {gardener.status === "active" ? (
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {gardener.status}
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {gardener.status}
                </span>
              )}
            </div>
          </div>
          <p className="font-medium text-base italic mb-4">
            from {gardener.location}
          </p>
          <p className="font-medium text-lg  my-4">
            Expertise: {gardener.expertise}
          </p>
          <div className="flex items-center space-x-6">
            <p className="font-medium text-lg  ">Age: {gardener.age}</p>
            <p className="font-medium text-lg">gender: {gardener.gender}</p>
          </div>
          <div className="mb-2 md:mb-0 text-lg font-medium my-4">
            Status:{" "}
            {gardener.status === "active" ? (
              <span className="primaryColor">{gardener.status}</span>
            ) : (
              <span className="text-red-500">{gardener.status}</span>
            )}
          </div>
          <p className="font-medium text-lg  my-4">Bio: {gardener.bio}</p>

          <p className="font-medium text-lg  my-4">
            Experience: {gardener.experience}
          </p>
          <p className="font-medium text-lg  my-4">
            Total shared tips: {gardener.totalTipsShared}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GardenerSingleData;
