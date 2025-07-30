"use client";

import { fadeInItem, staggerContainer } from "@/libs/motion";
import { cn } from "@/utils/className";
import { Tooltip } from "antd";
import { motion } from "framer-motion";

const highlights = [
  { label: "members", value: "08+" },
  { label: "completed projects", value: "150+" },
  { label: "years of experience", value: "05+" },
];

const icons = [
  {
    title: "HTML 5",
    src: "https://www.svgrepo.com/show/373669/html.svg",
  },
  {
    title: "CSS 3",
    src: "https://www.svgrepo.com/show/373535/css.svg",
  },
  {
    title: "React",
    src: "https://www.svgrepo.com/show/354259/react.svg",
  },
  { title: "Node.js", src: "https://www.svgrepo.com/show/373929/node.svg" },
  { title: "Python", src: "https://www.svgrepo.com/show/452091/python.svg" },
];

const Icon = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "h-12 w-12 p-2 rounded-full text-2xl",
      "border-4 border-black",
      "flex items-center justify-center",
      className
    )}
    {...rest}
  >
    {children}
  </span>
);

export const GoalSection = () => (
  <section id="about-goal" className="bg-black text-white py-16">
    <div className="container mx-auto flex flex-col gap-16">
      <motion.div
        variants={staggerContainer}
        initial="hiddenBottom"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* 左側 */}
        <motion.div
          variants={fadeInItem}
          className="flex flex-col items-start gap-8"
        >
          <h2 className="text-6xl md:text-7xl font-semibold mb-4">Our Goal</h2>

          {/* 圖標區域 */}
          <div className="flex items-center mb-2">
            {icons.map((icon, index) => (
              <Icon
                key={icon.title}
                className={cn(`bg-[var(--background-color-primary)]`, {
                  "-ms-3": index > 0,
                })}
              >
                <Tooltip title={icon.title}>
                  {/*eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    draggable={false}
                    src={icon.src}
                    alt={icon.title}
                    className="w-full h-full object-contain"
                  />
                </Tooltip>
              </Icon>
            ))}
            <Icon className={`bg-white text-black font-bold -ms-3`}>+</Icon>
          </div>
          <span className="text-2xl text-gray-400">
            We provide wide range of services
          </span>
        </motion.div>

        {/* 右側 */}
        <motion.article
          variants={fadeInItem}
          className="text-justify text-lg md:text-xl leading-relaxed"
        >
          <p className="mb-6">
            From the moment our company was founded, we have helped our clients
            find exceptional solutions for their businesses, creating memorable
            brands and customised digital products. Our expertise grows each
            year, and our accumulated experience empowers us to develop products
            exactly as they should be.
          </p>
          <p>
            We make things, and we&apos;re awesome at it. FuturiX Dev is a
            tight-knit team of experts who are ready to tackle the most
            intricate puzzles when it comes to websites and mobile apps
            development and creating custom solutions. We love what we do and we
            bet on the success of each and every project we undertake.
          </p>
        </motion.article>
      </motion.div>

      {/* 統計數據區域 */}
      <motion.div
        variants={staggerContainer}
        initial="hiddenBottom"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
      >
        {highlights.map((item) => (
          <motion.div
            variants={fadeInItem}
            key={item.label}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-7xl md:text-8xl font-light mb-2 tracking-tight">
              {item.value}
            </span>
            <span className="text-2xl text-[var(--text-color-muted)]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
