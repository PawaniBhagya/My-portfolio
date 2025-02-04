import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

  const handleResumeClick = () => {
    window.open('/PawaniBhagya.pdf', '_blank'); //opens the pdf in a new tab
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Pawani Bhagya,</span> ICT Undergraduate in Sri Lanka.</h1>
        <p>I'm a motivated and committed undergraduate specializing in software technology at Uva Wellassa University of Sri Lanka. I am excited for an internship opportunity that will allow me to engage my academic knowledge into practice in real-world situations. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume" onClick={handleResumeClick}>My Resume</div>
        </div>
    </div>
  )
}

export default Hero