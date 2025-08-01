"use client";

import { motion } from "framer-motion";
import { OutsideLink } from "fanyucomponents";
import { portfolio } from "@/libs/portfolio";
import { DemoOutlined } from "@/components/custom/DemoOutlined";

export const MainSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="portfolio-showcase" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {portfolio.map((item, index) => (
            <motion.article
              key={`${item.url}-${index}`}
              className="portfolio-card group"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <figure className="w-full h-full relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title || `Portfolio Project ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <figcaption>
                  <div className="overlay">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-white/90 max-w-xs mx-auto">
                          {item.description}
                        </p>
                      )}
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
                </figcaption>
              </figure>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="cta-section mt-16 md:mt-20 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s create something amazing together
          </p>
          <OutsideLink
            href="/contact"
            className="cta-button"
          >
            <span>Get Started</span>
            <DemoOutlined className="w-5 h-5" />
          </OutsideLink>
        </motion.div>
      </div>
    </section>
  );
};
