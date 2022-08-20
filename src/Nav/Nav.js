import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'


const Nav = () => {
  return (
           <nav>
             <div className='nav-element'>
                <p>Caleb Adebayo</p>
                <div className='nav-link'>
                <Link to ='/About'>About</Link>
                <Link to ='/Projects'>Projects</Link>
                <Link to='/Contact'>Contact</Link>
                </div>
                </div>
            </nav>
            
        
  )
}

export default Nav