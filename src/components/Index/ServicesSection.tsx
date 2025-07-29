"use client";

import { motion } from "framer-motion";
import { Title } from "../custom/Title";
import { FireOutlined } from "@ant-design/icons";

const services = [
  {
    label: "Website Design",
    description:
      "Responsive, beautiful, and optimized for every device. Wix, WordPress, Webflow — we master them all.",
    featured: false,
  },
  {
    label: "Full-Stack Development",
    description:
      "Custom frontend + backend systems using React, Node.js, Laravel, MySQL — tailored to your needs. We also handle domain setup, Docker hosting, and get your site live — fast, secure, and SEO-ready.",
    featured: true,
  },
  {
    label: "E-commerce Solutions",
    description:
      "Build scalable online stores with Shopify, WooCommerce, Stripe, ECPay, and more.",
    featured: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="text-center mb-12">
          <Title>Our Services</Title>
          <p className="text-center text-[var(--text-color-muted)] mb-8">
            From templates to custom systems — we do it all with cutting-edge
            technology.
          </p>
        </div>

        <div className="px-12 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="card p-6 h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{service.label}</h3>
                </div>
                <p className="text-[var(--text-color-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
              {service.featured && (
                <motion.div
                  className="absolute -top-3 -right-3 z-20"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <FireOutlined />
                    HOT
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
