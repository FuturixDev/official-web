"use client";
import { motion } from "framer-motion";
import { fadeInItem } from "@/libs/motion";

const icons = [
  "devicon-react-original", // React
  "devicon-nodejs-plain", // Node.js
  "devicon-html5-plain", // HTML5
  "devicon-css3-plain", // CSS3
  "devicon-angularjs-plain", // Angular
];

export const ServiceIntroSection = () => (
  <section className="bg-black text-white py-20">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Left: Title, icons, tagline */}
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-6xl md:text-7xl font-light mb-4">Offering best<br />services</h2>
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
      {/* Right: Description */}
      <div className="text-xl leading-relaxed">
        <p className="mb-6">
          We create, products, brands, apps & websites for companies all around the world. To us, world-class digital products take more than intelligent code or creative design. It requires true partnership between the ideators and the innovators. Our collaborations are built on a bedrock of transparency, communication, expert project management, and attention to detail.
        </p>
        <p>
          From the moment our company was founded, we have helped our clients find exceptional solutions for their businesses , creating memorable brands and digital products. We offer comprehensive services to aid you in the entire product development process.
        </p>
      </div>
    </div>
  </section>
);
