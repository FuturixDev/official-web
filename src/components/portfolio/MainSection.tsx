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
          className="masonry-grid"
          variants={staggerContainer}
          initial="hiddenBottom"
          animate="show"
        >
          {portfolio.map((item, index) => (
            <motion.article
              key={`${item.url}-${index}`}
              className="portfolio-card group"
              variants={fadeInItem}
            >
              <div className="portfolio-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title || `Portfolio Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Overlay for hover effect */}
                <div className="overlay">
                  <div className="text-center space-y-4">
                    <OutsideLink
                      href={item.url}
                      aria-label={`View project: ${item.title}`}
                      className="view-button"
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
