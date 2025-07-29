"use client";

import { fadeInItem } from "@/libs/motion";
import { cn } from "@/utils/className";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Link from "next/link";

const slogan = "Designing the Future, One Pixel at a Time";
const description =
  "We craft modern, responsive websites with a futuristic edge.";

export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container z-10">
        <div className="min-h-160 flex flex-col items-center justify-center text-center">
          {/* 主標語區域 */}
          <motion.div
            variants={fadeInItem}
            initial="hiddenBottom"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[var(--text-color-primary)] to-[var(--text-color-secondary)] bg-clip-text text-transparent leading-tight">
              {slogan}
            </h1>

            {/* 副描述 */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-[var(--text-color-muted)] font-light">
              {description}
            </h2>
          </motion.div>

          {/* 按鈕區域 */}
          <motion.div
            variants={fadeInItem}
            initial="hiddenBottom"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full sm:w-fit flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 text-lg font-semibold "
          >
            {[
              {
                className: "btn-primary",
                href: "/portfolio",
                label: "Our Portfolio",
                icon: ArrowRightOutlined,
              },
              {
                className: "btn",
                href: "/contact",
                label: "Contact Us",
                icon: ArrowRightOutlined,
              },
            ].map((item, index) => (
              <Link
                key={index}
                className={cn(
                  `whitespace-nowrap rounded-full flex items-center justify-center gap-1 px-8 py-4`,
                  item.className
                )}
                href={item.href}
              >
                <item.icon />
                {item.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
