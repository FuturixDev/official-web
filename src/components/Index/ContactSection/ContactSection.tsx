"use client";

import { fadeInItem, staggerContainer } from "@/libs/motion";
import { cn } from "@/utils/className";
import { MailOutlined, SendOutlined } from "@ant-design/icons";
import { OutsideLink } from "fanyucomponents";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";

const email = "futurixdev6@gmail.com";

// 聯繫方式數據
const contactInfo = [
  {
    icon: MailOutlined,
    label: "Email",
    value: "futurixdev6@gmail.com",
    link: `mailto:${email}`,
    description: "Send us an email",
  },
];

// // 社交媒體連結 (可選擇性添加)
// const socialLinks: Array<{
//   icon: React.ComponentType<{ className?: string }>;
//   label: string;
//   link: string;
// }> = [
// ];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);

      // 使用 mailto 發送郵件
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    },
    [formData]
  );

  return (
    <section id="contact">
      <div className="container mb-12">
        {/* 標題區域 */}
        <motion.div
          variants={fadeInItem}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[var(--text-color-primary)] to-[var(--text-color-secondary)] bg-clip-text text-transparent leading-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-color-muted)] mt-4 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project.
          </p>
        </motion.div>

        {/* 主要內容區域 */}
        <motion.div
          variants={staggerContainer}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16"
        >
          {/* 左側 - 聯繫信息 */}
          <motion.div variants={fadeInItem} className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--text-color)] mb-6">
                Get in Touch
              </h2>
              <p className="text-[var(--text-color-muted)] text-lg leading-relaxed">
                We&apos;re here to help turn your digital dreams into reality.
                Whether you need a stunning website, a powerful web application,
                or innovative digital solutions, our team is ready to
                collaborate with you.
              </p>
            </div>

            {/* 聯繫方式列表 */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="card flex items-center space-x-4 p-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--text-color-primary)] to-[var(--text-color-secondary)] flex items-center justify-center text-white">
                      <IconComponent className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--text-color)]">
                        {contact.label}
                      </h3>
                      <OutsideLink
                        href={contact.link}
                        className="text-[var(--text-color-muted)] hover:text-[var(--text-color-primary)] transition-colors"
                      >
                        {contact.value}
                      </OutsideLink>
                      <p className="text-sm text-[var(--text-color-muted)]">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* 社交媒體連結 (如果有的話) */}
            {/* {socialLinks.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-color)] mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-[var(--background-color-primary)] border border-[var(--border-color)] hover:border-[var(--border-color-focus)] flex items-center justify-center text-[var(--text-color-muted)] hover:text-[var(--text-color-primary)] transition-all duration-300"
                      >
                        <IconComponent className="text-xl" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )} */}
          </motion.div>

          {/* 右側 - 聯繫表單 */}
          <motion.div variants={fadeInItem}>
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 姓名輸入 */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--text-color)] mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--background-color-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-color)] placeholder-[var(--text-color-muted)] focus:border-[var(--border-color-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color-primary)]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* 電子郵件輸入 */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--text-color)] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--background-color-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-color)] placeholder-[var(--text-color-muted)] focus:border-[var(--border-color-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color-primary)]/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* 訊息輸入 */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--text-color)] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--background-color-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-color)] placeholder-[var(--text-color-muted)] focus:border-[var(--border-color-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color-primary)]/20 transition-all resize-vertical"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* 提交按鈕 */}
                <button
                  type="submit"
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg",
                    "btn-primary"
                  )}
                >
                  <SendOutlined />
                  Send Message
                </button>
              </form>

              <p className="text-sm text-[var(--text-color-muted)] mt-4 text-center">
                We&apos;ll get back to you soon.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
