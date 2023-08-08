import React from 'react'
import './Contact.css'
import ContactBanner from '../../assets/images/contactImg.jpg'

export default function Contact(props) {
    const {title} = props
    const areas = ['LaPorte Counties','Porter Counties','Michigan City','Michigan']
    const contactDetails = [
        {
            address: 'Laporte.IN 46350',
            phone: '(123) 123-1234',
            bhrs: 'Mon-Fri: 9 am-5 pm',
            email: 'yourbusiness@business.com'
        }
    ]
  return (
    <>
        <div className="contact-container">
            <div className="contact-top" style={{backgroundImage: `linear-gradient(to bottom,rgba(37, 90, 156, 0.9), rgba( 255, 255, 255, 0.5)),url(${ContactBanner})`}}>
                <div className="contacttop-details">
                    <p className='contact-title'>
                        {title}
                    </p>
                    <h1>Request A Quote Today</h1>
                    <p>please contact us with all your water needs. We look forward to serving you.</p>
                    
                </div>                
            </div>
            <div className="contactinfo">
                <div className="contact-form">
                    <form>
                        <p className='main-title'>Request A Free Quote</p>
                        <input type="text" name="name" id="name" placeholder='Full Name' />
                        <input type="email" name="email" id="email" placeholder='Email Address' />
                        <input type="tel" name="contact" id="contact" placeholder='Contact Number' />
                        <input type="text" name="servicetitle" id="servicetitle" placeholder='Service title' />
                        <textarea name="description" id="description" cols="20" rows="6" placeholder='Service Description'></textarea>
                        <button type="submit">Send Request</button>
                    </form>
                </div>
                <div className="contact-details">
                    <p className='first'>Visit Our Office</p>
                    <h1>Our Main Office</h1>
                    <p className='second'>You are welcome to visit our office during office hour. Find details of our location and business hours below.</p>
                    <hr width="30%"/>
                    {
                        contactDetails.map((contact)=>{
                            return(
                                <ul className='add'>
                                    <li>Address: {contact.address}</li>
                                    <li>Phone: {contact.phone}</li>
                                    <li>Business Hours: {contact.bhrs}</li>
                                    <li>Email Address: {contact.email}</li>
                                </ul>
                            )
                        })
                    }
                    <p className='third'>Area Covered</p>
                    <ul className='arealist'>
                        {areas.map((area, index) => (
                        <li key={index}>{area}</li>
                        ))}
                    </ul>
                    
                </div>
            </div>            
        </div>
    </>
  )
}
