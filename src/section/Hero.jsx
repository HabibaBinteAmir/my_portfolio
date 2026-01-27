import React from 'react'

export const Hero = () => {
  return (
    <section className='min-h-screen relative  flex items-center  overflow-hidden'>
      <div className=' inset-0 absolute'>
        <img src="/public/hero-bg.jpg" alt="banner img" className='w-full h-full  object-cover opacity-40' />
        <div className=' absolute inset-0  bg-linear-to-b from-background/20 via-background/80 to-background'/>
      </div>
    </section>
  )
}
