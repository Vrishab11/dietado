import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whySection = document.getElementById("why-dietado");

      if (!whySection) return;

      const rect = whySection.getBoundingClientRect();

      setShow(rect.top <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>

      {show && (
        <motion.a
          href="https://wa.me/918075870401"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 80 }}
          transition={{ duration: 0.35 }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            fixed bottom-6 right-6 z-[100]
            w-16 h-16 rounded-full
            bg-[#25D366]
            shadow-2xl
            flex items-center justify-center
          "
        >

          <FaWhatsapp className="text-white text-4xl" />

          {/* Pulse Ring */}
          <span
            className="
              absolute inset-0 rounded-full
              animate-ping
              bg-[#25D366]/40
            "
          />

        </motion.a>
      )}

    </AnimatePresence>
  );
}

export default WhatsAppFloat;