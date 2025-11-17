import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1120] text-white pt-16 pb-8">

      {/* Top Contact Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">

        {/* Location */}
        <div className="bg-[#121829] border border-[#1f2945] rounded-2xl p-6 flex items-start gap-4">
          <div className="bg-blue-700/20 p-3 rounded-xl">
            <MapPin className="text-blue-400" size={26} />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Location</p>
            <p className="font-semibold leading-tight">
              Plot - 348, BJB Nagar<br />
              Lewis Road, Bhubaneswar - 751014
            </p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-[#121829] border border-[#1f2945] rounded-2xl p-6 flex items-start gap-4">
          <div className="bg-green-700/20 p-3 rounded-xl">
            <MessageCircle className="text-green-400" size={26} />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Whatsapp</p>
            <p className="font-semibold">+91 95832 44441</p>
          </div>
        </div>

        {/* Mail */}
        <div className="bg-[#121829] border border-[#1f2945] rounded-2xl p-6 flex items-start gap-4">
          <div className="bg-red-700/20 p-3 rounded-xl">
            <Mail className="text-red-400" size={26} />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Mail Us</p>
            <p className="font-semibold">
              jagannathtravelsbbsr@gmail.com
            </p>
          </div>
        </div>

        {/* Call */}
        <div className="bg-[#121829] border border-[#1f2945] rounded-2xl p-6 flex items-start gap-4">
          <div className="bg-purple-700/20 p-3 rounded-xl">
            <Phone className="text-purple-400" size={26} />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Call Us</p>
            <p className="font-semibold">+91 95832 44441</p>
          </div>
        </div>

      </div>

      {/* Footer Main Area */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://i.ibb.co/PGqkgK1/logo.png"
              alt="logo"
              className="h-14"
            />
            <div>
              <h2 className="text-xl font-bold">JAGANNATH</h2>
              <p className="text-yellow-400 font-semibold -mt-1">TOURS & TRAVELS</p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">
            Jagannath Tours & Travels Agency is a popular travel agency in Odisha 
            providing exceptional travel experiences with personalized service.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="bg-[#1d2438] p-3 rounded-xl cursor-pointer hover:bg-blue-600 transition">
              <Facebook size={20} />
            </div>
            <div className="bg-[#1d2438] p-3 rounded-xl cursor-pointer hover:bg-pink-600 transition">
              <Instagram size={20} />
            </div>
            <div className="bg-[#1d2438] p-3 rounded-xl cursor-pointer hover:bg-blue-700 transition">
              <Linkedin size={20} />
            </div>
            <div className="bg-[#1d2438] p-3 rounded-xl cursor-pointer hover:bg-red-600 transition">
              <Youtube size={20} />
            </div>
          </div>
        </div>

        {/* Top Tour Packages */}
        <div>
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-yellow-400">✈</span> TOP TOUR PACKAGES
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Puri Tour</li>
            <li>Konark Tour</li>
            <li>Chillika Tour</li>
            <li>Daringbadi Tour</li>
            <li>Bhitarkanika Tour</li>
            <li>Bhubaneswar Tour</li>
            <li>Similipal Tour</li>
            <li>Gopalpur Tour</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Tour Packages</li>
            <li>Gallery</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">IMPORTANT LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>© 2025 Jagannath Tour & Travels. All Rights Reserved.</p>

        <p className="mt-2">
          Design & Developed by 
          <span className="text-yellow-400 font-semibold"> ❤️ Web_Bocket</span>
        </p>
      </div>
    </footer>
  );
}
