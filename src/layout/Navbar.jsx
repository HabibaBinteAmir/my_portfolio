import { Button } from "../components/Button"

 const navlink=[
    {href :"#about", label :"About"},
    {href :"#experience", label :"experience"},
    {href :"#project", label :"Project"},
    {href :"#textmonial", label :"textmonial"},
  
 ]
export const Navbar = () => {
  return (
   <header className="  fixed bg-transparent py-5 top-0 left-0 right-0 ">
    <nav className="container mx-auto px-5 flex justify-between items-center  ">
        <a href="#"
        className="text-xl font-bold tracking-tight hover:text-primary duration-300 transition-all"
        >H<span>.</span></a>
        {/* desktop vertion */}
        <div>
            <div className="flex gap-5 px-3 glass rounded-full" >
                {navlink.map((link,index)=> (
                <a href={link.href} key={index} className="text-muted-foreground text-sm px-3 py-3 hover:text-primary rounded-full duration-300 transition-all">{link.label} </a>
                ))}
            </div>
        </div>
        {/* buttonn */}
        <div className=" flex items-center ">
           <Button size="sm">Contact me</Button>
         
        </div>
    </nav>
   </header>
   
  )
}
