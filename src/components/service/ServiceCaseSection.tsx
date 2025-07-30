"use client";
import { motion } from "framer-motion";
import { fadeInItem } from "@/libs/motion";

const cases = [
  {
    title: "UI/UX design",
    description:
      "We design simple, beautiful and differentiated digital products. A lot goes into that, but if we boil our approach down to one objective. It would be discovering what users want and designing the simplest way for them to get there. We can run this process from start to finish, or act as an extension of your product team.",
    capabilities:
      "Interface design, Usability, Interactions, User experience, Accessibility and etc.",
    image: "/portfolio/class.jpg",
    recentCase: "Unmewt",
    reverse: false,
  },
  {
    title: "Full Stack Development",
    description:
      "Work with our experts to implement the newest, cutting-edge technologies into your business and kick-start your growth. We focus on the newest technologies and frameworks, trends, data analysis and research to bring you optimal results.",
    capabilities:
      "Front-End, Back-End, Responsive design, APIs, AI, ML",
    image: "/portfolio/cashflow.jpg",
    recentCase: "Distro Direct",
    reverse: true,
  },
];

export const ServiceCaseSection = () => (
  <section className="bg-black text-white py-20">
    <div className="container mx-auto flex flex-col gap-24">
      {cases.map((item, idx) => (
        <div
          key={item.title}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Left: Text */}
          <div className="flex flex-col gap-8">
            <h2 className="text-6xl md:text-7xl font-light mb-4">{item.title}</h2>
            <p className="text-xl leading-relaxed mb-4">{item.description}</p>
            <div>
              <span className="text-lg text-gray-400">IN-HOUSE CAPABILITIES</span>
              <p className="text-xl text-white mt-2">{item.capabilities}</p>
            </div>
            <div className="mt-8 flex gap-4 items-center">
              <span className="text-lg text-gray-400">Recent Case</span>
              <span className="text-xl text-white font-semibold">{item.recentCase}</span>
              <span className="text-2xl text-gray-400">◀</span>
              <span className="text-2xl text-gray-400">▶</span>
            </div>
          </div>
          {/* Right: Image */}
          <div className="w-full h-[340px] md:h-[420px] rounded-xl overflow-hidden flex items-center justify-center bg-black">
            <img src={item.image} alt={item.title} className="object-cover w-full h-full opacity-90" />
          </div>
        </div>
      ))}
    </div>
  </section>
);
