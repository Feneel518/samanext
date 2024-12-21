import { cn } from "@/lib/utils";
import { FC } from "react";

interface headingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: FC<headingProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "font-syne text-5xl gray-grad sm:text-6xl lg:text-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Heading;
