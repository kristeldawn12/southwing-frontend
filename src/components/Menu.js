import React, { useContext, useState } from "react";
import { MainContext } from "../provider/MainProvider.js";
import { OrderDisplay } from "./OrderDisplay.js";
import brandLogo from "../assets/images/southwing-logo.png";
import addSign from "../assets/images/add-sign.png";

export const Menu = () => {
  const {
    addToCart,
    itemsByCategory,
    isProcessing,
    orderProcessed,
    cartItems,
  } = useContext(MainContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const totalCartItems = cartItems.length;

  return (
    <main className="menu-list-container parent">
      <div className="child-1">
        <section className="selection flex-center flex-column">
          <h2>Menu List</h2>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="">All Categories</option>
            {Object.keys(itemsByCategory).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <p className="py-2 text-red-900">
            Total Cart Items: {totalCartItems}
          </p>
        </section>
        <section className="menu-items-container">
          <div className="pt-14 px-2">
            <section className="fixed w-full flex justify-center ">
              {isProcessing && (
                <div className="processing-order p-2">
                  <p>Processing your order</p>
                  <p>Please Wait.</p>
                  <img
                    src={brandLogo}
                    alt="brand-logo"
                    className="logo-display"
                  ></img>
                </div>
              )}
              {orderProcessed && (
                <div className="processing-order">
                  <OrderDisplay />
                </div>
              )}
            </section>
          </div>
          <div>
            {Object.entries(itemsByCategory).map(([category, items]) => (
              <div key={category}>
                {selectedCategory === "" || selectedCategory === category ? (
                  <div className="category-box">
                    <ul className="w-full flex flex-wrap justify-center">
                      {items.map((item) => (
                        <div className="item-box" key={item.id}>
                          <div className="image-box menu-item-image">
                            <img src={item.img} alt={item.name}></img>
                          </div>
                          <div className="item-content">
                            <div className="name-desc">
                              <h6>{item.name}</h6>
                              <p>{item.description}</p>
                            </div>
                            <div className="price-addCart">
                              <div className="price">
                                <p>₱{item.price}</p>
                              </div>
                              <div className="add-cart ">
                                <button
                                  onClick={() => addToCart(item)}
                                  className="add-sign"
                                >
                                  <img
                                    src={addSign}
                                    alt="add-sign"
                                    className="bg-white"
                                  ></img>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
