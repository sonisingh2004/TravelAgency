export default function Footer() {
  return (
    <footer className="bg-[#040714] text-gray-300 py-12">

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyn6gwCt67Cil4OqZiXSQgDyCGzfnh-0RAfg&s" className="h-14" />
            <div>
              <h2 className="text-xl font-bold text-white">Odisha</h2>
              <p className="text-yellow-400 font-semibold -mt-1">
                TOURS & TRAVELS
              </p>
            </div>
          </div>

          <p className="text-gray-400">
            Premium travel agency offering customized tours, vehicle rentals,
            and travel assistance all over India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Tour Packages</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Tour Categories */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Top Tours</h3>
          <ul className="space-y-2">
            <li>Puri Tour</li>
            <li>Konark Tour</li>
            <li>Chilika Tour</li>
            <li>Daringbadi Tour</li>
            <li>Bhubaneswar Tour</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>📍 Bhubaneswar, Odisha</li>
            <li>📞 +91 XXXX 44441</li>
            <li>📧 travelsbbsr@gmail.com</li>
            <li>🕒 8 AM - 8 PM (Mon-Sun)</li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-10 text-gray-500 border-t border-gray-700 mt-10">
        © 2025 Tours & Travels. All Rights Reserved.
      </div>
    </footer>
  );
}
