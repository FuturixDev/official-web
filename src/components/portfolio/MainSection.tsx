"use client";

import { motion } from "framer-motion";
import { OutsideLink } from "fanyucomponents";
import { portfolio } from "@/libs/portfolio";
import { fadeInItem, staggerContainer } from "@/libs/motion";

export const MainSection = () => {
  return (
    <section>
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hiddenBottom"
          animate="show"
        >
          {portfolio.map((item, index) => (
            <motion.article key={`${item.url}-${index}`} variants={fadeInItem}>
              <OutsideLink
                href={item.url}
                className="card flex flex-col relative w-full h-full"
                aria-label={`View project: ${item.title}`}
              >
                <div className="w-full aspect-video overflow-hidden">
                  {/*eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    src={item.img}
                    alt={item.title || `Portfolio Project ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Card content */}
                <div className="space-y-3 p-6">
                  <h3 className="font-semibold text-2xl">{item.title}</h3>
                  {item.description && (
                    <p className="font-light text-[var(--text-color-muted)]">
                      {item.description}
                    </p>
                  )}
                </div>
              </OutsideLink>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
