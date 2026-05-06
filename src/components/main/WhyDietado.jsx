import React from "react";
import { motion } from "framer-motion";
import BgLogo from "../../assets/icons/dietado3.png";

function WhyDietado() {
    return (
        <section className="relative overflow-hidden bg-[#f5f3ef] py-28 px-6 md:px-12 lg:px-24" id="why-dietado">

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

                <img
                    src={BgLogo}
                    alt="Background Logo"
                    className="w-[900px] md:w-[1100px] object-contain opacity-[0.1] select-none"
                />

            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-[#E61E25] rounded-[40px] p-10 shadow-xl"
                    >
                        <h2 className="text-[#F7E7B6] text-5xl md:text-6xl font-black leading-none mb-5">
                            Why Dietado..?
                        </h2>

                        <p className="text-[#F7E7B6] text-lg md:text-xl leading-relaxed max-w-2xl">
                            Because taste and health should go together.
                            <br />
                            We make what you love... better.
                            <br />
                            Dietado — for the Fit Foodie.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-[#E61E25] rounded-[40px] p-10 shadow-xl lg:mt-16"
                    >
                        <h2 className="text-[#F7E7B6] text-5xl md:text-6xl font-black leading-[0.9] mb-6">
                            Our
                            <br />
                            Philosophy
                        </h2>

                        <p className="text-[#F7E7B6] text-lg leading-relaxed">
                            We believe eating well should feel easy.
                            Simple, tasty, and balanced.
                            <br />
                            No pressure. No confusion.
                            <br />
                            Just food made with care to suit your everyday routine.
                            So every meal feels right both in taste and in how it makes you feel.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 mt-1">

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-[#F4D300] rounded-[40px] p-10 shadow-xl">

                            <h2 className="text-[#E61E25] text-5xl md:text-6xl font-black leading-none mb-5">
                                Who Is Dietado For...?
                            </h2>

                            <p className="text-[#7A1A16] text-lg md:text-xl leading-relaxed max-w-3xl">
                                Designed for modern lifestyles.
                                <br />
                                For busy people, young professionals, and caring parents.
                                <br />
                                Good food, made simple — without second thoughts.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default WhyDietado;