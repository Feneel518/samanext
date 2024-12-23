import { FC } from "react";

interface TextChangeButtonProps {
  firstText: string;
  hoveredtext?: string;
}

const TextChangeButton: FC<TextChangeButtonProps> = ({
  firstText,
  hoveredtext,
}) => {
  return (
    <div className="relative inline-block overflow-hidden p-1 border rounded-xl border-gray-200/50">
      <button className="relative px-6 py-2 h-6 w-20 rounded transition duration-300 group overflow-hidden">
        <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-full">
          {firstText}
        </span>
        <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          {hoveredtext ? hoveredtext : firstText}
        </span>
      </button>
    </div>
  );
};

export default TextChangeButton;
