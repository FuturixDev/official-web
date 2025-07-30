"use client";

import { Carousel } from "@/components/custom/Carousel";
import { DemoOutlined } from "@/components/custom/DemoOutlined";
import { OutsideLink } from "fanyucomponents";
import { Title } from "../custom/Title";

const portfolio = [
  {
    url: "https://inventory-e39j.onrender.com/dashboard.php",
    img: "/portfolio/inventory.jpg",
  },
  {
    url: "https://class.zeabur.app/",
    img: "/portfolio/class.jpg",
  },
  {
    url: "https://cashflow-system-ochre.vercel.app/",
    img: "/portfolio/cashflow.jpg",
  },
  {
    url: "https://web3-jade-eta.vercel.app/",
    img: "/portfolio/web3.jpg",
  },
  {
    url: "https://58hpi8c7e55k.manus.space/",
    img: "/portfolio/58hpi8c7e55k.jpg",
  },
  {
    url: "https://txhkngcm.manus.space/",
    img: "/portfolio/txhkngcm.jpg",
  },
  {
    url: " https://vdpfaorm.manus.space/?code=oLjRQA4thbhcHwnchwJ2p9",
    img: "/portfolio/vdpfaorm.jpg",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="text-center mb-12">
          <Title>Portfolio</Title>
          <p className="text-center text-[var(--text-color-muted)] mb-8">
            Come explore what we&apos;ve been up to — where creativity meets
            technology to bring ideas to life.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            {/* 輪播區塊 */}
            <Carousel>
              {portfolio.map((item, index) => (
                <article
                  key={`${item.url}-${index}`}
                  className="portfolio-card m-2 w-72 md:w-80"
                >
                  <figure className="w-full h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={`Portfolio-${index + 1} Preview`}
                    />
                    <figcaption>
                      <OutsideLink
                        href={item.url}
                        className="overlay flex flex-col items-center justify-center"
                        aria-label={`View details of project ${index + 1}`}
                      >
                        <div className="text-center space-y-3">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[var(--text-color-primary)] to-[var(--text-color-secondary)] rounded-full flex items-center justify-center shadow-lg">
                            <DemoOutlined className="text-2xl text-white" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-white tracking-wide">
                              View Project
                            </h3>
                            <p className="text-sm text-[var(--text-color-muted)] opacity-90">
                              Click to explore
                            </p>
                          </div>
                        </div>
                      </OutsideLink>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
