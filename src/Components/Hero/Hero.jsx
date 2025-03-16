import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

  const handleResumeClick = (event) => {
    event.preventDefault(); //prevents the default action of the event from happening

    const resumeUrl = '/PawaniBhagya.pdf';

    //Check if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile: Open PDF in a new tab
      window.location.href = resumeUrl;
    } else {
      // Desktop: Open in a new tab
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Pawani Bhagya,</span> ICT Undergraduate in Sri Lanka.</h1>
        <p>I'm a motivated and committed undergraduate specializing in software technology at Uva Wellassa University of Sri Lanka. I am excited for an internship opportunity that will allow me to engage my academic knowledge into practice in real-world situations. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
              <a href="/PawaniBhagya.pdf" onClick={handleResumeClick} style={{color:"white", textDecoration:"none"}}>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
