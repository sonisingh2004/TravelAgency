import { CheckCircle, Clock, MapPin, XCircle } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Puri Jagannath Darshan",
    location: "Puri, Odisha",
    duration: "2 Nights / 3 Days",
    price: "6499",
    images: [
      "https://images.pexels.com/photos/33518945/pexels-photo-33518945.jpeg",
      "https://images.pexels.com/photos/27286530/pexels-photo-27286530.jpeg",
      "https://images.pexels.com/photos/32594727/pexels-photo-32594727.jpeg",
    ],
    description:
      "Visit the sacred Jagannath Temple, enjoy beach views, and explore the cultural beauty of Puri.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Temple Visit",
        details:
          "Arrive at Puri, check in to hotel. Visit Jagannath Temple & local markets.",
      },
      {
        day: "Day 2",
        title: "Puri Beach & Sightseeing",
        details:
          "Enjoy sunrise at Puri Beach and visit Lokanath Temple and Gundicha Temple.",
      },
      {
        day: "Day 3",
        title: "Chilika Lake Trip",
        details:
          "Visit Chilika Lake (Satapada) for dolphin watching. Drop at Puri Railway Station.",
      },
    ],
    inclusions: ["Hotel Stay", "Breakfast", "Local Transport", "Sightseeing"],
    exclusions: ["Train Tickets", "Lunch", "Dinner", "Personal Expenses"],
  },
  
];

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === Number(id));
  const [showModal, setShowModal] = useState(false);

  if (!tour)
    return <h1 className="text-center text-red-500 text-3xl mt-10">Tour Not Found!</h1>;

  return (
    <div className="pb-20">
      {/* HERO SECTION IMAGE */}
      <div className="relative h-[55vh] w-full">
        <img
          src={tour.images[0]}
          className="w-full h-full object-cover"
          alt={tour.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h1 className="absolute bottom-10 left-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          {tour.title}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {/* BASIC INFO */}
          <div className="mb-5">
            <p className="flex items-center gap-2 text-gray-700 text-lg">
              <MapPin size={20} /> {tour.location}
            </p>
            <p className="flex items-center gap-2 text-gray-700 text-lg">
              <Clock size={20} /> {tour.duration}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">{tour.description}</p>

          {/* IMAGE GALLERY */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tour.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-xl shadow-md h-40 w-full object-cover hover:scale-105 transition"
              />
            ))}
          </div>

          {/* ITINERARY */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Day-wise Itinerary</h2>
          <div className="space-y-6">
            {tour.itinerary.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow-md border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-bold">{item.day} - {item.title}</h3>
                <p className="text-gray-600 mt-2">{item.details}</p>
              </div>
            ))}
          </div>

          {/* INCLUSIONS */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Inclusions</h2>
          <ul className="space-y-2">
            {tour.inclusions.map((inc, i) => (
              <li key={i} className="flex items-center gap-2 text-green-600 text-lg">
                <CheckCircle size={22} /> {inc}
              </li>
            ))}
          </ul>

          {/* EXCLUSIONS */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Exclusions</h2>
          <ul className="space-y-2">
            {tour.exclusions.map((exc, i) => (
              <li key={i} className="flex items-center gap-2 text-red-600 text-lg">
                <XCircle size={22} /> {exc}
              </li>
            ))}
          </ul>

          {/* MAP */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Map</h2>
          <iframe
            className="w-full h-72 rounded-xl shadow"
            src="https://www.google.com/maps/embed?pb=!1m18..."
          ></iframe>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-10 mb-4">FAQs</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">Is food included?</summary>
              <p className="mt-2 text-gray-600">Breakfast is included.</p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">Is this trip family-friendly?</summary>
              <p className="mt-2 text-gray-600">Yes, completely safe for families.</p>
            </details>
          </div>
        </div>

        {/* RIGHT SIDEBAR – PRICE CARD */}
        <div className="sticky top-24 h-fit bg-white p-6 rounded-2xl shadow-xl border">
          <h3 className="text-3xl font-bold text-blue-600">₹{tour.price}</h3>
          <p className="text-gray-600 mt-1">Per Person</p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-5 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* BOOKING MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 w-[90%] md:w-[450px] rounded-xl shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4">Book This Tour</h2>

            <form className="space-y-4">
              <input className="w-full p-3 border rounded-lg" placeholder="Your Name" />
              <input className="w-full p-3 border rounded-lg" placeholder="Mobile Number" />
              <input className="w-full p-3 border rounded-lg" placeholder="Email" />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
