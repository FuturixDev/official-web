"use client";
import { motion } from "framer-motion";
import { Title } from "../custom/Title";
import { fadeInItem } from "@/libs/motion";

export const TaglineSection = () => (
  <section id="about-tagline">
    <div className="container mb-8">
      <motion.div
        className="text-center"
        initial="hiddenBottom"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInItem}
        transition={{ delay: 0.1 }}
      >
        <Title>About</Title>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-color-primary)] mt-4">
          We build what others imagine.
        </h2>
      </motion.div>
    </div>
  </section>
);
