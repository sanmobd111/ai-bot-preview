import { Plus } from 'lucide-react'
import React, { useState } from 'react'
const logos = [
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/rosewood-352900933e86425d19fabe30397929fade74db6ee0960d97e645267e0dca6ba2.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/peninsula-60e5580735574547253b3fb8abd8c49e00353ef0adb8703e66141fc787df3c5d.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/hilton-8d93e64ace94e0a2121347588257877d7bc673f9751d991baadae98f2e415cf1.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/raffles-db154f1f0d8758a897553a5082cad669855cd76bebfc0c3a35bf7452ab40e8de.svg"
]

export default function BenefitCard({ card }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[9/10.8]">
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className={`absolute inset-0 bg-black/50 to-transparent duration-300 ${open ? "opacity-100" : "opacity-20"}`} />

      <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
        onClick={() => setOpen(!open)}
      >
        <Plus size={20} className={`duration-300 cursor-pointer ${open ? "rotate-45" : "rotate-0"}`} />
      </button>

      <div className="absolute bottom-5 left-3  text-white">
        <div className='w-fit flex items-center gap-2 justify-center rounded-full py-1.5 px-3  backdrop-blur-md  bg-white/15 '>
          {card.icon}
          <span className="rounded-full text-xs ">
            {card.title}
          </span>
        </div>

        <div className={`mr-3 mt-2 overflow-hidden duration-300 ${open ? "max-h-96" : "max-h-0"
          }`}>
          <div className='text-sm leading-[1.4]'>Member-only negotiated rates and privileges at 500+ luxury hotels worldwide, many 30–50% off </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className='w-full aspect-[8/3] bg-white/15 rounded-sm backdrop-blur-md flex justify-around items-center'>
              <img src={logos[0]} alt="" className=" flex items-center justify-center opacity-70 w-20" />
            </div>
            <div className='w-full aspect-[8/3] bg-white/15 rounded-sm backdrop-blur-md flex justify-around items-center'>
              <img src={logos[1]} alt="" className=" flex items-center justify-center opacity-70 w-20" />
            </div>
            <div className='w-full aspect-[8/3] bg-white/15 rounded-sm backdrop-blur-md flex justify-around items-center'>
              <img src={logos[2]} alt="" className=" flex items-center justify-center opacity-70 w-20" />
            </div>
            <div className='w-full aspect-[8/3] bg-white/15 rounded-sm backdrop-blur-md flex justify-around items-center'>
              <img src={logos[3]} alt="" className=" flex items-center justify-center opacity-70 w-10" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
