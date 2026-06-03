import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FaTrashAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { MENU_DATA } from "../data/menuData";
import { useCart } from "../context/CartContext";

function ItemDetailsPage() {
  const { id } = useParams();

  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const allMenuItems = Object.values(MENU_DATA).flat();

  const product = allMenuItems.find(
    (item) => item.id === Number(id)
  );

  const cartItem = cart.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="min-h-screen bg-[#ECE8B6] flex items-center justify-center px-6">
        <h1 className="text-5xl font-black text-[#E61E25]">
          Product Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#ECE8B6] py-32 px-6 md:px-12 lg:px-24 overflow-hidden relative">

      <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full bg-[#F4D300]/30 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >

            {/* <div className="absolute w-[520px] h-[520px] rounded-full bg-[#F4D300]" /> */}

            <motion.img
              whileHover={{
                scale: 1.04,
                rotate: 2,
              }}
              src={product.image}
              alt={product.title}
              className="
                relative z-10
                w-[800px]
                object-contain
                drop-shadow-2xl
                border-2 border-transparent rounded-full
                borderShadow-[0_20px_35px_rgba(0,0,0,0.25)]
                transition-all duration-50 hover:brightness-110
              "
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-block mb-5 px-5 py-2 rounded-full bg-[#F4D300] text-[#E61E25] font-black uppercase tracking-wide text-sm">
              {product?.subcategory || product.category}
            </div>

            <h1 className="text-[#E61E25] text-3xl md:text-5xl font-black leading-[0.9] mb-6">
              {product.title}
            </h1>

            <p className="text-[#7A0D12] text-lg leading-relaxed max-w-2xl mb-8">
              {product.description ||
                "Delicious healthy food crafted with premium ingredients and balanced nutrition for your lifestyle."}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">

              <div className="bg-white rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-sm text-[#7A0D12]/70 font-semibold uppercase">
                  Calories
                </p>

                <h3 className="text-[#E61E25] text-xl font-black mt-1">
                  {product.calories || "420 kcal"}
                </h3>
              </div>

              <div className="bg-white rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-sm text-[#7A0D12]/70 font-semibold uppercase">
                  Protein
                </p>

                <h3 className="text-[#E61E25] text-xl font-black mt-1">
                  {product.protein || "22g Protein"}
                </h3>
              </div>

            </div>

            <div className="mb-10">
              <h2 className="text-[#E61E25] text-4xl font-black">
               ₹ {product.price}
              </h2>
            </div>

            {!cartItem ? (

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => addToCart(product)}
                className="
                  bg-[#E61E25]
                  text-white
                  px-8 py-4
                  rounded-full
                  text-lg font-black
                  uppercase tracking-wide
                  shadow-xl
                "
              >
                Add To Cart
              </motion.button>

            ) : (

              <div className="flex flex-wrap items-center gap-5">

                <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden border-2 border-[#E61E25]">

                  <button
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                    className="
                      w-14 h-14
                      flex items-center justify-center
                      text-[#E61E25]
                      hover:bg-[#F4D300]/30
                      transition
                    "
                  >
                    <FaMinus />
                  </button>

                  <div className="w-16 flex items-center justify-center text-[#E61E25] font-black text-xl">
                    {cartItem.quantity}
                  </div>

                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                    className="
                      w-14 h-14
                      flex items-center justify-center
                      text-[#E61E25]
                      hover:bg-[#F4D300]/30
                      transition
                    "
                  >
                    <FaPlus />
                  </button>

                </div>

                <motion.button
                  whileTap={{ scale: 0.92 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                  className="
                    w-14 h-14 rounded-full
                    bg-[#7A0D12]
                    text-white
                    flex items-center justify-center
                    shadow-xl
                  "
                >
                  <FaTrashAlt className="text-lg" />
                </motion.button>

              </div>

            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default ItemDetailsPage;