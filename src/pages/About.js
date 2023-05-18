import React from "react";
import { SocialLinks } from "../components/SocialLinks";
import { motion } from "framer-motion";
import "../css/About.css";

export const About = () => {
  return (
    <motion.main
      className="flex flex-col justify-between min-h-[100vh] bg-[#84301c]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }}
    >
      <div className="flex flex-col  py-2 xl:flex-row xl:m-auto pt-8">
        <section className="px-10 pt-10 w-full text-[#ede1c2] xl:w-2/4">
          <h1 className="text-[3em] md:text-6xl py-3">About us</h1>
          <p className="py-4 md:py-5 text-cursive text-2xl md:text-4xl">
            The owners of SouthWing Cafeteria are true culinary adventurers,
            with a passion for exploring and introducing new flavors to the
            market. Drawing on years of experience in the food industry, they
            set out to create something truly unique.
          </p>
          <p className="py-4 md:py-5 text-cursive text-2xl md:text-4xl">
            In 2016, they opened SouthWing Cafeteria, a restaurant specializing
            in mouth-watering chicken wings.
          </p>
          <p className="py-4 md:py-5 text-cursive text-2xl md:text-4xl">
            The name "South" pays homage to the owners' roots in the southern
            region of Cotabato, Philippines. Since then, SouthWing has expanded
            its menu to offer a diverse range of chicken-based dishes and
            non-pork options, all crafted with the same dedication to quality
            and flavor that defines the restaurant's mission.
          </p>
        </section>
        <section
          className="bg-[url('./assets/images/southwing-art.jpg')] w-[20em] min-h-[50vh] bg-cover bg-center bg-no-repeat m-auto rounded-md md:w-[45em]
      "
        ></section>
      </div>

      <section className="w-full">
        <SocialLinks />
      </section>
    </motion.main>
  );
};
