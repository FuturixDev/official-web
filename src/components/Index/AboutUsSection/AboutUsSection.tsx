"use client";

const slogan = "Innovate, design, and build future-ready digital solutions";
const description = [
  "Based in Taiwan, FuturiX Dev is a student-led team passionate about building smart, scalable, and beautiful digital experiences.",
  "We specialize in full-stack development, product design, and automation tools that empower startups and businesses to thrive in the digital age. What sets us apart is our ability to think fast, execute precisely, and design with purpose.",
  "From portfolio sites to AI-integrated platforms, we custom-build impactful solutions — combining creativity, clean code, and relentless curiosity.",
  "We’re here to turn your ideas into reality.",
];
export const AboutUsSection = () => {
  return (
    <section id="aboutUs">
      <div className="container mb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[var(--text-color-primary)] to-[var(--text-color-secondary)] bg-clip-text text-transparent leading-tight">
            About Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* 左側 - 標語 */}
          <div>
            <h2 className="text-[var(--text-color-muted)] text-5xl lg:text-6xl font-semibold text-left leading-tight">
              {slogan}
            </h2>
          </div>

          {/* 右側 - 描述 */}
          <div>
            <article>
              {description.map((line, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg lg:text-xl leading-relaxed text-justify"
                >
                  {line}
                </p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
