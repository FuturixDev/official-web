"use client";

import { Carousel } from "@/components/custom/Carousel";
import { DemoOutlined } from "@/components/custom/DemoOutlined";
import { OutsideLink } from "fanyucomponents";
import { Title } from "../custom/Title";
import { portfolio } from "@/libs/portfolio";

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
                      <div className="overlay flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-3">
                          <OutsideLink
                            href={item.url}
                            aria-label={`View details of project ${index + 1}`}
                            className="btn-primary p-3 rounded-full"
                          >
                            <DemoOutlined className="text-4xl" />
                          </OutsideLink>
                          <div className="space-y-1 text-center">
                            <h3 className="text-xl font-semibold tracking-wide">
                              View Project
                            </h3>
                            <p className="text-sm text-[var(--text-color-muted)] opacity-90">
                              Click to explore
                            </p>
                          </div>
                        </div>
                      </div>
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
