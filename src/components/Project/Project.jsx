import React from 'react'
import prjImg1 from "../../assets/images/p4.jpg"
import prjImg2 from "../../assets/images/prjImg3.jpg"
import prjImg3 from "../../assets/images/p6.jpg"
import prjImg4 from "../../assets/images/p7.jpg"
import './Project.css'

export default function Project(props) {
    const {title} = props
    let projectList = [
        {      
            title: "Project Title 01",
            date: "Jan 15, 2020",
            bgImg: prjImg1
            
        
        },
        {
            title: "Project Title 02",
            date: "Jan 15, 2020",
            bgImg: prjImg2
        },
        {
            title: "Project Title 03",
            date: "Jan 15, 2020",
            bgImg: prjImg3      
        },
        {
            title: "Project Title 04",
            date: "Jan 15, 2020",
            bgImg: prjImg4
        },
    ]
    
  return (
    <>
        <div className="project-container" id='project'>            
            <div className="project-content">
                <p className="project-title">
                {title}
                </p>                
                <h1>Featured Projects</h1>
                <p>Some of the projects Business Name repaired.</p>
                <div className="project-items">
                    {
                       projectList.map((project,index)=> {
                        return(
                            <a href="href" key={index}>
                                <li  
                                className="project-item" 
                                style={{ backgroundImage: `linear-gradient(rgba(66, 115, 193, 0.8), rgba( 66, 115, 193, 0.8)),url(${project.bgImg})` }}
                                >
                                    <div className="details">
                                        <h3>{project.title}</h3>
                                        <p>{project.date}</p>  
                                    </div>
                                                                
                                </li>
                            </a>                            
                        )
                            
                        })
                    }
                </div>
            
            </div>
        </div>
    
    </>
    
  )
}

