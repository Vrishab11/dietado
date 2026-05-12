import React from "react";
import { motion } from "framer-motion";

import HalfBowl from "../../assets/images/vvvvv-02.png";
import FoodSet from "../../assets/images/vvvvv-01.png";
import Badge from "../../assets/icons/DO-01.png";

function Hero() {
  return (
    <section
      className="
        bg-[#E52F2B]
        text-white
        pt-32 md:pt-36
        pb-16 md:pb-20
        px-4 sm:px-6 md:px-12 lg:px-20
        min-h-screen
        overflow-hidden
        relative
      "
      id="home"
    >

      {/* HERO CONTENT */}
      <div
        className="
          max-w-[1900px]
          mx-auto
          w-full
          relative
          flex flex-col
          justify-center
          items-center
        "
      >

        {/* LEFT BOWL */}
        <motion.div
          initial={{
            x: -120,
            opacity: 0,
            rotate: -10,
          }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            hidden lg:block
            absolute
            left-[-18%]
            top-[0%]
            z-0
          "
        >

          <img
            src={HalfBowl}
            alt="Cropped Fruit Bowl"
            className="
              w-[420px] xl:w-[500px]
              object-contain
            "
          />

        </motion.div>

        {/* CENTER TEXT */}
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
            relative z-10
            text-center
            mt-10 md:mt-16
          "
        >

          <h1
            className="
              font-black
              leading-[0.85]
              tracking-tighter
              uppercase
              whitespace-nowrap

              text-[64px]
              sm:text-[88px]
              md:text-[120px]
              lg:text-[150px]
            "
          >

            <span className="text-[#71100d] opacity-90 block">
              Yummy
            </span>

            <span className="text-[#f5e8b7] block">
              Tasty
            </span>

            <span className="text-[#ebc640] block">
              Healthy
            </span>

          </h1>

        </motion.div>

        {/* RIGHT FOOD IMAGE */}
        <motion.div
          initial={{
            x: 120,
            opacity: 0,
            rotate: 8,
          }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            relative
            mt-4 md:mt-6 lg:mt-0
            lg:absolute
            lg:right-[3%]
            lg:top-1/2
            lg:-translate-y-[55%]
            z-20
          "
        >

          <img
            src={FoodSet}
            alt="Grouped Healthy Food Bowls"
            className="
              w-[250px]
              sm:w-[320px]
              md:w-[380px]
              lg:w-[420px]
              object-contain
            "
          />

          {/* BADGE */}
          <div
            className="
              absolute
              bottom-[-30px]
              right-[10px]

              sm:bottom-[-40px]
              sm:right-[20px]

              md:bottom-[-50px]
              md:right-[40px]

              lg:bottom-[-90px]
              lg:right-[90px]
            "
          >

            <img
              src={Badge}
              alt="Badge"
              className="
                w-14 sm:w-16 md:w-20
                object-contain
              "
            />

          </div>

        </motion.div>

      </div>

      {/* BOTTOM SECTION */}
      <div
        className="
          max-w-[1900px]
          mx-auto
          mt-16 md:mt-24 lg:mt-10

          grid
          grid-cols-1
          lg:grid-cols-[1.9fr_auto]

          gap-10 lg:gap-16
          items-end

          px-0 md:px-10 lg:px-20
        "
      >

        {/* DESCRIPTION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
            flex
            gap-3 md:gap-4
            items-start
            self-end
          "
        >

          <span
            className="
              text-[#ebc640]
              font-bold
              rotate-180
              inline-block

              text-5xl md:text-7xl
              leading-none
            "
          >
            “
          </span>

          <p
            className="
              text-[#f4d24f]
              leading-relaxed

              text-[15px]
              sm:text-[16px]
              md:text-[18px]

              max-w-4xl
            "
          >

            Yummy. Tasty. Healthy. Without Guilt.
            <br />

            Dietado is a better way to enjoy the food
            you love. Most comfort foods taste great
            but aren't always healthy while "healthy"
            food often feels boring.

            <br />
            <br />

            So we created something different.
            Delicious comfort food made with better
            ingredients, balanced portions, and
            mindful cooking.

            <br />
            <br />

            So you enjoy every bite and feel good
            after.

          </p>

          <span
            className="
              text-[#ebc640]
              font-bold
              inline-block

              text-5xl md:text-7xl
              leading-none
            "
          >
            ”
          </span>

        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          className="
            flex flex-col
            items-center
            lg:items-end
            gap-3
          "
        >

          {/* ORDER BUTTON */}
          <button
            onClick={() => {
              const menuSection =
                document.getElementById("menu");

              if (menuSection) {
                menuSection.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="
              w-full sm:w-[260px]

              bg-transparent
              text-white
              font-bold

              py-3 px-8

              rounded-full
              border-2 border-white

              hover:bg-white/10
              active:scale-95

              transition duration-300

              uppercase
              tracking-wider

              text-sm md:text-base
            "
          >
            Order Now
          </button>

          {/* SUBSCRIPTION BUTTON */}
          <button
            className="
              w-full sm:w-[260px]

              bg-white
              text-[#E52F2B]
              font-extrabold

              py-3 px-8

              rounded-full

              hover:bg-gray-100
              active:scale-95

              transition duration-300

              uppercase
              tracking-wider

              text-sm md:text-base
            "
          >
            Subscription Plan
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;