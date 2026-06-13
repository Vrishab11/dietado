import React from "react";
import { motion } from "framer-motion";

import {
    FaMapMarkerAlt,
    FaTruck,
} from "react-icons/fa";

function FindUs() {
    return (
        <section className="min-h-screen bg-[#F3F3F3] overflow-hidden">

            <div className="bg-[#E52F2B] pt-40 pb-24 px-6 relative overflow-hidden">

                <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#F4D300]/10 blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-7xl mx-auto text-center relative z-10"
                >

                    <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tight mb-5">
                        Find Us
                    </h1>

                    <p className="text-[#F7E7B6] text-lg">
                        We’re closer than you think.
                    </p>

                </motion.div>

            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="
                            bg-white rounded-[36px]
                            p-10 shadow-xl
                            h-full flex flex-col justify-between
                            "
                    >

                        <h2 className="text-[#444] text-2xl md:text-3xl font-medium leading-relaxed mb-12">
                            Dietado is built to be part of your everyday routine,
                            not something you have to go out of your way for.
                        </h2>

                        <motion.div
                            whileHover={{ y: -3 }}
                            className="
                bg-[#F2E1E1]
                rounded-[28px]
                p-6 mb-10
                flex items-center gap-5
              "
                        >

                            <div
                                className="
                  w-16 h-16 rounded-full
                  bg-white shadow-lg
                  flex items-center justify-center
                "
                            >
                                <FaMapMarkerAlt className="text-[#E52F2B] text-2xl" />
                            </div>

                            <div>
                                <p className="text-[#555] text-base">
                                    Location
                                </p>

                                <h3 className="text-[#1E1E1E] text-2xl font-bold">
                                    Kakkanad, Kochi, Kerala
                                </h3>
                            </div>

                        </motion.div>

                        <p className="text-[#555] text-xl leading-relaxed mb-10">
                            Whether you’re stepping in, picking up, or ordering
                            from wherever you are, we’re made to fit into your
                            day, effortlessly.
                        </p>

                        <motion.div
                            whileHover={{ y: -3 }}
                            className="
                bg-[#EFE6C6]
                rounded-[28px]
                p-6
                flex items-center gap-5
              "
                        >

                            <div
                                className="
                  w-16 h-16 rounded-full
                  bg-white shadow-lg
                  flex items-center justify-center
                "
                            >
                                <FaTruck className="text-[#E52F2B] text-2xl" />
                            </div>

                            <div>
                                <p className="text-[#555] text-base">
                                    Available for
                                </p>

                                <h3 className="text-[#1E1E1E] text-2xl font-bold">
                                    Takeaway | Delivery
                                </h3>
                            </div>

                        </motion.div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative h-full min-h-[650px]"
                    >

                        <div className="
              absolute inset-0
              bg-[#F2E1E1]
              rounded-[36px]
              translate-x-4 translate-y-4
            " />

                        <div
                            className="
                                relative z-10
                                overflow-hidden
                                rounded-[36px]
                                shadow-2xl
                                border-4 border-white
                                h-full
                            "
                        >

                            <iframe
                                title="Dietado Location"
                                src="https://www.google.com/maps?q=10.0279936,76.34772&z=15&output=embed"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full min-h-[650px]"
                            />

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default FindUs;