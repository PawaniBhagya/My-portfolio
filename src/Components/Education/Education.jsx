import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Education = () => {
  return (
    <div id='education' className='education'>
        <div className="education-title">
            <h1>My Education</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="education-container">
          {Services_Data.map((service,index) => {
            return <div key={index} className='education-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='education-readmore'>
                  <p>Read More</p>
                  <img src={arrow_icon} alt="" />
                </div>
              </div>
          })}
        </div>
    </div>
  )
}

export default Education