import React from 'react'
import './Service.css'
import {FaArrowRightLong} from 'react-icons/fa6'

export default function Service(props) {
    const {title} = props
    let serviceList = [
        {      
            title: "Plumbing",
            description: `Business Name emplys access to an exclusive team of certified plumbing services \
                               available at cost-efficient pricing. `,
            
        
        },
        {
            title: "Water Treatment",
            description: `Business Name offers a wide variety of water treatment service. We specialize \
                               in clean water for quality business, including the installation, repair, \
                               and maintenance of water softeners, purifiers, and more.`,

        },
        {
            title: "Commercial Property Maintenance",
            description: `No matter what type of business you run, its exterior appearance is just as\
                            important as that of the interior. Business Name proud to offer commercial property\
                            maintenance for your business. We focus on the fastest and safest execution of the project\
                            with a clear cost and benefit solution.`,
            
        },
        {
            title: "Prevention Maintenance",
            description: `Our Prevention Maintenance programs are designed to make you stand out from your competitors.\
                            Our Handyman Programs ensure your facilities are kept up to the standards you expect.\
                            This program often discovers problems earlier so that repairs cost less. As a result, you\
                            save time and money.`,
           
        },
    ]
    
  return (
    <>
        <div className="service-container" id='service'>
            
            <div className="service-content">
                <p className="service-title">
                {title}
                </p>                
                <h1>Our Services</h1>
                <p>No job is too big or too small for the crew at Your Business Name LLC</p>
                <div className="service-items">
                    {
                       serviceList.map((service,index)=> {
                        return(
                            <>
                                <li key={index} className="service-item">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>   
                                    <a href="/">View Details <FaArrowRightLong /></a>                             
                                </li>
                            
                            </>
                        )
                            
                        })
                    }
                    
                </div>
            
            </div>
        </div>
    
    </>
    
  )
}
