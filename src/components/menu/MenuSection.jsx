import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "../../context/CartContext";

import { categories, MENU_DATA } from "../../data/menuData";


const fetchMenuByCategory = async (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MENU_DATA[category] || []);
    }, 300);
  });
};

function MenuSection() {
  const defaultCategory = categories[0].id;

  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [menuItems, setMenuItems] = useState(MENU_DATA[defaultCategory]);

  const handleCategoryClick = async (categoryId) => {
    setActiveCategory(categoryId);

    const data = await fetchMenuByCategory(categoryId);

    setMenuItems(data);
  };

  // const handleAddToCart = (item) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find(
  //       (cartItem) => cartItem.id === item.id
  //     );

  //     if (existingItem) {
  //       return prevCart.map((cartItem) =>
  //         cartItem.id === item.id
  //           ? {
  //             ...cartItem,
  //             quantity: cartItem.quantity + 1,
  //           }
  //           : cartItem
  //       );
  //     }

  //     return [
  //       ...prevCart,
  //       {
  //         ...item,
  //         quantity: 1,
  //       },
  //     ];
  //   });
  // };
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <section className="relative overflow-hidden bg-[#ECE8B6] py-8 px-6 md:px-12 lg:px-24" id="menu">

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex justify-center mb-16">
          <div className="bg-[#F4D300] px-24 py-4 rounded-[24px]">
            <h2 className="text-[#E61E25] text-5xl font-black uppercase">
              Menu
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-7 mb-20">

          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.96 }}
                whileHover={{ y: -3 }}
                onClick={() => handleCategoryClick(category.id)}
                className="flex flex-col items-center"
              >

                <motion.div
                  animate={{
                    borderColor: isActive
                      ? "#E61E25"
                      : "transparent",
                    scale: isActive ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-24 h-24 rounded-full border-[4px] overflow-hidden bg-white shadow-md flex items-center justify-center"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div
                  className="mt-3 px-5 py-1.5 rounded-full bg-[#F4D300] text-[#E61E25] text-sm font-black uppercase whitespace-nowrap tracking-wide"
                >
                  {category.name}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="activeLine"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 55, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="h-1 bg-[#E61E25] rounded-full mt-2"
                    />
                  )}
                </AnimatePresence>

              </motion.button>
            );
          })}

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  bg-white rounded-[32px]
                  p-5 shadow-xl
                  overflow-hidden relative
                  cursor-pointer
                "
                onClick={() => navigate(`/Details/${item.id}`)}
              >

                <div className="flex items-center justify-between gap-5">

                  <div className="flex flex-col justify-between h-full">

                    <div>
                      <h3 className="text-[#E61E25] text-2xl font-black leading-[0.95] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-[#E61E25] font-bold text-lg mb-4">
                        ₹ {item.price}
                      </p>

                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item);
                        }}
                        className="flex items-center gap-2 bg-[#E61E25] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg"
                      >
                        <span className="text-lg leading-none">+</span>
                        Add To Cart
                      </motion.button>
                    </div>

                    {/* <div className="mt-6 w-14 h-24 rounded-lg bg-[#F4D300]" /> */}
                  </div>

                  <div className="relative min-w-[180px] h-[180px] flex items-center justify-center">

                    <div className="absolute w-[180px] h-[180px] rounded-full bg-[#F4D300]" />

                    <motion.img
                      whileHover={{
                        scale: 1.1,
                        rotate: 3,
                        y: -10,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      src={item.image}
                      alt={item.title}
                      className="
                        relative z-10
                        w-[180px]
                        object-contain
                        drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]
                        transition-all duration-300
                        hover:brightness-110
                        border-2 border-transparent rounded-full
                      "
                    />
                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}

export default MenuSection;