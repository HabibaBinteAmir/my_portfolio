import React from 'react'
import { Button } from '../components/Button'
import { ArrowBigLeft, ArrowRight, Download } from 'lucide-react'
import { AnimatedBorderButton } from '../components/AnimatedButton'

export const Hero = () => {
  return (
    
    <section className='min-h-screen relative  flex items-center  overflow-hidden'>
      {/* // background img */}
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
{/* context section */}
      <div className=" container mx-auto px-6 pt-20 md:pt-28 pb-30 relative z-10 ">
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left side  */}
          <div >
            <div className="animate-fade-in">
              <span className='inline-flex items-center gap-2 px-2 py-2  mb-2 rounded-full glass text-sm text-primary '>
                <span className=' w-2 h-2 bg-primary  rounded-full animate-pulse '/>
                Frontend Developer . React Specialist 
                </span>
            </div>
            {/* heading text */}
            <div className="">
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in  animation-delay-100'>Crafting  <span className='text-primary glow-text '>digital</span>
              <br />
               <span>experiences with </span>
               <br />
               <span className='font-serif font-normal text-white italic'>pricision</span>
               </h1>
               <p className='text-lg text-muted-foreground text max-w-lg animate-fade-in py-5  animation-delay-200'>Hi, I'm Habiba - a Frontend Developer , Specialisizing in React , Next.js and typescript. I build scalable , performant web application that users love.</p>
            </div>
            {/* <Button size='lg'>Contact Me<ArrowBigLeft/> </Button> */}
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
          </div>
          {/* right side */}
          <div className="">
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  )
}
