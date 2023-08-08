import React, {useState, useEffect} from 'react'
import './Hero.css'
import heroImage from '../../assets/images/hero-image.jpg'
import Image1 from '../../assets/images/PLUMBING.jpg'
import Image2 from '../../assets/images/prjImg3.jpg'
import Image3 from '../../assets/images/p6.jpg'
import Image4 from '../../assets/images/p4.jpg'
import Image5 from '../../assets/images/p2.jpg'

import {FaArrowRightLong} from 'react-icons/fa6'


export default function Hero() {    
    const heroBg = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba( 66, 115, 193, 0.8)), url(${heroImage})`,
        height: '88vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    const Images = [Image1, Image2, Image3, Image4, Image5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 10000); 
    return () => clearInterval(timer);
  }, []);
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <>
        <div className="hero-container" id='home'>
            <div className="herosection" style={heroBg}>
                <div className="lefttext">
                    <p>Building with Confidence</p>
                    <h1>Building <span>And</span> Maintaining <span>Your Dreams</span></h1>
                    <p>Fast, Friendly home repair service done right the first time!!</p>
                    <button>Explore More <span><FaArrowRightLong /></span></button>
                </div>
                <div className="slider">
                    <img src={Images[currentImageIndex]} alt={`Slider Image ${currentImageIndex + 1}`} style={{ width: '100%', height: '590px' }} />
                    <div className="radio-buttons">
                    {Images.map((_, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                value={index}
                                checked={currentImageIndex === index}
                                onChange={() => handleImageChange(index)}
                            />
                        </label>
                    ))}
                </div>                 
                </div>                      
            </div>
            
            <div className="hero-banner">
                    <h1>20+ Years of Experience</h1>
            </div>      
        </div>
    </>
  )
}
