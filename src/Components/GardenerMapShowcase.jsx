import { FaMapMarkerAlt } from "react-icons/fa";
import bangladeshMap from "../assets/bd.svg";
const gardenerLocations = [
  { region: "Dhaka", name: "Rina Akter", specialty: "Balcony Gardening" },
  { region: "Rajshahi", name: "Tuhin Hossain", specialty: "Hydroponics" },
  { region: "Sylhet", name: "Mehzabin Noor", specialty: "Indoor Plants" },
  { region: "Chittagong", name: "Farhan Alam", specialty: "Composting" },
];

const GardenerMapShowcase = () => {
  return (
    <section className="py-14" id="map">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-green-800 text-center mb-10"
          data-aos="fade-up"
        >
          🌍 Gardeners Across Bangladesh
        </h2>
        <div className="grid md:grid-cols-2 gap-10 justify-around">
          <img
            src={bangladeshMap}
            alt="Bangladesh Map"
            className="w-full max-h-[500px] object-contain rounded-lg hover:shadow-md hover:shadow-green-300 transition duration-300"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            {gardenerLocations.map((gardener, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 mb-4 hover:bg-green-50 p-2 rounded-lg transition"
              >
                <FaMapMarkerAlt className="text-green-600 mt-1 animate-bounce" />
                <div>
                  <p className="font-semibold text-gray-800">{gardener.name}</p>
                  <p className="text-sm text-gray-600">
                    {gardener.region} — {gardener.specialty}
                  </p>
                </div>
              </div>
            ))}
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Want to be featured? Join now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenerMapShowcase;
