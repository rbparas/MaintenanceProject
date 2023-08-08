import React from 'react'
import './Footer.scss'
import {FaMapLocationDot,FaPhone,FaEnvelope,FaClock,FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa6'

export default function Footer() {
    const menus1 = ['About Us','Portfolio','Testimonials','Services','Contact']
    const menus2 = ['Facebook','Instagram','Youtube','Twitter','Linkedin']
    const bInfo = [
        {
            address: 'Laporte, IN 46350',
            phone: '(123) 123-1234',
            email: 'yourbusiness@business.com',
            bhrs: 'Mon-Fri: 9 am-5 pm',
            
        }
    ]
  return (
    <>
        <div className="footer-container">
            <div className="foot-1">
                <h3>Business Logo</h3>
                <p>Locally owned and operated company with 20 years of industry experience. We value honesty and integrity in all
                    aspects of our business.
                </p>
            </div>
            <div className="foot2">
                <h3 className="title">Quick Links</h3>
                {
                    menus1.map((menu1,index)=>(
                        <ul>
                            <li key={index}>{menu1}</li>
                        </ul>
                    ))
                }
            </div>
            <div className="foot3">
                <h3 className="title">Get In Touch</h3>
                {
                    menus2.map((menu2,index)=>(
                        <ul>
                            <li key={index}>{menu2}</li>
                        </ul>
                    ))
                }
            </div>
            <div className="foot4">
                <h3 className="title">Basic Info</h3>
                {
                    bInfo.map((contact)=>(
                        <ul className='add'>
                            <li><FaMapLocationDot />  {contact.address}</li>
                            <li><FaPhone />  {contact.phone}</li>
                            <li><FaEnvelope />  {contact.email}</li>
                            <li><FaClock />  {contact.bhrs}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
        <div className="footer-bottom">
            <div className="copy-text">
                <p>Copyright &copy;2023 - All rights reserved. Designed By <a href="http://" target="_blank" rel="noopener noreferrer">Uptech Solutions</a></p>
            </div>
            <div className="foot-social">
                <ul>
                    <li className='footericon'><FaFacebookF/></li>
                    <li className='footericon'><FaInstagram/></li>
                    <li className='footericon'><FaTwitter /></li>
                </ul>
            </div>
        </div>
    </>
  )
}
