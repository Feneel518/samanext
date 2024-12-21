import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, FC } from "react";
import { ArrowRight } from "lucide-react";

interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  showArrow?: boolean;
}

const ShinyButton: FC<ShinyButtonProps> = ({
  className,
  children,
  showArrow = true,
  href,
  ...props
}) => {
  return (
    <Link
      href={href ? href : "#"}
      className={cn(
        "group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-samaPrimary dark:bg-robin_egg_blue-900 px-8 text-base/7 font-medium text-sama-secondary transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="size-4 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]"></ArrowRight>
        )}
      </span>
      <div className="ease-[cubic-bezier(0.19, 1, 0.22, 1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-black opacity-10 transition-all duration-500 group-hover:left-[120%] "></div>
    </Link>
  );
};

export default ShinyButton;
