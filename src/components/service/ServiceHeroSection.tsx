"use client";
import { motion } from "framer-motion";
import { fadeInItem } from "@/libs/motion";

export const ServiceHeroSection = () => (
  <section className="bg-black text-white py-20 min-h-[40vh] flex items-center">
    <div className="container mx-auto flex flex-col gap-12">
      <motion.h1
        className="text-6xl md:text-7xl font-light leading-tight text-center"
        initial="hiddenBottom"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInItem}
      >
        We’ve got skills to<br />make a statement.
      </motion.h1>
    </div>
  </section>
);
