import React, { createContext, useEffect, useReducer } from "react";
import menuItems from "./MenuItems.js";

export const MainContext = createContext();

const initialState = {
  cartItems: [],
  sideBar: false,
  isProcessing: false,
  orderProcessed: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    // NAVIGATION
    case "SHOW_SIDEBAR":
      return { ...state, sideBar: !state.sideBar };

    // MENU LIST
    case "ADD_TO_CART":
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemInCart) {
        const updatedCart = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { ...state, cartItems: updatedCart };
      } else {
        const updatedCart = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
        return { ...state, cartItems: updatedCart };
      }

    // CART
    case "DECREMENT_QUANTITY":
      const decrementedCart = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        cartItems: decrementedCart.filter((item) => item.quantity > 0),
      };
    case "INCREMENT_QUANTITY":
      const incrementedCart = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cartItems: incrementedCart };
    case "CHECKOUT_START":
      return { ...state, isProcessing: true };
    case "CHECKOUT_COMPLETE":
      return {
        ...state,
        cartItems: [],
        isProcessing: false,
        orderProcessed: true,
      };
    case "HIDE_ORDER_PROCESSING":
      return { ...state, orderProcessed: false };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export const MainProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // NAVIGATION
  const showSidebar = () => {
    dispatch({ type: "SHOW_SIDEBAR" });
  };

  // MENU LIST CATEGORY

  const itemsByCategory = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  // CART

  const subtotal = state.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const total = subtotal;

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const handleDelete = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const checkout = () => {
    if (state.cartItems.length === 0) {
      alert("Cart is empty. Please add items to proceed.");
      return;
    }
    dispatch({ type: "CHECKOUT_START" });
    setTimeout(() => {
      dispatch({ type: "CHECKOUT_COMPLETE" });
    }, 3000);
  };

  const closeOrderDisplay = () => {
    dispatch({ type: "HIDE_ORDER_PROCESSING" });
  };

  const contextValue = {
    cartItems: state.cartItems,
    isProcessing: state.isProcessing,
    orderProcessed: state.orderProcessed,
    itemsByCategory,
    subtotal,
    total,
    sideBar: state.sideBar,
    state,

    addToCart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity,
    checkout,
    handleDelete,
    showSidebar,
    closeOrderDisplay,
  };

  return (
    <MainContext.Provider value={contextValue}>
      {props.children}
    </MainContext.Provider>
  );
};
