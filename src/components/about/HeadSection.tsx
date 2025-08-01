"use client";
import { motion } from "framer-motion";
import { Title } from "../custom/Title";
import { fadeInItem } from "@/libs/motion";

export const HeadSection = () => (
  <section id="about-head">
    <div className="container mt-16 mb-8">
      <motion.div
        className="text-center"
        initial="hiddenBottom"
        animate="show"
        variants={fadeInItem}
      >
        <Title>About us</Title>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-color-muted)] mt-4">
          We build what others imagine.
        </h2>
      </motion.div>
    </div>
  </section>
);
