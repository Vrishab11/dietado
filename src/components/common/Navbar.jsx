import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/icons/dietado1.png";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import { useCart } from "../../context/CartContext";

function Navbar() {

  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#E52F2B] rounded-2xl px-8 py-4 shadow-xl">
          <div className="flex items-center justify-between">

            <div className="flex items-center">
              <img
                src={logo}
                alt="DIETADO"
                className="h-12 w-auto object-contain cursor-pointer"
                onClick={() => {
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
                }}
              />
            </div>

            <nav className="hidden md:flex items-center gap-12 text-white font-semibold uppercase tracking-wide text-sm">
              <a
                href="/#menu"
                onClick={(e) => {
                  e.preventDefault();

                  if (location.pathname === "/") {
                    const menuSection = document.getElementById("menu");

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
                }}
                className="hover:text-yellow-300 transition duration-300"
              >
                Menu
              </a>
              <a
                href="/AboutUs"
                className="hover:text-yellow-300 transition duration-300"
              >
                About Us
              </a>

              <a
                href="/FindUs"
                className="hover:text-yellow-300 transition duration-300"
              >
                Find Us
              </a>

              <a
                href="/contactus"
                className="hover:text-yellow-300 transition duration-300"
              >
                Contact Us
              </a>
            </nav>

            <div className="flex items-center gap-5 text-white text-lg">
              {/* <button className="hover:text-yellow-300 transition">
                <FaUser />
              </button> */}

              <button
                className="relative hover:text-yellow-300 transition cursor-pointer"
                onClick={() => navigate('/Cart')}
              >
                <FaShoppingCart />

                {
                  cart.length > 0 && (<span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {
                      cart.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )
                    }
                  </span>)
                }
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;