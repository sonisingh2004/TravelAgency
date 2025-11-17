import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-gray-50">

      {/* 🔶 CONTACT PAGE BANNER */}
      <section className="relative w-full h-[45vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/89566/pexels-photo-89566.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            We're ready to help you plan your next unforgettable journey.
          </p>
        </div>
      </section>

      {/* 🔶 CONTACT DETAILS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-xl mb-4">
              <Phone className="text-blue-700" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Phone</h3>
            <p className="text-gray-600 mt-1">+91 xxxx 44441</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-red-100 w-14 h-14 flex items-center justify-center rounded-xl mb-4">
              <Mail className="text-red-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Email</h3>
            <p className="text-gray-600 mt-1">info@yourtravels.com</p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl mb-4">
              <MapPin className="text-green-700" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Location</h3>
            <p className="text-gray-600 mt-1">
              Bhubaneswar, Odisha
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-yellow-100 w-14 h-14 flex items-center justify-center rounded-xl mb-4">
              <Clock className="text-yellow-700" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Working Hours</h3>
            <p className="text-gray-600 mt-1">Mon - Sun: 9:00 AM - 8:00 PM</p>
          </div>

        </div>
      </section>

      {/* 🔶 CONTACT FORM + GOOGLE MAP */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Send Us a Message</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg outline-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg outline-blue-600"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg outline-blue-600"
            />

            <textarea
              placeholder="Write your message here..."
              rows={5}
              className="w-full p-3 border rounded-lg outline-blue-600"
            ></textarea>

            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold shadow-md">
              Submit
            </button>
          </form>
        </div>

        {/* GOOGLE MAP */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full min-h-[420px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30271.611048315744!2d85.809!3d20.268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909cf18c9fb2b%3A0x2e559ebffb5f3e30!2sBhubaneswar!5e0!3m2!1sen!2sin!4v1710000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>
    </div>
  );
}
