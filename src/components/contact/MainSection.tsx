"use client";
import { motion } from "framer-motion";
import { fadeInItem, staggerContainer } from "@/libs/motion";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { email, phoneNumber } from "@/libs";
import { OutsideLink } from "fanyucomponents";
import { Title } from "@/components/custom/Title";

export const MainSection = () => (
  <section className="py-20 min-h-[60vh] flex items-center">
    <div className="container">
      <motion.div
        className="mb-12"
        initial="hiddenBottom"
        animate="show"
        variants={fadeInItem}
      >
        <div className="text-center mb-8">
          <Title>Let&apos;s speak about your project</Title>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--text-color-muted)] mt-4">
            Ready to turn your ideas into reality?
          </h2>
        </div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hiddenBottom"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Email 聯絡卡片 */}
            <motion.div
              className="card p-10 group hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[var(--text-color-primary)] to-[var(--text-color-secondary)] rounded-full flex items-center justify-center">
                  <MailOutlined className="text-2xl" />
                </div>

                <div>
                  <p className="text-xl text-[var(--text-color-muted)] mb-4">
                    Drop us a line at
                  </p>
                  <OutsideLink
                    href={`mailto:${email}`}
                    className="text-2xl md:text-3xl font-light text-[var(--text-color)] hover:text-[var(--text-color-primary)] transition-colors duration-300 block mb-4 break-all"
                  >
                    {email}
                  </OutsideLink>
                  <p className="text-lg text-[var(--text-color-muted)]">
                    We&apos;ll get back to you soon
                  </p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp 聯絡卡片 */}
            <motion.div
              className="card p-10 group hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <WhatsAppOutlined className="text-2xl text-white" />
                </div>

                <div>
                  <p className="text-xl text-[var(--text-color-muted)] mb-4">
                    Or just call us
                  </p>
                  <OutsideLink
                    href={`https://wa.me/${phoneNumber
                      .replace(/\s+/g, "")
                      .replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-2xl md:text-3xl text-[var(--text-color)] hover:text-[var(--text-color-primary)] transition-colors duration-300 font-light">
                      {phoneNumber}
                    </span>
                  </OutsideLink>
                  <p className="text-lg text-[var(--text-color-muted)] mt-4">
                    Share your story with us
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
