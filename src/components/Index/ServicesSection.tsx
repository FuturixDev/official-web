"use client";

import { motion } from "framer-motion";
import { Title } from "../custom/Title";
import {
  FireOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import { cn } from "@/utils/className";

const services = [
  {
    label: "Website Design",
    description: [
      "Responsive, beautiful, and optimized for every device",
      "Master Wix, WordPress, Webflow platforms",
      "Modern UI/UX design principles",
      "Cross-browser compatibility",
    ],
    featured: false,
    icon: (
      <GlobalOutlined className="text-2xl text-[var(--text-color-primary)]" />
    ),
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    label: "Full-Stack Development",
    description: [
      "Custom frontend + backend systems using React, Node.js, Laravel, MySQL",
      "Domain setup and configuration",
      "Docker hosting and deployment",
      "Fast, secure, and SEO-ready solutions",
    ],
    featured: true,
    icon: (
      <CodeOutlined className="text-2xl text-[var(--text-color-secondary)]" />
    ),
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    label: "E-commerce Solutions",
    description: [
      "Build scalable online stores",
      "Shopify and WooCommerce integration",
      "Payment gateways: Stripe, ECPay",
      "Inventory and order management",
    ],
    featured: false,
    icon: (
      <ShoppingCartOutlined className="text-2xl text-[var(--text-color-tertiary)]" />
    ),
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
          transition={{ delay: 0.2 }}
        >
          <Title>Our Services</Title>
          <p
            className={cn(
              "text-center text-lg leading-relaxed max-w-2xl mx-auto",
              "text-[var(--text-color-muted)]"
            )}
          >
            From templates to custom systems — we do it all with cutting-edge
            technology.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={fadeInItem}
            >
              <div
                className={cn(
                  "card p-8 h-full relative overflow-hidden transition-all duration-300",
                  "bg-gradient-to-br",
                  service.gradient
                )}
              >
                {/* 背景漸變效果 */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  )}
                />

                <div className="relative z-10">
                  {/* 圖標和標題區域 */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={cn(
                        "p-3 rounded-xl border transition-transform duration-300",
                        "bg-[var(--background-color-secondary)] border-[var(--border-color)]",
                        "group-hover:scale-110"
                      )}
                    >
                      {service.icon}
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-semibold transition-colors duration-300",
                        "text-[var(--text-color)] group-hover:text-[var(--text-color-primary)]"
                      )}
                    >
                      {service.label}
                    </h3>
                  </div>

                  {/* 描述文字 */}
                  <ul
                    className={cn(
                      "leading-relaxed transition-colors duration-300 space-y-2",
                      "text-[var(--text-color-muted)] group-hover:text-[var(--text-color)]"
                    )}
                  >
                    {service.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-[0.5em] text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* HOT 標籤 */}
              {service.featured && (
                <motion.div
                  className="absolute -top-4 -right-4 z-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={cn(
                      "flex items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl",
                      "bg-gradient-to-r from-orange-500 to-red-500 border-2 border-white/20 backdrop-blur-sm"
                    )}
                  >
                    <FireOutlined className="text-yellow-200" />
                    <span className="tracking-wide">HOT</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* 諮詢 */}
        <motion.div
          className="text-center mt-16"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
          transition={{ delay: 0.4 }}
        >
          <div
            className={cn(
              "card p-8 relative overflow-hidden",
              "bg-gradient-to-br from-blue-500/5 to-purple-500/5",
              "border-2 border-dashed border-[var(--border-color)]"
            )}
          >
            <div className="relative z-10">
              <h3
                className={cn(
                  "text-2xl font-bold mb-4",
                  "text-[var(--text-color)]"
                )}
              >
                Not sure where to start?
              </h3>
              <p
                className={cn(
                  "text-lg mb-6 max-w-xl mx-auto",
                  "text-[var(--text-color-muted)]"
                )}
              >
                We&apos;ll help you evaluate your needs and recommend the
                perfect solution for your project.
              </p>
              <motion.button
                className={cn(
                  "px-8 py-3 rounded-xl font-semibold transition-all duration-300",
                  "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
                  "hover:shadow-lg hover:scale-105 active:scale-95"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Get Free Consultation
              </motion.button>
            </div>

            {/* 背景裝飾 */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10",
                "opacity-0 hover:opacity-100 transition-opacity duration-500"
              )}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
