import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export default function TourPackages() {
  const categories = ["All", "Beach", "Hill", "Spiritual", "Wildlife"];

  const [active, setActive] = useState("All");

  const packages = [
    {
      title: "Puri Jagannath Darshan",
      category: "Spiritual",
      duration: "2 Nights / 3 Days",
      price: "₹6,499",
      location: "Puri, Odisha",
      img: "https://images.unsplash.com/photo-1602016753121-8b8e79fba399",
    },
    {
      title: "Goa Beach Holiday",
      category: "Beach",
      duration: "3 Nights / 4 Days",
      price: "₹11,999",
      location: "Goa",
      img: "https://plus.unsplash.com/premium_photo-1661963545654-57f75ad1ff20",
    },
    {
      title: "Shimla Hill Station",
      category: "Hill",
      duration: "4 Nights / 5 Days",
      price: "₹14,999",
      location: "Himachal",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Chilika Lake Dolphin Tour",
      category: "Wildlife",
      duration: "1 Night / 2 Days",
      price: "₹4,999",
      location: "Odisha",
      img: "https://plus.unsplash.com/premium_photo-1675814089486-fc66048cd81d",
    },
    {
      title: "Kerala Backwaters",
      category: "Beach",
      duration: "3 Nights / 4 Days",
      price: "₹16,499",
      location: "Kerala",
      img: "https://plus.unsplash.com/premium_photo-1675714801928-4fc1921a3f8a",
    },
    {
      title: "Darjeeling Himalayan Trip",
      category: "Hill",
      duration: "3 Nights / 4 Days",
      price: "₹12,999",
      location: "West Bengal",
      img: "https://images.unsplash.com/photo-1499696786230-29e776323f81",
    },
  ];

  const filtered = active === "All"
    ? packages
    : packages.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO BANNER */}
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1493558103817-58b2924bce98')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
          Tour Packages
        </h1>
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

                <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                  View Details <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
