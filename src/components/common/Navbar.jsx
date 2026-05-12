import React, { useState } from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import logo from "../../assets/icons/dietado1.png";

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

import { useCart } from "../../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  /* =========================
     MENU SCROLL
  ========================= */

  const handleMenuScroll = () => {
    setMobileMenuOpen(false);

    if (location.pathname === "/") {
      const menuSection =
        document.getElementById("menu");

      if (menuSection) {
        menuSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
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
    }
  };

  /* =========================
     GO HOME
  ========================= */

  const handleLogoClick = () => {
    setMobileMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <header className="fixed top-3 left-0 w-full z-50 px-3 md:px-6">

      <div className="max-w-7xl mx-auto">

        {/* NAVBAR */}
        <div
          className="
            bg-[#E52F2B]/95
            backdrop-blur-md
            rounded-2xl
            px-4 md:px-8
            py-3 md:py-4
            shadow-2xl
            border border-white/10
          "
        >

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center">

              <img
                src={logo}
                alt="DIETADO"
                className="
                  h-10 md:h-12
                  w-auto
                  object-contain
                  cursor-pointer
                "
                onClick={handleLogoClick}
              />

            </div>

            {/* DESKTOP NAV */}
            <nav
              className="
                hidden md:flex
                items-center gap-10
                text-white font-semibold
                uppercase tracking-wide
                text-sm
              "
            >

              <button
                onClick={handleMenuScroll}
                className="
                  hover:text-yellow-300
                  transition duration-300
                "
              >
                Menu
              </button>

              <button
                onClick={() => navigate("/AboutUs")}
                className="
                  hover:text-yellow-300
                  transition duration-300
                "
              >
                About Us
              </button>

              <button
                onClick={() => navigate("/FindUs")}
                className="
                  hover:text-yellow-300
                  transition duration-300
                "
              >
                Find Us
              </button>

              <button
                onClick={() => navigate("/contactus")}
                className="
                  hover:text-yellow-300
                  transition duration-300
                "
              >
                Contact Us
              </button>

            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* CART */}
              <button
                className="
                  relative
                  hover:text-yellow-300
                  transition
                  cursor-pointer
                  text-white text-lg
                "
                onClick={() => navigate("/Cart")}
              >

                <FaShoppingCart />

                {cart.length > 0 && (
                  <span
                    className="
                      absolute -top-2 -right-2
                      bg-yellow-400
                      text-black
                      text-[10px]
                      font-bold
                      rounded-full
                      h-5 w-5
                      flex items-center justify-center
                    "
                  >
                    {cart.reduce(
                      (total, item) =>
                        total + item.quantity,
                      0
                    )}
                  </span>
                )}

              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() =>
                  setMobileMenuOpen(
                    !mobileMenuOpen
                  )
                }
                className="
                  md:hidden
                  text-white
                  text-xl
                "
              >

                {mobileMenuOpen ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}

              </button>

            </div>

          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>

            {mobileMenuOpen && (

              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  md:hidden
                  overflow-hidden
                "
              >

                <div
                  className="
                    pt-6 pb-2
                    flex flex-col gap-5
                    text-white
                    font-semibold
                    uppercase
                    tracking-wide
                    text-sm
                  "
                >

                  <button
                    onClick={handleMenuScroll}
                    className="
                      text-left
                      hover:text-yellow-300
                      transition
                    "
                  >
                    Menu
                  </button>

                  <button
                    onClick={() => {
                      navigate("/AboutUs");
                      setMobileMenuOpen(false);
                    }}
                    className="
                      text-left
                      hover:text-yellow-300
                      transition
                    "
                  >
                    About Us
                  </button>

                  <button
                    onClick={() => {
                      navigate("/FindUs");
                      setMobileMenuOpen(false);
                    }}
                    className="
                      text-left
                      hover:text-yellow-300
                      transition
                    "
                  >
                    Find Us
                  </button>

                  <button
                    onClick={() => {
                      navigate("/contactus");
                      setMobileMenuOpen(false);
                    }}
                    className="
                      text-left
                      hover:text-yellow-300
                      transition
                    "
                  >
                    Contact Us
                  </button>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </header>
  );
}

export default Navbar;