"use client";
import Link from "next/link";
import { useState } from "react";
import { Collapse } from "fanyucomponents";
import { routes } from "./routes";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-1080 w-full bg-[var(--background-color)]/75 backdrop-blur-md">
      <nav className="flex flex-col" role="navigation" aria-label="主導航">
        <div className="container flex items-center justify-between flex-nowrap w-full">
          <Link className="h-16 w-auto p-2" href="/">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              alt="Logo"
              src="/logo.png"
              className="h-full w-full object-contain"
            />
          </Link>
          <div className="text-2xl lg:hidden">
            <BurgerMenu
              checked={menuShow}
              onChange={() => setMenuShow((prev) => !prev)}
              aria-label={menuShow ? "關閉選單" : "開啟選單"}
              aria-expanded={menuShow}
              aria-controls="mobile-nav"
            />
          </div>
          <div className="hidden lg:flex text-2xl font-bold gap-6">
            {routes.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Collapse
          state={menuShow}
          className="slide-collapse lg:hidden"
          id="mobile-nav"
        >
          <div className="flex flex-col w-full text-2xl font-bold text-center">
            {routes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-4"
                onClick={() => setMenuShow(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Collapse>
      </nav>
    </header>
  );
};
