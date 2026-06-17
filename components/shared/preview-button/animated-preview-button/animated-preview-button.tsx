import { ArrowRight } from 'lucide-react'
import "./animated-preview-button.css"

export default function AnimatedPreviewButton({ className }: { className?: string }) {
    return (
        <button className={`mt-10 md:mt-12 lg:mt-16 flex items-center gap-3 rounded-xl bg-white px-6 py-2.5 2xl:py-3 text-black transition cursor-pointer text-sm cta-button relative overflow-hidden group/cta-button ${className}`}>
            <div className="overflow-hidden">
                <div className="original-text duration-300">Preview Membership</div>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-white opacity-0">
                <ArrowRight size={16} />
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-white absolute top-1/2 -translate-y-1/2 right-6 overflow-hidden z-10">
                <div className="flex items-center gap-4 transition-transform duration-300 group-hover/cta-button:translate-x-4 -translate-x-4">
                    <ArrowRight size={16} className="w-4 shrink-0" />
                    <ArrowRight size={16} className="w-4 shrink-0" />
                </div>
            </span>
        </button>
    )
}
