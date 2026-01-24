
import './App.css'
import { Navbar } from './layout/Navbar'
import { About } from './section/About'
import { Experience } from './section/Experience'
import { Hero } from './section/Hero'
import { Project } from './section/Project'
import { Textimonial } from './section/Textimonial'

function App() {


  return (
   <div className='min-h-screen overflow-x-hidden'>
    <Navbar/>
    <main>
     <Hero/>
     <About/>
     <Project/>
     <Experience/>
     <Textimonial/>

    </main>
   </div>
  )
}

export default App
