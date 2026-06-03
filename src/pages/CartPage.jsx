import React from "react";
import { motion } from "framer-motion";
import {
    FaTrashAlt,
    FaMinus,
    FaPlus,
    FaWhatsapp,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function CartPage() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const totalAmount = cart.reduce((total, item) => {
        return total + Number(item.price) * item.quantity;
    }, 0);

    const handlePlaceOrder = () => {
        if (cart.length === 0) return;

        const orderLines = cart.map(
            (item, index) =>
                `${index + 1}. ${item.title}
                Qty: ${item.quantity}
                Price: ${item.price}`
        );

        const message = `
NEW DIETADO ORDER

${orderLines.join("\n")}

----------------------------

Total: ₹${totalAmount}

Thank you.
`;

        const encodedMessage =
            encodeURIComponent(message);

        const phoneNumber = "919895671179";

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            "_blank"
        );
    };

    if (cart.length === 0) {
        return (
            <section className="min-h-screen bg-[#ECE8B6] flex items-center justify-center px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >

                    <h1 className="text-[#E61E25] text-6xl font-black mb-4">
                        Your Cart Is Empty
                    </h1>

                    <p className="text-[#7A0D12] text-lg">
                        Add some delicious meals first.
                    </p>

                </motion.div>

            </section>
        );
    }

    return (
        <section className="min-h-screen bg-[#ECE8B6] py-32 px-6 md:px-12 lg:px-24 overflow-hidden relative">

            <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#F4D300]/30 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >

                    <h1 className="text-[#E61E25] text-6xl md:text-7xl font-black">
                        Your Cart
                    </h1>

                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_420px] gap-12">

                    <div className="space-y-8">

                        {cart.map((item, index) => (

                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                className="
                  bg-white rounded-[32px]
                  p-6 shadow-xl
                  flex flex-col md:flex-row
                  items-center justify-between
                  gap-8
                "
                            >

                                <div className="flex items-center gap-6">

                                    <div className="relative w-[140px] h-[140px] flex items-center justify-center">

                                        <div className="absolute w-[140px] h-[140px] rounded-full bg-[#F4D300]" />

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="
                        relative z-10
                        w-[130px]
                        object-contain
                        drop-shadow-xl
                      "
                                        />

                                    </div>

                                    <div>

                                        <h2 className="text-[#E61E25] text-3xl font-black leading-[0.95] mb-3">
                                            {item.title}
                                        </h2>

                                        <p className="text-[#7A0D12] text-lg font-bold">
                                            ₹ {item.price}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-5">

                                    <div className="flex items-center bg-[#ECE8B6] rounded-full overflow-hidden border-2 border-[#E61E25]">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                            className="
                        w-12 h-12
                        flex items-center justify-center
                        text-[#E61E25]
                        hover:bg-[#F4D300]/40
                        transition
                      "
                                        >
                                            <FaMinus />
                                        </button>

                                        <div className="w-14 text-center text-[#E61E25] font-black text-xl">
                                            {item.quantity}
                                        </div>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                            className="
                        w-12 h-12
                        flex items-center justify-center
                        text-[#E61E25]
                        hover:bg-[#F4D300]/40
                        transition
                      "
                                        >
                                            <FaPlus />
                                        </button>

                                    </div>

                                    <button
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                        className="
                      w-12 h-12 rounded-full
                      bg-[#7A0D12]
                      text-white
                      flex items-center justify-center
                    "
                                    >
                                        <FaTrashAlt />
                                    </button>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="
              bg-white rounded-[36px]
              p-8 shadow-2xl
              h-fit sticky top-32
            "
                    >

                        <h2 className="text-[#E61E25] text-4xl font-black mb-8">
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-8">

                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between"
                                >

                                    <div>
                                        <p className="text-[#7A0D12] font-bold">
                                            {item.title}
                                        </p>

                                        <span className="text-sm text-[#7A0D12]/70">
                                            Qty: {item.quantity}
                                        </span>
                                    </div>

                                    <p className="font-black text-[#E61E25]">
                                        ₹{item.price * item.quantity}
                                    </p>

                                </div>
                            ))}

                        </div>

                        <div className="border-t border-[#E61E25]/10 pt-6 mb-8">

                            <div className="flex items-center justify-between">

                                <h3 className="text-[#7A0D12] text-xl font-bold">
                                    Total
                                </h3>

                                <h2 className="text-[#E61E25] text-3xl font-black">
                                    ₹{totalAmount}
                                </h2>

                            </div>

                        </div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={handlePlaceOrder}
                            className="
                w-full bg-[#25D366]
                text-white
                py-5 rounded-full
                text-lg font-black
                uppercase tracking-wide
                shadow-xl
                flex items-center justify-center gap-3
              "
                        >

                            <FaWhatsapp className="text-2xl" />

                            Place Order

                        </motion.button>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default CartPage;