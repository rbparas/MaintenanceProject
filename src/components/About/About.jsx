import React from 'react'
import Image1 from '../../assets/images/watertreatment.jpg'
import Image2 from '../../assets/images/p3.jpg'
import AboutBg from '../../assets/images/p5.jpg'
import {FaArrowRightLong} from 'react-icons/fa6'
import './About.css'

export default function About(props) {
    const {title} = props
    const aboutBg = {
        backgroundImage: `linear-gradient(to bottom right,rgba(255, 255, 255, 1), rgba( 255, 255, 255, 0.9)), url(${AboutBg})`,
        height: '120vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
  return (
    <>
        <div className="about-container" style={aboutBg}>
            <div className="about-left">
                <img src={Image1} alt="aboutimage1" className="big-image"/>
                <img src={Image2} alt="aboutimage2" className="small-image"/>
            </div>
            <div className="about-right">
                <p className="about-title">
                {title}
                </p>                
                <h1>Your Business Name LLC</h1>
                <p>We are a locally owned operated company with 20 years of industry experience.
                    We value honesty and integrity in all aspects of our business. We offer a
                    variety of Home improvement services that are customizable to each individual project.
                </p>
                <p>We Specialize in Handyman work and a variety of related service and repaire projects.
                    We pride ourselves on the quality of our work as well as our commitment to outstanding results.
                    We look forward to building lasting relationships with our clients and gurantee your satisfaction!
                </p>
                <button>Read More <FaArrowRightLong /></button>
            </div>
        </div>
    </>
    
  )
}
