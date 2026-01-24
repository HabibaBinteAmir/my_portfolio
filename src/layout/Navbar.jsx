 const navlink=[
    {href :"#about", label :"About"},
    {href :"#experience", label :"experience"},
    {href :"#project", label :"Project"},
    {href :"#textmonial", label :"textmonial"},
    {href :"#contact", label :"Contact"},
 ]
export const Navbar = () => {
  return (
   <header>
    <nav>
        <a href="http://">H.</a>
        {/* desktop vertion */}
        <div>
            <div >
                {navlink.map((link,index)=> (
                <a href={link.href} key={index}>{link.label} </a>
                ))}
            </div>
        </div>
    </nav>
   </header>
  )
}
