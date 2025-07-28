"use client";
import { CopyrightOutlined } from "@ant-design/icons";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-1 bg-black">
      <div className="container flex justify-between flex-col md:flex-row gap-4 md:gap-0">
        {/* 左側內容 */}
        <div className="flex flex-col">
          <div className="text-base md:text-lg flex flex-col gap-2 text-[var(--text-color-muted)]">
            <div className="flex gap-2">
              <CopyrightOutlined /> {year}, All rights reserved.
            </div>
           
          </div>
        </div>

        {/* 右側內容 */}
        <div className="flex flex-col items-end"></div>
      </div>
    </footer>
  );
};
