import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        src="./Video (2).mp4"
        className="w-full h-[100vh] object-cover rounded-xl"
        muted
        autoPlay
        loop
      ></video>

      {/* Right-Aligned Content Box */}
      <div className="absolute inset-0 flex items-center justify-end px-12">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-black/80 to-black/50 p-10 rounded-2xl text-white max-w-[600px] shadow-2xl border border-white/10"
        >
          <h1 className="text-5xl font-bold mb-4">
            🔋 Power Up with <span className="text-yellow-300">Next-Gen</span> Tech
          </h1>

          <p className="text-base text-yellow-100 mb-6">
            Smartphones, laptops, accessories & more — handpicked for innovation lovers.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 transition">
              Explore Products
            </button>
            <button className="border border-yellow-300 text-yellow-300 px-5 py-2 rounded-md hover:bg-yellow-300 hover:text-black transition">
              Contact Us
            </button>
          </div>

          {/* Location and Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lg">
              <CiLocationOn className="text-yellow-300 text-2xl" />
              <span>Pokhara, Nepal</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaPhoneAlt className="text-yellow-300 text-xl" />
              <span>9800000000, 9800000001</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
