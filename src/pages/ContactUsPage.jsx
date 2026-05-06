import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendMessage = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const emailSubject = encodeURIComponent(
      `New Contact Message from ${name}`
    );

    const emailBody = encodeURIComponent(`
Name: ${name}

Email: ${email}

Message:
${message}
    `);

    window.open(
      `mailto:dietadoofficial@gmail.com?subject=${emailSubject}&body=${emailBody}`
    );

    const whatsappMessage = encodeURIComponent(`
NEW CONTACT MESSAGE

Name: ${name}
Email: ${email}
Message:
${message}
    `);

    const phoneNumber = "918075870401";

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

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
            Contact Us
          </h1>

          <p className="text-[#F7E7B6] text-lg">
            Reach out, Anytime.
          </p>

        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-white rounded-[36px]
              p-10 shadow-xl
            "
          >

            <h2 className="text-[#1E1E1E] text-2xl md:text-3xl font-semibold leading-relaxed mb-10">
              If you’re here, you’re already thinking about eating better.
              <br />
              We’ll make the rest simple.
            </h2>

            <motion.div
              whileHover={{ y: -3 }}
              className="
                bg-[#F2E1E1]
                rounded-[28px]
                p-6 mb-6
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
                <FaPhoneAlt className="text-[#E52F2B] text-2xl" />
              </div>

              <div>
                <p className="text-[#444] text-base">
                  Phone
                </p>

                <h3 className="text-[#1E1E1E] text-2xl font-bold">
                  +91 8075 870 401
                </h3>
              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="
                bg-[#F2E1E1]
                rounded-[28px]
                p-6 mb-6
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
                <MdEmail className="text-[#E52F2B] text-3xl" />
              </div>

              <div>
                <p className="text-[#444] text-base">
                  Email
                </p>

                <h3 className="text-[#1E1E1E] text-xl md:text-2xl font-bold break-all">
                  dietadoofficial@gmail.com
                </h3>
              </div>

            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="
                bg-[#E9DDB7]
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
                <FaInstagram className="text-[#E52F2B] text-3xl" />
              </div>

              <div>
                <p className="text-[#E52F2B] text-base">
                  Instagram
                </p>

                <h3 className="text-[#E52F2B] text-2xl font-bold">
                  @diet.ado
                </h3>
              </div>

            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-white rounded-[36px]
              p-10 shadow-xl
            "
          >

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="
                  w-full h-20
                  rounded-[22px]
                  border border-[#D9D9D9]
                  px-6 text-lg
                  outline-none
                  focus:border-[#E52F2B]
                  transition
                "
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="
                  w-full h-20
                  rounded-[22px]
                  border border-[#D9D9D9]
                  px-6 text-lg
                  outline-none
                  focus:border-[#E52F2B]
                  transition
                "
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={7}
                className="
                  w-full
                  rounded-[22px]
                  border border-[#D9D9D9]
                  p-6 text-lg
                  outline-none
                  resize-none
                  focus:border-[#E52F2B]
                  transition
                "
              />

              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.01 }}
                onClick={handleSendMessage}
                className="
                  w-full h-20
                  rounded-full
                  bg-[#E52F2B]
                  text-white
                  text-xl font-black
                  shadow-xl
                "
              >
                Send Message
              </motion.button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ContactUs;