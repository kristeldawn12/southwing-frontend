import React, { useContext } from "react";
import { MainContext } from "../provider/MainProvider.js";
import deleteBtn from "../assets/images/delete.png";

export const Cart = () => {
  const {
    cartItems,
    decrementQuantity,
    incrementQuantity,
    subtotal,
    total,
    checkout,
    handleDelete,
  } = useContext(MainContext);

  return (
    <main className="cart-container">
      <section className="cart-title">
        <h2 className="">Your Order</h2>
      </section>
      <section className="cart-items">
        {cartItems.length === 0 ? (
          <p className="cart-message">Cart is empty</p>
        ) : (
          <div className="cart-item-display">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="quantity-number">
                    <div className="quantity-btn flex-center">
                      <button onClick={() => decrementQuantity(item.id)}>
                        -
                      </button>
                      <button onClick={() => incrementQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <div className="quantity-price">
                      <p>Qty: {item.quantity}</p>
                      <p>₱{item.price * item.quantity}</p>
                    </div>

                    <div
                      onClick={() => handleDelete(item.id)}
                      className="delete-btn"
                    >
                      <img
                        src={deleteBtn}
                        alt="delete"
                        className="delete-btn-image"
                      ></img>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section className="cart-total">
        <p>Subtotal: ₱{subtotal}</p>
        <h5>Total: ₱{total}</h5>
      </section>

      <section className="flex-center">
        <button onClick={checkout} className="checkout-btn">
          Checkout
        </button>
      </section>
    </main>
  );
};
