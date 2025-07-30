"use client";
import { email, phoneNumber } from "@/libs";
import { fadeInItem } from "@/libs/motion";
import { CopyrightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-1 bg-black">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left: Heading */}
          <div className="flex flex-col items-start">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Have an idea?
              <br />
              Let&apos;s build it!
            </h2>
          </div>

          {/* Right: Book a call button */}
          <div className="flex justify-center md:justify-end">
            <a
              href={`${email}?subject=Book%20a%20Call`}
              className="btn-primary flex items-center gap-3 px-8 py-4 rounded-full font-medium text-xl shadow-lg hover:bg-[var(--text-color-primary)]/90 transition-all"
              style={{ minWidth: 200, justifyContent: "center" }}
            >
              <span className="text-2xl">→</span> Book a call
            </a>
          </div>
        </div>
        {/* Bottom: Contact info and back to top */}
        <motion.div
          className="text-[var(--text-color-muted)] flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[var(--border-color)] pt-8"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <span className="text-lg">
              {email}
            </span>
            <span className="text-lg">
              {phoneNumber}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="#top"
              className="text-lg hover:text-[var(--text-color-primary)] hover:underline"
            >
              Back to top
            </Link>
            <div className="flex gap-2 text-sm">
              <CopyrightOutlined /> {year}, All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
