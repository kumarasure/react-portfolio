import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
// import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'>
      <h1>Contact</h1>
      <div className='contact-icon'
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >

        <a href="https://www.google.com" target='_blank' className='items'>
        <FaSquareInstagram  className='icons'/>
        </a>
        <a href="#" target='_blank' className='items'>
        <BiLogoGmail  className='icons'/>
        </a>

        <a href="#" className='items'>
          <FaYoutube className='icons' />
        </a>
        <a href="https://www.linkedin.com/in/surendra-kannaujiya-86b524319/" className='items'>
          <FaLinkedin  className='icons'/>
        </a>
        <a href="#" className='items'>
          <FaSquareXTwitter  className='icons'/>
        </a>
        <a href="https://github.com/kumarasure" className='items'>
         <FaGithubSquare className='icons' />
        </a>
        
      </div>
    </div>
    </>
  )
}

export default Contact