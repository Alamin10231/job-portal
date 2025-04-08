import React from 'react';
import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/sidebanner/team1.jpg";
import team2 from "../../assets/sidebanner/team2.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-[600px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 px-6 md:px-12 lg:px-20">
        {/* Images Section */}
        <div className="relative flex-1 flex justify-center">
          <motion.img
            animate={{ y: [20, 50, 20] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={team1}
            className="w-40 sm:w-56 md:w-64 border-b-4 border-l-4 border-blue-400 rounded-t-3xl rounded-br-3xl drop-shadow-lg absolute left-10 top-5"
          />
          <motion.img
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={team2}
            className="w-40 sm:w-56 md:w-64 border-b-4 border-l-4 border-blue-400 rounded-t-3xl rounded-br-3xl drop-shadow-xl"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: easeOut }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            Latest Job For You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="py-4 sm:py-6 text-base sm:text-lg font-medium"
          >
            Explore thousands of job opportunities with all the information you need.
            Your future starts here!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn bg-blue-600 border-none px-6 py-3 text-white text-lg font-semibold rounded-full 
            hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
