import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile_image.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a highly motivated and dedicated undergraduate pursuing a Bachelor of Information and Communication Technology Honours degree at Uva Wellassa University, Sri Lanka. With a solid foundation in web and mobile development, cloud computing, and database management, I am passionate about leveraging technology to create innovative solutions that address real-world challenges. My academic journey and project experiences, such as developing BiteVote and B Stylish, have equipped me with hands-on skills in modern tools like React, Flutter, Firebase, and AWS.</p>
                    <p>Beyond technical expertise, I bring strong problem-solving, communication, and teamwork skills, which I honed through academic collaborations and independent projects. I thrive in dynamic environments where creativity and critical thinking drive impactful results. With a keen interest in continuous learning, I have obtained certifications in cybersecurity, API development, and front-end design, further solidifying my readiness to excel in the tech industry.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"40%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-certifications">
            <div className="about-certification">
                <h1>Diploma in English Language and Literature </h1>
                <p>Aquinas College of Higher Studies</p>
            </div>
            <hr />
            <div className="about-certification">
                <h1>Postman API Fundamentals Student Expert </h1>
                <p>Postman Academy</p>
            </div>
            <hr />
            <div className="about-certification">
                <h1>Introduction to Cybersecurity </h1>
                <p>CISCO Networking Academy</p>
            </div>
        </div>
    </div>
  )
}

export default About