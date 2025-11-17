export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center  md:p-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Discover Beautiful Destinations <br /> With Us
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Best travel packages, comfortable tours and affordable trips across
            Odisha & India.
          </p>

          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-7 py-3 text-lg rounded-lg font-semibold shadow-lg">
            Explore Packages
          </button>
        </div>

        {/* RIGHT ENQUIRY CARD */}
        <div className="ml-auto hidden lg:block">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[350px]">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Get a Free Quote
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 border rounded-md"
              />

              <input
                type="text"
                placeholder="Destination"
                className="w-full p-3 border rounded-md"
              />

              <input
                type="date"
                placeholder="Travel Date"
                className="w-full p-3 border rounded-md"
              />

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-semibold">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
