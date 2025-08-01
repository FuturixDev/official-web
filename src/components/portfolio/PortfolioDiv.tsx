import { PortfolioItem } from "@/types/portfolio";
import { cn } from "@/utils/className";
import { OutsideLink, OverrideProps } from "fanyucomponents";

type PortfolioDivProps = OverrideProps<
  React.HTMLAttributes<HTMLDivElement>,
  {
    item: PortfolioItem;
  }
>;

export const PortfolioDiv = ({ item, ...rest }: PortfolioDivProps) => {
  return (
    <div className="text-center mb-12" {...rest}>
      <OutsideLink href={item.url}>
        <h3
          className={cn(
            "text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl"
          )}
        >
          {item.title}
        </h3>
      </OutsideLink>
    </div>
  );
};
