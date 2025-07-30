"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Title } from "../Index/Title";
import { fadeInItem } from "@/libs/motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide full-stack development, product design, and automation tools for startups and businesses, tailored to your needs.",
  },
  {
    question: "How can I start a project with you?",
    answer:
      "Just reach out via our contact form or email. We'll discuss your goals and guide you through the next steps!",
  },
];

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="about-faq">
      <div className="container mb-12">
        <motion.div
          className="text-center mb-8"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
        >
          <Title>Frequently Asked Questions</Title>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, idx) => (
            <motion.details
              key={idx}
              variants={fadeInItem}
              initial="hiddenBottom"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 border-b border-[var(--border-color)]"
            >
              <summary
                className="w-full text-left py-4 px-2 font-semibold text-lg flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.question}
              </summary>
              <p className="px-2 pb-4 text-[var(--text-color-muted)]">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};
