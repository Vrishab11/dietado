import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import Logo from "../../assets/icons/dietado1.png";
import CLogo from "../../assets/icons/ADVERRA.png"

function Footer() {
  return (
    <footer className="bg-[#be322f] text-white relative overflow-hidden">

      <div className="bg-[#be322f] py-3 px-6 md:px-12 lg:px-10">

        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="flex items-center">
            <img
              src={Logo}
              alt="Dietado"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm md:text-base font-medium text-[#F7E7B6]">

            <div className="flex items-center gap-3">
              <MdEmail className="text-2xl" />
              <span>hello@dietado.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" />
              <span>+91 98765 43210</span>
            </div>

          </div>

          <div className="flex items-center gap-4">

            {[
              <FaInstagram />,
              <FaYoutube />,
              <FaFacebookF />,
              <FaWhatsapp />,
            ].map((icon, index) => (
              <button
                key={index}
                className="
                  w-11 h-11 rounded-full
                  border border-[#F7E7B6]
                  flex items-center justify-center
                  text-[#F7E7B6]
                  hover:bg-[#F7E7B6]
                  hover:text-[#ED1C24]
                  transition duration-300
                "
              >
                {icon}
              </button>
            ))}

          </div>

        </div>
      </div>

      <div className="relative py-3 px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h3 className="text-[#F4D300] text-2xl font-black uppercase mb-6">
              About
            </h3>

            <ul className="space-y-3 text-[#F7E7B6] text-base">
              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Contact Us
              </li>

              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Legal
              </li>

              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Tracking Tags
              </li>

              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Privacy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#F4D300] text-2xl font-black uppercase mb-6">
              Business
            </h3>

            <ul className="space-y-3 text-[#F7E7B6] text-base">
              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Franchising
              </li>

              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Responsibility
              </li>

              <li className="hover:text-[#F4D300] cursor-pointer transition">
                How Dietado Keeps Healthy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#F4D300] text-2xl font-black uppercase mb-6">
              Site Map
            </h3>

            <ul className="space-y-3 text-[#F7E7B6] text-base">
              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Store Locator
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#F4D300] text-2xl font-black uppercase mb-6">
              Nutrition
            </h3>

            <ul className="space-y-3 text-[#F7E7B6] text-base">
              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Full Nutrition Guide
              </li>

              <li className="hover:text-[#F4D300] cursor-pointer transition">
                Food Allergies & Sensitivities
              </li>
            </ul>
          </div>

        </div>

        {/* <div className="hidden lg:block absolute bottom-0 right-10 opacity-90">

          <div className="w-40 h-40 rounded-full bg-[#F4D300] flex items-center justify-center">

            <div className="text-[#7A0D12] text-6xl">
              🙂
            </div>

          </div>

        </div> */}

      </div>

      <div className="flex flex-row justify-center items-center gap-3">
        <div className="border-t border-white/10 py-2 text-center text-[#F7E7B6]/70 text-sm">
          © 2026 Dietado. All rights reserved.
        </div>
        <img className="w-4 h-4" src={CLogo} alt="ADVERA" />
      </div>

    </footer>
  );
}

export default Footer;