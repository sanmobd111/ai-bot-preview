import { ArrowRight } from "lucide-react";

type AnimatedPreviewButtonProps = {
    text?: string;
    className?: string;
    bgColor?: string;
    textColor?: string;
    arrowBgColor?: string;
    hoverBgColor?: string;
    arrowColor?: string;
};

export default function AnimatedPreviewButton({
    text = "Preview Membership",
    className = "",
    bgColor = "#ffffff",
    textColor = "#000000",
    arrowBgColor = "#262626",
    hoverBgColor = "#C2C1C1",
    arrowColor = "#ffffff",
}: AnimatedPreviewButtonProps) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            className={`group relative flex items-center gap-3 overflow-hidden rounded-xl px-6 py-2.5 2xl:py-3 text-sm 2xl:text-base transition mt-10 md:mt-12 lg:mt-16 cursor-pointer  ${className}`}
        >
            {/* Hover layer */}
            <span
                style={{
                    backgroundColor: hoverBgColor,
                    color: textColor,
                }}
                className="
          absolute inset-0 z-[2]
          flex items-center justify-center
          pr-8
          translate-y-full
          transition-transform duration-300
          group-hover:translate-y-0
        "
            >
                {text}
            </span>

            {/* Original text */}
            <div className="overflow-hidden pr-10 w-full flex justify-center">
                <div className="duration-300 group-hover:-translate-y-[200%]">
                    {text}
                </div>
            </div>

            {/* Spacer */}
            {/* <span className="h-6 w-6 opacity-0" /> */}

            {/* Arrow */}
            <span
                style={{ backgroundColor: arrowBgColor }}
                className="
          absolute right-6 top-1/2 z-10
          flex h-6 w-6 -translate-y-1/2
          items-center justify-center
          overflow-hidden rounded-full text-white
        "
            >
                <div className="flex -translate-x-4 items-center gap-4 transition-transform duration-300 group-hover:translate-x-4">
                    <ArrowRight size={16} className="w-4 shrink-0"
                        style={{ color: arrowColor }}
                    />
                    <ArrowRight size={16} className="w-4 shrink-0"
                        style={{ color: arrowColor }}
                    />
                </div>
            </span>
        </button>
    );
}