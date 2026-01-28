import React from 'react'

export const Hero = () => {
  return (
    // background img
    <section className='min-h-screen relative  flex items-center  overflow-hidden'>
      <div className=' inset-0 absolute'>
        <img src="/hero-bg.jpg" alt="banner img" className='w-full h-full  object-cover opacity-40' />
        <div className=' absolute inset-0  bg-linear-to-b from-background/20 via-background/80 to-background'/>
      </div>
      {/* //green dots */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div 
          key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
