import { cn } from "@/utils/className";

export const Title = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "mb-4 text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[var(--text-color-primary)] to-[var(--text-color-secondary)] bg-clip-text text-transparent",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};
