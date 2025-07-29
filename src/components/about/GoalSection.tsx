"use client";
import { motion } from "framer-motion";
import { Title } from "../custom/Title";
import { fadeInItem, staggerContainer } from "@/libs/motion";


const highlights = [
  { label: "members", value: "08+" },
  { label: "completed projects", value: "150+" },
  { label: "years of experience", value: "05+" },
];

const icons = [
  "devicon-react-original", // React
  "devicon-nodejs-plain", // Node.js
  "devicon-html5-plain", // HTML5
  "devicon-css3-plain", // CSS3
  "devicon-angularjs-plain", // Angular
];


export const GoalSection = () => (
  <section id="about-goal" className="bg-black text-white py-16">
    <div className="container mx-auto flex flex-col gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Title, icons, tagline */}
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-6xl md:text-7xl font-light mb-4">Our goal</h2>
          <div className="flex items-center gap-4 mb-2">
            {icons.map((icon, idx) => (
              <span
                key={icon}
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#222] ${idx === icons.length - 1 ? 'bg-white text-black' : ''}`}
              >
                {idx < icons.length - 1 ? (
                  <i className={`${icon} text-2xl`} />
                ) : (
                  <span className="text-2xl font-bold">+</span>
                )}
              </span>
            ))}
          </div>
          <span className="text-2xl text-gray-400">We provide wide range<br />of services</span>
        </div>
        {/* Right: Mission statement */}
        <div className="text-lg md:text-xl leading-relaxed">
          <p className="mb-6">
            From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses, creating memorable brands and customised digital products. Our expertise grows each year, and our accumulated experience empowers us to develop products exactly as they should be.
          </p>
          <p>
            We make things, and we're awesome at it. FuturiX Dev is a tight-knit team of experts who are ready to tackle the most intricate puzzles when it comes to websites and mobile apps development and creating custom solutions. We love what we do and we bet on the success of each and every project we undertake.
          </p>
        </div>
      </div>
      {/* Highlights row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {highlights.map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center">
            <span className="text-7xl md:text-8xl font-light mb-2 tracking-tight">{item.value}</span>
            <span className="text-2xl text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
