export default function About() {
  return (
    <div className="bg-gray-50 mt-10">

      {/* TOP HERO SMALL BANNER */}
      <div className="relative w-full h-[45vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            About <span className="text-yellow-400">Us</span>
          </h1>
        </div>
      </div>

      {/* MAIN ABOUT SECTION */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
          alt="travel"
          className="rounded-2xl shadow-xl"
        />

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a trusted travel agency with years of experience in offering custom
            tour packages, hotel bookings, transportation services, and complete travel
            solutions. Our goal is to make your journey memorable, comfortable, and hassle-free.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With thousands of happy customers, we continue to deliver the best travel
            experience across Odisha and India. Whether it's pilgrimage, adventure, honeymoon,
            family trip, or group tour—our expert team helps you plan it perfectly.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-6 rounded-xl shadow-md bg-gray-50 hover:shadow-xl transition">
              <div className="text-yellow-500 text-4xl mb-3">★</div>
              <h3 className="text-xl font-semibold mb-2">Best Tour Packages</h3>
              <p className="text-gray-600">
                Affordable and attractive travel packages designed for every traveler.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-gray-50 hover:shadow-xl transition">
              <div className="text-blue-500 text-4xl mb-3">🚌</div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Transport</h3>
              <p className="text-gray-600">
                AC buses, luxury cars, and safe rides with experienced drivers.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-gray-50 hover:shadow-xl transition">
              <div className="text-green-500 text-4xl mb-3">📞</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is always available to assist you during your trip.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="p-8 bg-gray-50 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-3 text-blue-700">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide exceptional travel experiences that combine comfort,
              safety, and memorable moments. We aim to offer customized trips
              for every customer based on their needs and budget.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-3 text-blue-700">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become one of India's most trusted and preferred travel companies,
              known for quality service, reliability, and customer satisfaction.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
