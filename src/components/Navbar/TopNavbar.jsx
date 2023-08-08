import React from 'react'
import {FaInstagram,FaLinkedinIn, FaWhatsapp} from 'react-icons/fa6'
import './TopNavbar.css'

export default function TopNavbar() {
  return (
    <>
    <div className="topmenu">
        <div className="top">
            <p className="date-time">Mon-Fri: 9AM - 5PM</p>
            <p className="email">yourbusiness@business.com</p>
        </div>
        <div className="social">
          <ul>
            <li><FaInstagram /></li>
            <li><FaLinkedinIn /></li>
            <li><FaWhatsapp /></li>
          </ul>
        </div>
    </div>
    </>
  )
}
