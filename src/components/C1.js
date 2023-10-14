import React from 'react';
import './style.css';
import image from './img.jpg';

function C1()
{
    return(
        <div className="portfolio">
            <div className="mainInfo">
                <div className="about">
                    <h1>Hello, I'm Siddharth</h1>
                    <h2 style={{color:"aqua"}}>A Web Development Enthusiast</h2>
                    <div>
                        <p>
                            I am a UG student at VIT AP proficient in Java and Python, as well as
                            <br/>
                            front-end web technologies including HTML, CSS, Bootstrap, and JavaScript.
                            <br/>
                            With a fundamental understanding of the MERN (MongoDB, Express, React, Node.js) stack,
                            <br/>
                            I am eager to further expand my skills and delve into the world of full-stack development.
                        </p>

                    </div>
                </div>
                <div className="pic">
                    <img src={image} alt="profile"/>
                </div> 
            </div>  
            <div className="info">
                <div className="project">
                    <h2>Project</h2>
                    <h4>React JS project containing 6 Tasks</h4>
                    <p>
                        During my React JS learning journey,
                        I successfully completed six tasks, 
                        including a responsive Word Counter, a functional Calculator,
                        an interactive Color Picker, an Age Calculator,
                        data fetching and table presentation from a JSON file, 
                        and the portfolio website you're currently exploring. 
                        These tasks enriched my React JS skills and expanded my front-end development knowledge.
                        The project is available in my Github repository.
                    </p>
                    
                </div>
                <div className="contact">
                    <h2>Contact Details</h2>
                    <p>Phone no. - +916300206976 </p>
                    <p>Work Email - siddharth.21bce7284@vitapstudent.ac.in </p>
                    <p>Personal Email - siddharthsutharan@gmail.com</p>
                    <p style={{paddingTop:"20px"}}>
                        <a href="https://github.com/WexDhav" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-github fa-2x" style={{color:"aqua"}}></i>
                        </a>                        
                        <a href="mailto:siddharth.21bce7284@vitapstudent.ac.in" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-google fa-2x" style={{paddingLeft:"50px",color:"aqua"}}></i>
                        </a>  
                        <a href="tel:+916300206976" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-phone fa-2x" style={{paddingLeft:"50px",color:"aqua"}}></i>
                        </a>                                    
                    </p>                    
                </div>         
            </div>
        </div>
    )
}
export default C1;