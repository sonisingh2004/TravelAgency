import { Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tour() {
  const categories = ["All", "Beach", "Hill", "Spiritual", "Wildlife"];

  const [active, setActive] = useState("All");

  const packages = [
    {
      id:1,
      title: "Puri Jagannath Darshan",
      category: "Spiritual",
      duration: "2 Nights / 3 Days",
      price: "₹6,499",
      location: "Puri, Odisha",
      img: "https://images.pexels.com/photos/27023262/pexels-photo-27023262.jpeg",
    },
    {
      id:2,
      title: "Goa Beach Holiday",
      category: "Beach",
      duration: "3 Nights / 4 Days",
      price: "₹11,999",
      location: "Goa",
      img: "https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg",
    },
    {
      id:3,
      title: "Shimla Hill Station",
      category: "Hill",
      duration: "4 Nights / 5 Days",
      price: "₹14,999",
      location: "Himachal",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      id:4,
      title: "Chilika Lake Dolphin Tour",
      category: "Wildlife",
      duration: "1 Night / 2 Days",
      price: "₹4,999",
      location: "Odisha",
      img: "https://images.pexels.com/photos/17045419/pexels-photo-17045419.jpeg",
    },
    {
      id:5,
      title: "Kerala Backwaters",
      category: "Beach",
      duration: "3 Nights / 4 Days",
      price: "₹16,499",
      location: "Kerala",
      img: "https://images.pexels.com/photos/30778230/pexels-photo-30778230.jpeg",
    },
    {
      id:6,
      title: "Darjeeling Himalayan Trip",
      category: "Hill",
      duration: "3 Nights / 4 Days",
      price: "₹12,999",
      location: "West Bengal",
      img: "https://images.pexels.com/photos/103875/pexels-photo-103875.jpeg",
    },
  ];

  const filtered = active === "All"
    ? packages
    : packages.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO BANNER */}
      <div
        className="h-[50vh] bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/29547310/pexels-photo-29547310.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-sm">
          Explore Our Best <span className="text-yellow-400">Tour Packages </span>
        </h1>
        <p className="text-white text-center mt-2">
          Choose from handpicked tours designed to give you unforgettable experiences.
        </p>
      </div>

      <div className="container mx-auto px-4 py-14">

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                active === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PACKAGE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                  {pkg.title}
                </h3>

                <div className="flex items-center text-gray-500 gap-2 mb-2">
                  <MapPin size={16} /> {pkg.location}
                </div>

                <div className="flex items-center text-gray-500 gap-2 mb-4">
                  <Clock size={16} /> {pkg.duration}
                </div>

                <p className="text-2xl font-bold text-blue-600">{pkg.price}</p>

              <Link to={`/tour/${pkg.id}`}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}