"use client";
import { motion } from "framer-motion";
import { fadeInItem } from "@/libs/motion";
import { WhatsAppOutlined } from "@ant-design/icons";

export const ContactHeroSection = () => (
  <section className="bg-black text-white py-20 min-h-[60vh] flex items-center">
    <div className="container mx-auto flex flex-col gap-12">
      <motion.div
        className="mb-12"
        initial="hiddenBottom"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInItem}
      >
        <h1 className="text-6xl md:text-7xl font-light leading-tight mb-8">
          Lets speak about<br />your project
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-2xl text-gray-400 mb-2">Drop us a line at</p>
            <a href="mailto:futurixdev6@gmail.com" className="text-5xl md:text-6xl font-light text-white block mb-4">futurixdev6@gmail.com</a>
            <p className="text-xl text-gray-400">Or <span className="text-white">just call us</span> and share your story with us</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <a href="https://wa.me/886912345678" target="_blank" rel="noopener" className="text-white text-3xl">
              <WhatsAppOutlined />
            </a>
            <span className="text-2xl md:text-3xl text-white">+886 912 345 678</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
