import { MainContext, MainProvider } from "../provider/MainProvider";
import { Menu } from "../components/Menu";
import { Cart } from "../components/Cart";

import { motion } from "framer-motion";
import "../css/MenuList.css";
import "../css/ItemBox.css";
import "../css/Cart.css";
import "../css/ProcessingBox.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export const Order = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleToggleCart = () => {
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }}
    >
      <MainProvider>
        <main className="min-h-[100vh] pt-20 flex">
          <div className="relative">
            <section className="fixed right-0 top-20 z-10 ">
              {isCartVisible && (
                <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
                  <div className="flex justify-end relative">
                    <button
                      className="p-2 rounded-full hover:bg-gray-200 absolute bottom-1s right-18"
                      onClick={handleToggleCart}
                    >
                      <FaTimes size={30} />
                    </button>
                  </div>
                  <Cart />
                </div>
              )}
              <button
                className=" p-2 rounded-full  absolute bottom-2 right-[8.4em] m-4 w-8 h-8 flex items-center"
                onClick={handleToggleCart}
              ></button>
            </section>
            <section className="relative z-0">
              <Menu />
            </section>
          </div>
        </main>
      </MainProvider>
    </motion.main>
  );
};
