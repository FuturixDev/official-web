"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/className";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import { Title } from "../custom/Title";

const slogan = "Innovate, design, and build future-ready digital solutions";
const description = [
  "Based in Taiwan, FuturiX Dev is a student-led team passionate about building smart, scalable, and beautiful digital experiences.",
  "We specialize in full-stack development, product design, and automation tools that empower startups and businesses to thrive in the digital age. What sets us apart is our ability to think fast, execute precisely, and design with purpose.",
  "From portfolio sites to AI-integrated platforms, we custom-build impactful solutions — combining creativity, clean code, and relentless curiosity.",
  "We’re here to turn your ideas into reality.",
];
export const AboutUsSection = () => {
  return (
    <section id="aboutUs">
      <div className="container mb-12">
        <motion.div
          className="text-center mb-12"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
          transition={{ delay: 0.2 }}
        >
          <Title>About Us</Title>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16"
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 左側 - 標語 */}
          <motion.div variants={fadeInItem}>
            <h2 className="text-[var(--text-color-muted)] text-5xl lg:text-6xl font-semibold text-left leading-tight">
              {slogan}
            </h2>
          </motion.div>

          {/* 右側 - 描述 */}
          <motion.div variants={fadeInItem}>
            <article>
              {description.map((line, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg lg:text-xl leading-relaxed text-justify"
                  initial="hiddenBottom"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeInItem}
                  transition={{ delay: 0.1 * index }}
                >
                  {line}
                </motion.p>
              ))}
            </article>

            <motion.div
              className="mt-8"
              initial="hiddenBottom"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInItem}
              transition={{ delay: 0.5 }}
            >
              <Link
                className={cn(
                  `whitespace-nowrap rounded-full flex items-center justify-center gap-1 px-8 py-4`,
                  "btn"
                )}
                href={"/about"}
              >
                More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
