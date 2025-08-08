import { cn } from "@/utils/className";
import Link from "next/link";

export const NavLink = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithRef<typeof Link>) => (
  <Link
    className={cn(
      `hover:brightness-125 transition-all duration-200`,
      className
    )}
    {...rest}
  >
    {children}
  </Link>
);
