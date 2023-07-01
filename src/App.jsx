import { HashRouter as Router } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}   
        </div>
      </div>
      <div className="flex justify-center social-media bg-primary">
          <a href="https://github.com/Sanjay0712" target="_blank"><i className='bx bxl-github'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://www.linkedin.com/in/sanjay-kumar-54b675160/" target="_blank"><i className='bx bxl-linkedin'></i></a>
      </div> 
      <div className="flex justify-center bg-primary">
        Copyright © 2023 Sanjay. All rights reserved.
        <br />
        <br />
      </div>
    </Router>
  )
}

export default App
