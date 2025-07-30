"use client";
"use client";

import { fadeInItem, staggerContainer } from "@/libs/motion";
import { cn } from "@/utils/className";
import { CopyrightOutlined, MailOutlined, SendOutlined } from "@ant-design/icons";
import { OutsideLink } from "fanyucomponents";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { email, phoneNumber } from "@/libs";
import Link from "next/link";
import { Title } from "./Index/Title";

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

type FormField = "name" | "email" | "message";

const formFields: Array<{
  name: FormField;
  label: string;
  placeholder: string;
  required?: boolean;
  tag: "input" | "textarea";
  className?: string;
}> = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    required: true,
    tag: "input",
    className: "text-lg",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
    tag: "input",
    className: "text-lg",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Type your message here...",
    required: true,
    tag: "textarea",
    className: "text-lg",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  const [formData, setFormData] = useState<Record<FormField, string>>({
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
    <footer className="w-full flex flex-1 bg-black">
      <div className="container">
        {/* 標題區域 */}
        <motion.div
          variants={fadeInItem}
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <Title>Contact Us</Title>
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
          </motion.div>

          {/* 右側 - 聯繫表單 */}
          <motion.div variants={fadeInItem}>
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-[var(--text-color)] mb-2"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-red-500"> *</span>
                      )}
                    </label>
                    <field.tag
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full px-4 py-3 bg-[var(--background-color-secondary)] border border-[var(--border-color)] rounded-lg placeholder-[var(--text-color-muted)] focus:border-[var(--border-color-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color-primary)]/20 transition-all",
                        field.className
                      )}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

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

        {/* 聯繫信息底部區域 */}
        <motion.div
          className="text-[var(--text-color-muted)] flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[var(--border-color)] mt-8 pt-8"
          initial="hiddenBottom"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInItem}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <span className="text-lg">
              {email}
            </span>
            <span className="text-lg">
              {phoneNumber}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="#top"
              className="text-lg hover:text-[var(--text-color-primary)] hover:underline"
            >
              Back to top
            </Link>
            <div className="flex gap-2 text-sm">
              <CopyrightOutlined /> {year}, All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
