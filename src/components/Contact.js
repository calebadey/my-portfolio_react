import React from 'react'
import './Contact.css'
import { BsLinkedin} from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';
import {BsEnvelopeFill} from 'react-icons/bs';

const Contact = () => {
  return (
    <div className='contact'>
     <div className='contact-contact'>
       <h1>Contact</h1>
       <div className='contact-wrapper'>
         <form>
            <div className='form-input'>
             <label>Name</label>
             <input type='text' className='input-field'></input>
            </div>
            <div className='form-input'>
            <label>Email</label>
            <input type='text' className='input-field'></input>
           </div>
           <div className='form-input'>
           <label>Message</label>
           <textarea name="comment" className='text-field'/>
          </div>
          <div className='btn-contain'>
              <div></div>
              <button>Send</button>
          </div>
          <div className='icons'>
          <AiFillInstagram className='icon'/>
             <BsLinkedin className='icon'/>
             <BsEnvelopeFill className='icon'/>
          </div>
          <span>Caleb Tolorunleke Adebayo' 2022</span>
         </form>
       </div>
       </div>
    </div>
  )
}

export default Contact