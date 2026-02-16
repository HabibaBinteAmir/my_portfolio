import React from 'react'

export const Banner = () => {
  return (
    <>
    <div className=' relative w-full h-100  md:h-125 lg:h-150 '>
      {/* img */}
      <img src="/banner.png" alt="banner Img "  className='w-full h-full object-cover'/>
      {/* overly */}
      <div className=" absolute  inset-0 bg-black/30 "></div>

    </div>
    </>
  )
}
