"use client";

import { motion } from "framer-motion";
import { OutsideLink } from "fanyucomponents";
import { portfolio } from "@/libs/portfolio";
import { DemoOutlined } from "@/components/custom/DemoOutlined";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import Image from "next/image";

export const MainSection = () => {
  return (
    <section id="portfolio-showcase">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hiddenBottom"
          animate="show"
        >
          {portfolio.map((item, index) => (
            <motion.article
              key={`${item.url}-${index}`}
              className="card portfolio-card"
              variants={fadeInItem}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="portfolio-image">
                <Image
                  src={item.img}
                  alt={item.title || `Portfolio Project ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={400}
                  height={240}
                />

                {/* Simple overlay */}
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <OutsideLink
                      href={item.url}
                      aria-label={`View project: ${item.title}`}
                      className="btn-primary px-4 py-2 rounded-lg inline-flex items-center gap-2"
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
