import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function SecondaryPreviewButton({className}: {className?: string}) {
    return (
        <button className={`mt-10 md:mt-12 lg:mt-16 flex items-center justify-center gap-3 rounded-xl bg-[#2d2d2d] px-6 py-3 2xl:py-3 text-white transition cursor-pointer text-sm cta-button relative overflow-hidden w-full ${className}`}>
            <div className="overflow-hidden">
                <div className="original-text duration-300">Preview Membership</div>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black absolute top-1/2 -translate-y-1/2 right-6 overflow-hidden z-10">
                <ArrowRight size={16} />
            </span>
        </button>
    )
}
