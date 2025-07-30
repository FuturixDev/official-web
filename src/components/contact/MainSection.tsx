"use client";
import { motion } from "framer-motion";
import { fadeInItem } from "@/libs/motion";
import { WhatsAppOutlined } from "@ant-design/icons";
import { email, phoneNumber } from "@/libs";
import { OutsideLink } from "fanyucomponents";

export const MainSection = () => (
  <section className="bg-black text-white py-20 min-h-[60vh] flex items-center">
    <div className="container mx-auto flex flex-col gap-12">
      <motion.div
        className="mb-12"
        initial="hiddenBottom"
        animate="show"
        variants={fadeInItem}
      >
        <h1 className="text-6xl md:text-7xl font-light leading-tight mb-8">
          Lets speak about
          <br />
          your project
        </h1>
        <div className="flex flex-col lg:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-2xl text-gray-400 mb-2">Drop us a line at</p>
            <OutsideLink
              href={`mailto:${email}`}
              className="text-5xl md:text-6xl font-light text-white mb-4"
            >
              {email}
            </OutsideLink>
            <p className="text-xl text-gray-400">
              Or <span className="text-white">just call us</span> and share your
              story with us
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <a
              href={"#"}
              target="_blank"
              rel="noopener"
              className="text-white text-3xl"
            >
              <WhatsAppOutlined />
            </a>
            <span className="text-2xl md:text-3xl text-white">
              {phoneNumber}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
