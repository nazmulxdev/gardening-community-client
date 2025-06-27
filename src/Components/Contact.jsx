import React from "react";

const Contact = () => {
  return (
    <section className="backGround my-16">
      <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
        <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">
          Suggested Help Center Options:
        </h1>
        <div className="input rounded-lg relative mt-6 mb-12 ">
          <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
            <button
              type="submit"
              title="Search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg fill="" viewBox="0 0 512 512" className="w-4 h-4 ">
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className=" w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none"
          />
        </div>
        <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 primaryColor">
          <div className="flex flex-col w-full divide-y">
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              🌼 Plant Care 101
            </a>
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              🧑‍🌾 Explore Gardeners Help
            </a>
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              🧑‍🌾 Explore Gardeners Help
            </a>
          </div>
          <div className="flex flex-col w-full divide-y">
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              📦 My Tips Support
            </a>
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              📍 Local Gardening Events
            </a>
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              🔐 Account & Privacy
            </a>
          </div>
          <div className="hidden w-full divide-y sm:flex-col sm:flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              📝 Sharing a Tip
            </a>
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              📬 Contact Us
            </a>
            <a
              rel="noopener noreferrer"
              href=""
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12 primaryColor font-bold"
            >
              👥 Community Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
