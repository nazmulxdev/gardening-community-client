import { FaQuoteLeft } from "react-icons/fa";

const stories = [
  {
    name: "Rina Akter",
    location: "Dhaka",
    quote: "I turned my small Dhaka balcony into a herb haven in 30 days!",
    image:
      "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxnfKOvXhusJiRcOzYpj39kyoF0UbqLX1VZht7",
  },
  {
    name: "Tuhin Hossain",
    location: "Rajshahi",
    quote: "Never thought composting could be this fun. My veggies love it!",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Mehzabin Noor",
    location: "Sylhet",
    quote: "Indoor plants changed the whole vibe of my room 🌿",
    image:
      "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxVHqJ2YXDOPHKFGsuQhoNTRAWq9B5iwUlyd48",
  },
];

const GardenSuccessStories = () => {
  return (
    <section className="py-14 backGround rounded-xl" id="success">
      <div className="max-w-6xl mx-auto px-4 text-center rounded-xl">
        <h2
          className="text-3xl font-bold mb-12 text-green-800"
          data-aos="fade-up"
        >
          🌱 Garden Goals & Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:scale-105 hover:shadow-green-200 duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img
                src={story.image}
                alt={story.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 text-left">
                <FaQuoteLeft className="text-green-500 text-xl mb-2" />
                <p className="text-sm text-gray-700 italic mb-4">
                  "{story.quote}"
                </p>
                <p className="text-sm font-semibold text-green-700">
                  {story.name} — {story.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardenSuccessStories;
