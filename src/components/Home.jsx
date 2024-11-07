import React,{useEffect, useRef} from "react"
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'


const Home = () => {
  const typedRef =useRef (null)
  useEffect(() => {
    const options = {
              strings:["Welcome to my profile", "My Name is Surendra Kumar","I'm frontend developer",
                "(React Developer)"
              ],
              typeSpeed:50,
              backSpeed:50,
              loop:true
    }
    const typed = new Typed(typedRef.current, options)
  
    return () => {
     typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className='container homeContainer' id="home"data-aos="fade-up-right"data-aos-duration="1000">
        <div className='left'>
          <h1 ref={typedRef}> </h1>
          <a href={pdf} view="surendra.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>
        </div>
        <div className='right'> 
          <div className='img'data-aos="fade-up-left"data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt='heroImage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home