import React from 'react';
import { motion } from 'framer-motion';
import HalfBowl from '../../assets/images/vvvvv-02.png'
import FoodSet from '../../assets/images/vvvvv-01.png'
import Badge from '../../assets/icons/DO-01.png'

function Hero() {
  return (
    <section className="bg-[#E52F2B] text-white pt-36 pb-20 px-6 md:px-12 lg:px-20 min-h-screen flex flex-col justify-between" id="home">

      <div className="max-w-[1900px] mx-auto w-full flex flex-row items-center relative flex-grow">

        <motion.div
          initial={{ x: -120, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-[-25%] top-[-70px] w-auto h-auto"
        >
          <img
            src={HalfBowl}
            alt="Cropped Fruit Bowl"
            className="w-[500px] object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute left-[24%] top-1/2 transform -translate-y-1/2 w-[40%] text-center z-10"
        >
          <h1 className="text-8xl md:text-8xl lg:text-[140px] font-black leading-[0.85] tracking-tighter uppercase whitespace-nowrap">
            <span className="text-[#71100d] opacity-90 block">Yummy</span>
            <span className="text-[#f5e8b7] block">Tasty</span>
            <span className='text-[#ebc640] block'>Healthy</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0, rotate: 8 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute right-[5%] top-1/2 transform -translate-y-[60%] w-auto z-20"
        >
          <img
            src={FoodSet}
            alt="Grouped Healthy Food Bowls"
            className="w-[400px] object-contain drop-shadow-none shadow-none"
          />

          <div className="absolute bottom-[-100px] right-[100px] w-auto h-auto">
            <img
              src={Badge}
              alt="Yummy Tasty Healthy Badge"
              className="w-20 object-contain"
            />
          </div>
        </motion.div>

      </div>

      <div className="max-w-[1900px] mx-auto w-full grid grid-cols-[1.9fr_auto] gap-16 items-end px-20 mt-12">

        <div className="flex gap-4 items-start self-end translate-y-6">

          <span className="text-[#ebc640] text-7xl font-bold leading-none mt-[-10px] rotate-180 inline-block">
            “
          </span>

          <p className="text-[18px] text-[#f4d24f] leading-relaxed max-w-7xl w-full">
            Yummy. Tasty. Healthy. Without Guilt.<br />
            Dietado is a better way to enjoy the food you love. Most comfort foods taste great but aren't always healthy while "healthy" food often feels boring. So we created something different.<br />
            Delicious comfort food made with better ingredients, balanced portions, and mindful cooking.<br />
            So you enjoy every bite and feel good after.
          </p>

          <span className="text-[#ebc640] text-7xl font-bold leading-none mt-[-10px] inline-block">
            ”
          </span>

        </div>

        <div className="flex flex-col items-center gap-2 justify-self-end">
          <button
            onClick={() => {
              const menuSection = document.getElementById("menu");

              if (menuSection) {
                menuSection.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="w-[250px] bg-transparent text-white font-bold py-2.5 px-8 rounded-full border-2 border-white hover:bg-white/10 active:scale-95 transition duration-300 uppercase tracking-wider text-sm"
          >
            ORDER NOW
          </button>
          <button className="w-[250px] bg-white text-[#E52F2B] font-extrabold py-2.5 px-8 rounded-full hover:bg-gray-100 active:scale-95 transition duration-300 uppercase tracking-wider text-sm">
            SUBSCRIPTION PLAN
          </button>
        </div>
      </div>

    </section >
  );
}

export default Hero;