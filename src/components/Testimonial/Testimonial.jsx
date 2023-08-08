import React, { useState } from 'react';
import './TestimonialNew.scss';
import johnImg from "../../assets/images/man.jpg";
import melindaImg from "../../assets/images/girl.jpg";
import michaelImg from "../../assets/images/man-2.jpg";
import slideImg from "../../assets/images/test-sliderbg.jpg";

export default function Testimonial(props) {
  const { title } = props;
  const slideItems = [
    {
      name: "John F.Kennedy",
      testimonial: `We have used Your Business Name LLC for several years and consider Tim and his men as a part of our company.\
                            Great customer service and very fast service. I'm thankful to have such a reliable, express and\
                            trustworthy company to work with. `,
      ppic: johnImg
    },
    {
      name: "Melinda T. Johnson",
      testimonial: 'Some Text',
      ppic: melindaImg
    },
    {
      name: "Michael Ferdinand",
      testimonial: `We have used Your Business Name LLC for several years and consider Tim and his men as a part of our company.\
                            Great customer service and very fast service. I'm thankful to have such a reliable, express and\
                            trustworthy company to work with. `,
      ppic: michaelImg
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (event) => {
    setCurrentSlide(parseInt(event.target.value));
  };

  return (
    <>
      <div className="test-container" id='testimonial'>
        <div className="left">
          <p className="testimonial-title">{title}</p>
          <h1>Client's Testimonials</h1>
          <p className='test-text'>Here's what our Customers are saying about Your Business Name LLC</p>
        </div>
        <div className="right" style={{ backgroundImage: `linear-gradient(rgba(37, 90, 156, 0.8),rgba(37, 90, 156, 0.8)),url(${slideImg})` }}>
          <div className="test-slider">
            <ul className="slider-list">
              {
                slideItems.map((slide, index) => (
                  <li key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                    <div className="slide-content">
                      <p>{slide.testimonial}</p>
                      <h1>{slide.name}</h1>
                    </div>
                    <div className="user-profile">
                      <img src={slide.ppic} alt={slide.name} />
                    </div>
                  </li>
                ))
              }
            </ul>  
            <div className="radio-buttons">
              {
                slideItems.map((_, index) => (
                  <label key={index} className={`radio-label ${currentSlide === index ? 'active' : ''}`}>
                    <input
                      type="radio"
                      value={index}
                      checked={currentSlide === index}
                      onChange={handleSlideChange}
                    />
                    <span className="radio-button" />
                  </label>
                ))
              }
            </div>          
          </div>          
        </div>
      </div>
      
    </>
  )
}
