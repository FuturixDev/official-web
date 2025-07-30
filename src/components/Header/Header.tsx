"use client";
import { useState } from "react";
import { Collapse } from "fanyucomponents";
import { routes } from "./routes";
import { BurgerMenu } from "./BurgerMenu";
import Image from "next/image";
import { NavLink } from "./NavLink";

export const Header = () => {
  const [menuShow, setMenuShow] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-1080 w-full bg-[var(--background-color)]/75 backdrop-blur-md">
      <nav className="flex flex-col" role="navigation" aria-label="主導航">
        <div className="container flex items-center justify-between flex-nowrap w-full">
          <NavLink href="/" className="h-8 w-auto">
            <Image
              priority
              alt="Futurix Logo"
              src="/logo.png"
              width={1475}
              height={261}
              className="h-full w-full object-contain"
            />
          </NavLink>

          <div className="text-2xl lg:hidden">
            <BurgerMenu
              checked={menuShow}
              onChange={() => {
                setMenuShow((prev) => !prev);
              }}
              aria-label={menuShow ? "關閉選單" : "開啟選單"}
              aria-expanded={menuShow}
              aria-controls="mobile-nav"
            />
          </div>

          <div className="hidden lg:flex text-xl font-semibold gap-6">
            {routes.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <Collapse
          state={menuShow}
          className="slide-collapse lg:hidden"
          id="mobile-nav"
          role="menu"
        >
          <div className="flex flex-col w-full text-xl font-semibold text-center">
            {routes.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setMenuShow(false)}
                className="p-3"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </Collapse>
      </nav>
    </header>
  );
};
