import { Menu } from "lucide-react"
import { Button } from "../components/Button"
import { useState } from "react"

 const navlink=[
    {href :"#about", label :"About"},
    {href :"#experience", label :"Experience"},
    {href :"#project", label :"Project"},
    {href :"#textmonial", label :"Testmonial"},
  
 ]
export const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
  return (
   <header className="  fixed z-50 i bg-transparent py-5 top-0 left-0 right-0 ">
    <nav className="container mx-auto   px-5 flex justify-between items-center  ">
        <a href="#"
        className="text-xl font-bold  hover:text-primary duration-300 "
        >H.</a>
        {/* desktop vertion */}
        <div>
            <div className="hidden md:flex gap-5 px-3 glass rounded-full" >
                {navlink.map((link,index)=> (
                <a href={link.href} key={index} className="text-muted-foreground text-sm px-3 py-3 hover:text-primary rounded-full duration-300 ">{link.label} </a>
                ))}
            </div>
        </div>
        {/* buttonn */}
        <div className="hidden md:block items-center ">
           <Button size="sm">Contact me</Button>
        </div>
        {/* Mobile Menu button */}
        <div className="md:hidden p-2 text-foreground" 
        onClick={()=> setIsMobileMenuOpen((prev) => !prev)}>
            <button>
                <Menu size={24}/>
            </button>
        </div>
       
    </nav>
     {/* Mobile nav bar */}
       {isMobileMenuOpen &&(
         <div className="md:hidden glass_strong px-5 py-5  min-h-screen justify-center items-center">
            <div className=" flex flex-col gap-y-10 items-center">
               {navlink.map((link,index)=>
               <a href={link.href} key={index} className="text-lg font-semibold " >{link.label}</a>

            )}
             <Button size="default" className="w-[80%]">Contact me</Button>
            </div>
        </div>

       )}
   </header>
   
  )
}
