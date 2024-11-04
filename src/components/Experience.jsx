import React from 'react'
import experience from "./data/experience.json"

const Experience = () => {
  return (
    <>
    <div className='container exp text-center' id='experience'>
      <h1 style={{marginRight:"100%"}}>Experience</h1>
      {
        experience.map((data)=>{
            return(
              <>
              <div key={data.id} className='exp-items'
              data-aos="zoom-in"
              data-aos-duration="1000"
              >
               <div className='left'>
                <img src={`/assets/${data.imageSrc}`} />
               </div>
               <div className='right'>
                <h2>{data.role}</h2>
               <span style={{color:"yellowgreen"}}>
               {data.startDate} {" "} {data.endDate} 
                </span> 
                <span style={{color:"yellow"}}>
                <h4> {data.location}</h4>
                </span>
               
                <h5>{data.experiences[0]}</h5>
                <h5>{data.experiences[1]}</h5>
               </div>
              </div>
              </>
            )
        })
      }
    </div>
    </>
  )
}

export default Experience