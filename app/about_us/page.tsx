import BannerSection from '@/components/about_us/banner_section'
import OurStory from '@/components/about_us/our_story'
import JoinFounderSection from '@/components/home/join-founder-section'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#f4f3f1] pt-42 space-y-16 md:space-y-24 pb-12 md:pb-16'>
      <BannerSection />
      <OurStory />
      <JoinFounderSection />
    </div>
  )
}

export default page
