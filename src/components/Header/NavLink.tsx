import { cn } from "@/utils/className";
import Link from "next/link";

export const NavLink = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithRef<typeof Link>) => (
  <Link
    className={cn(
      `hover:scale-105 transition-transform duration-200`,
      className
    )}
    {...rest}
  >
    {children}
  </Link>
);
