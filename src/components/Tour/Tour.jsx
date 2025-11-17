const packages = [
  {
    title: "Puri Jagannath Tour",
    duration: "2 Nights / 3 Days",
    img: "https://images.unsplash.com/photo-1602016753184-dc5c7d07212e?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Goa Beach Holiday",
    duration: "3 Nights / 4 Days",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Himalayan Hill Trip",
    duration: "4 Nights / 5 Days",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Kerala Backwater Tour",
    duration: "3 Nights / 4 Days",
    img: "https://images.unsplash.com/photo-1508330570239-ce7cabceee22?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Rajasthan Heritage Trip",
    duration: "4 Nights / 5 Days",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Bhubaneswar Local Tour",
    duration: "1 Day Plan",
    img: "https://images.unsplash.com/photo-1602016753121-8b8e79fba399?auto=format&fit=crop&w=900&q=60",
  },
];

export default function Packages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12">
          Our <span className="text-yellow-500">Tour Packages</span>
        </h1>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-[1.03] transition-all"
            >
              <img src={pkg.img} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h2 className="text-xl font-bold text-blue-700">
                  {pkg.title}
                </h2>
                <p className="text-gray-600">{pkg.duration}</p>

                <button className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
