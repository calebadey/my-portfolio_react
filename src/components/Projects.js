import React from 'react'
import img1 from '../Images/img_2.jpg'
import img2 from '../Images/img-3.jpg'
import './Projects.css'

const Projects = () => {
  return (
    <div className='project'>
    <div className='projects-container'>
        <div className='first-project'>
           <div className='left-project'>
              <h3>SOFTWARE DEVELOPER</h3>
              <h1>Hello, my name is Caleb Tolorunleke Adebayo</h1>
              <p>
               I am a IT Professional Engineer/Software Developer with a diversity of skills in
               HTML/CSS, JavaScript and a Basic Developement skill in React JS. 
              </p>
              <a href='https://github.com/calebadey?tab=repositories'><button className='project'>Projects</button></a>
              <a href='https://www.linkedin.com/in/calebtol'><button className='linkedin'>LinkedIn</button></a>
           </div>
           <img src={img1} alt='profile-img' className='img-one'/>
        </div>
       
    </div>
    <div className='project-1'>
    <h1>Projects</h1>
    <div className='content'>
      <div className='project-content'>
        <div className='card-house'>
         <div className='card'>
         <div className='card-item'>
           <h2>JavaScript Weather API</h2>
           <p>
               I built a simple, yet fully functional weather web app.
               The weather web app is able to consume a chosen weather API in order to populate rightly
           </p>
           <button>View Projects</button>
           </div>
         </div>
         <img src={img2} alt='img1'/>
      </div>
      <div className='card-house'>
      <img src={img2}  alt='img1'/>
         <div className='card'>
         <div className='card-item'>
         <h2>List of News Page from an API</h2>
         <p>I created this personal projecT in order to display different news items in a grid format through the use 
            of an API
         </p>
         <button>View Projects</button></div>
         </div>
     </div>
     <div className='card-house'>
         <div className='card'>
         <div className='card-item'>
         <h2>Simple Mathematics Calculator</h2>
         <p>
            I created a fully functional basic valculator with basic mathematrics functionalities
         </p>
         <button>View Projects</button>
         </div>
         </div>
         <img src={img2} alt='img1'/>
     </div>
    </div>
    </div>
 </div>
    </div>
  )
}

export default Projects