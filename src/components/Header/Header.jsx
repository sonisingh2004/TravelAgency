import { Mail, Menu, Phone, Rocket, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Tour Packages",
    "Contact",
    
  ];

  return (
    <div>
      {/* Top Bar */}
      <div className=" bg-blue-600 text-white text-sm py-2 md:px-16">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Phone size={16} /> +91 91xxxx 44441
            </span>

            <span className="flex items-center gap-1 hidden md:inline-flex">
              <Mail size={16} /> travelsbbsr@gmail.com
            </span>
          </div>

          <span className="flex items-center gap-1 bg-blue-700 px-3 py-1 rounded-full text-xs">
            <Rocket size={14} /> Best Travel Agency in Odisha.
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className=" bg-white shadow md:px-16 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyn6gwCt67Cil4OqZiXSQgDyCGzfnh-0RAfg&s"
              alt="logo"
              className="h-16"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer font-medium text-gray-800 px-3 py-2 rounded-lg 
                  ${
                    active === item
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* ⭐ BOOK NOW button (Desktop) */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md font-semibold ml-4">
            Book Now
          </button>

          {/* Hamburger (Mobile Only) */}
          <button
            className="md:hidden block"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="md:hidden bg-white shadow-inner border-t border-gray-200 animate-slideDown">

            <ul className="flex flex-col gap-1 p-4">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setOpenMenu(false);
                  }}
                  className={`cursor-pointer px-3 py-2 rounded-md font-medium 
                    ${
                      active === item
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* ⭐ BOOK NOW button (Mobile) */}
            <div className="p-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Slide Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
