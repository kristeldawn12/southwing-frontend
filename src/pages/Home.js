import React from "react";
import { SocialLinks } from "../components/SocialLinks";

import { motion } from "framer-motion";
import "../css/Home.css";

export const Home = () => {
  return (
    <motion.div
      className="bg-[url('./assets/images/home-bg.png')] bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }}
    >
      <div className="min-h-[100vh] items-end flex">
        <SocialLinks />
      </div>
    </motion.div>
  );
};
