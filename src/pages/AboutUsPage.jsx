import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import DLogo from "../assets/icons/dietado2.png"

function AboutUs() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F4F4F4] overflow-hidden">

      <div className="relative bg-[#E52F2B] pt-40 pb-28 px-6 overflow-hidden">

        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#F4D300]/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >

          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tight mb-5">
            About Us
          </h1>

          <p className="text-[#F7E7B6] text-lg md:text-xl">
            This didn’t start as a business. It started as a problem.
          </p>

        </motion.div>

      </div>

      <section className="py-24 px-6 md:px-12 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            max-w-5xl mx-auto
            bg-white
            rounded-[42px]
            shadow-xl
            p-10 md:p-16
          "
        >

          <h2 className="text-3xl md:text-5xl font-bold text-[#1E1E1E] leading-snug mb-10">
            Everyday food slowly became{" "}
            <span className="text-[#E52F2B]">
              confusing.
            </span>
          </h2>

          <div className="space-y-8 text-[#333] text-lg md:text-2xl leading-relaxed">

            <p>
              The food we love started feeling heavy,
              repetitive, and sometimes a little guilty.
              At the same time,
              <span className="text-[#E52F2B] font-semibold">
                {" "}
                “healthy food”
              </span>{" "}
              became something else entirely.
              Over-complicated. Restrictive. Hard to stick to.
            </p>

            <p>
              And somewhere in between, people were just
              trying to eat normally.
              <span className="text-[#E52F2B] font-semibold">
                {" "}
                That’s where Dietado began.
              </span>
            </p>

            <p>
              We didn’t want to change what people love.
              <span className="text-[#E52F2B] font-semibold">
                {" "}
                We wanted to change how it’s made.
              </span>
            </p>

            <p>
              Because the truth is you don’t need to give
              up fried rice, sandwiches, or your everyday
              favorites.
              <span className="font-semibold">
                {" "}
                You just need a better version of them.
              </span>
            </p>

            <p>
              At Dietado, every meal is prepared with
              intention, better ingredients, balanced
              portions, and cleaner cooking methods.
            </p>

          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mt-16 text-center
              bg-[#F7F3E4]
              rounded-[32px]
              py-10 px-6
            "
          >

            <h3 className="text-3xl md:text-5xl italic text-[#1E1E1E] leading-relaxed font-light">
              Not to make it{" "}
              <span className="font-black">
                “diet food.”
              </span>
              <br />
              But to make it{" "}
              <span className="font-black">
                feel right.
              </span>
            </h3>

          </motion.div>

          <div className="mt-14 text-center">

            <h3 className="text-2xl md:text-4xl text-[#1E1E1E] font-medium leading-relaxed">
              Lighter. Cleaner. Easier on your body.
            </h3>

            <h3 className="text-2xl md:text-4xl text-[#E52F2B] font-semibold mt-3">
              Without losing what made you love it in the first place.
            </h3>

          </div>

        </motion.div>

      </section>

      <section className="pb-24 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                lg:col-span-7
                bg-[#E52F2B]
                rounded-[40px]
                p-10 md:p-12
                shadow-xl
                flex flex-col justify-between
              "
            >

              <div>

                <h2 className="text-[#F7E7B6] text-4xl md:text-5xl font-black mb-6">
                  Why Dietado?
                </h2>

                <p className="text-white text-lg md:text-2xl leading-relaxed">
                  Because enjoying food and taking care of your health should go together.
                  Instead of asking you to avoid what you love, we focus on making it better.
                  Same taste. Better approach. Guilt-free comfort food.
                </p>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                lg:col-span-5
                bg-[#E52F2B]
                rounded-[40px]
                p-10 md:p-12
                shadow-xl
                flex flex-col justify-between
              "
            >

              <div>

                <h2 className="text-[#F7E7B6] text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Our
                  <br />
                  Philosophy
                </h2>

                <p className="text-white text-lg md:text-2xl leading-relaxed">
                  Food should fit into real life.
                  No strict rules. No complicated plans.
                  Just balanced meals made thoughtfully —
                  so what you eat feels as good as it tastes.
                </p>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                lg:col-span-7
                bg-[#EFE6C6]
                rounded-[40px]
                p-10 md:p-12
                shadow-xl
              "
            >

              <h2 className="text-[#E52F2B] text-4xl md:text-5xl font-black mb-6">
                Who is it for?
              </h2>

              <p className="text-[#E52F2B] text-lg md:text-2xl leading-relaxed">
                Busy professionals. Everyday food lovers.
                Families. Anyone who wants convenience
                without compromising health.
                Real food for real life.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                lg:col-span-5
                bg-[#E52F2B]
                rounded-[40px]
                shadow-xl
                relative overflow-hidden
                min-h-[280px]
              "
            >

              <div className="absolute inset-0 flex items-center justify-center">

                <img src={DLogo} alt="DIETADO"/>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <section className="bg-[#E52F2B] py-24 px-6 overflow-hidden relative">

        <div className="absolute left-[-100px] bottom-[-100px] w-[320px] h-[320px] rounded-full bg-[#F4D300]/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >

          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight mb-10">
            Ready to eat better without
            giving up what you love?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">

            <button
              onClick={() => {
                navigate("/");

                setTimeout(() => {
                  const menuSection =
                    document.getElementById("menu");

                  if (menuSection) {
                    menuSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }, 100);
              }}
              className="
                bg-white text-[#E52F2B]
                px-10 py-4
                rounded-full
                text-lg md:text-xl
                font-black
                uppercase
                hover:scale-105
                transition duration-300
              "
            >
              Order Now
            </button>

            <button
              className="
                border-2 border-white
                text-white
                px-10 py-4
                rounded-full
                text-lg md:text-xl
                font-black
                uppercase
                hover:bg-white/10
                transition duration-300
              "
            >
              Subscription Plan
            </button>

          </div>

        </motion.div>

      </section>

    </section>
  );
}

export default AboutUs;