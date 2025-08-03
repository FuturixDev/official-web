"use client";

import { motion } from "framer-motion";
import { OutsideLink } from "fanyucomponents";
import { portfolio } from "@/libs/portfolio";
import { DemoOutlined } from "@/components/custom/DemoOutlined";
import { fadeInItem, staggerContainer } from "@/libs/motion";

export const MainSection = () => {
  return (
    <section id="portfolio-showcase" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hiddenBottom"
          animate="show"
        >
          {portfolio.map((item, index) => (
            <motion.article
              key={`${item.url}-${index}`}
              className="card"
              variants={fadeInItem}
            >
              <div className="portfolio-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title || `Portfolio Project ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="overlay">
                  <div className="text-center">
                    <OutsideLink
                      href={item.url}
                      aria-label={`View project: ${item.title}`}
                      className="btn-primary px-6 py-3 rounded-xl inline-flex items-center gap-2"
                    >
                      <span>View Project</span>
                      <DemoOutlined className="w-4 h-4" />
                    </OutsideLink>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
