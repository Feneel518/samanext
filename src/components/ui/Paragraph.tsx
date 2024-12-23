import { cn } from "@/lib/utils";
import { FC } from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "text-lg lg:text-xl text-pretty text-gray-700 dark:text-gray-400 font-light",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;
