import { useParams } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Puri Jagannath Darshan",
    location: "Puri, Odisha",
    duration: "2 Nights / 3 Days",
    price: "6499",
    image: "https://images.unsplash.com/photo-1602016753121-8b8e79fba399",
    description:
      "Visit the sacred Jagannath Temple, enjoy beach views, and explore the local culture of Puri.",
  },
  // Add more tours here...
];

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === Number(id));

  if (!tour) return <h1 className="text-center text-red-500">Tour Not Found!</h1>;

  return (
    <div className="container mx-auto px-4 py-10">
      <img
        src={tour.image}
        className="w-full h-[400px] object-cover rounded-2xl shadow-md"
      />

      <h1 className="text-4xl font-bold mt-6">{tour.title}</h1>

      <p className="text-gray-600 text-lg mt-2">{tour.location}</p>
      <p className="text-gray-600 text-lg">{tour.duration}</p>

      <h2 className="text-3xl font-bold text-blue-600 mt-4">
        ₹{tour.price}
      </h2>

      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        {tour.description}
      </p>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow">
        Book This Tour
      </button>
    </div>
  );
}
