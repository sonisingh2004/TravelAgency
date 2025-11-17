import { useEffect, useState } from "react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  const words = ["Puri", "Goa", "Himalayas", "Bhubaneswar", "Kerala"];
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  // Auto-typing rotating destinations
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Parallax Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden md:px-16">

      {/* 🔹 Background Parallax Slider */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop
          autoplay={{ delay: 1500 }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/27023262/pexels-photo-27023262.jpeg"
            />
          </SwiperSlide>
          <SwiperSlide>
            
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="/src/assets/heroSlider/slide4.jpg"
            />
          </SwiperSlide>

        </Swiper>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>


      {/* 🔹 Main Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="text-white max-w-xl animate-fadeInSlow mt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Explore <span className="text-orange-400">{words[index]}</span> <br />
            with Us
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Discover premium tour packages, custom trips, and unforgettable journeys across India.
          </p>

          <div className="mt-7 flex gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg shadow-yellow-500/30 transition-all">
              Book Now
            </button>

            <button className="border border-white/40 backdrop-blur-lg px-8 py-3 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all">
              View Packages
            </button>
          </div>
        </div>

        {/* 🔹 Right Glass Enquiry Form */}
        <div className="w-full lg:w-[380px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-7 animate-slideUp mt-6 lg:mt-0">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Enquiry</h2>

          <form className="space-y-4">
            <input className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 outline-none" placeholder="Your Name" />
            <input className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 outline-none" placeholder="Mobile Number" />
            <input className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:bg-white/30 outline-none" placeholder="Destination" />
            <input type="date" className="w-full p-3 rounded-lg bg-white/20 text-white focus:bg-white/30 outline-none" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-xl transition-all">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>


      {/* 🔹 Animations CSS */}
      <style>{`
      
        /* Fade + Slide Animations */
        @keyframes fadeInSlow {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 1.5s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 1.5s ease-out;
        }


        
      `}</style>
    </section>
    
  );
}
