"use client";
import { motion } from "framer-motion";
import { fadeInItem } from "@/libs/motion";

export const ContactFooterSection = () => (
  <section className="bg-white text-black py-16">
    <div className="container mx-auto flex flex-col gap-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8"
        initial="hiddenBottom"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInItem}
      >
        {/* Left: Heading */}
        <div className="flex flex-col items-start">
          <h2 className="text-5xl md:text-6xl font-light mb-4">Have an idea?<br />Let’s build it!</h2>
        </div>
        {/* Right: Book a call button */}
        <div className="flex justify-center md:justify-end">
          <a
            href="mailto:futurixdev6@gmail.com?subject=Book%20a%20Call"
            className="btn-primary flex items-center gap-3 px-8 py-4 rounded-full font-medium text-xl shadow-lg hover:bg-[var(--text-color-primary)]/90 transition-all"
            style={{ minWidth: 200, justifyContent: 'center' }}
          >
            <span className="text-2xl">→</span> Book a call
          </a>
        </div>
      </motion.div>
      {/* Bottom: Contact info and back to top */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[var(--border-color)] pt-8"
        initial="hiddenBottom"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInItem}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <span className="text-lg text-[var(--text-color-muted)]">futurixdev6@gmail.com</span>
          <span className="text-lg text-[var(--text-color-muted)]">+886 912 345 678</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <a href="#top" className="text-lg text-[var(--text-color-muted)] hover:text-[var(--text-color-primary)] hover:underline">Back to top</a>
          <span className="text-sm text-[var(--text-color-muted)]">© All Rights Reserved</span>
        </div>
      </motion.div>
    </div>
  </section>
);
