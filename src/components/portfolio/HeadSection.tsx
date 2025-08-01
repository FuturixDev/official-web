"use client";
import { motion } from "framer-motion";
import { Title } from "../custom/Title";
import { fadeInItem } from "@/libs/motion";

export const HeadSection = () => (
  <section id="portfolio-head">
    <div className="container mt-16 mb-8">
      <motion.div
        className="text-center"
        initial="hiddenBottom"
        animate="show"
        variants={fadeInItem}
      >
        <Title>Portfolio</Title>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-color-muted)] mt-4">
          Showcasing our best work.
        </h2>
      </motion.div>
    </div>
  </section>
);
