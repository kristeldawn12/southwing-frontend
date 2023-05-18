import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Order } from "../pages/Order";
import { About } from "../pages/About.js";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/southwing" element={<Home />}></Route>
        <Route path="/southwing/about" element={<About />}></Route>
        <Route path="/southwing/order" element={<Order />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
