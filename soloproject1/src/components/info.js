import React from "react";
import '../style.css'
import profile from '../images/profile.jpg'
import email from '../images/email.png'
import linkedin from '../images/linkedin.png'

function Info()
{   
    return(
        <div className="info-container">
            
            <img src={profile} alt="profile"></img>
            <h2>Lara Croft</h2>
            <p>Frontend Developer</p>
            <p>laracr.website</p>
            
            <div className="info-container-buttons-space">

                <button className="info-container-button1">
                    <a target="_blank" href="https://www.google.co.in/"><img src={email} className="email"></img></a>
                    <p>Email</p>
                </button>

                <button className="info-container-button2">
                    <a target="_blank" href="https://www.google.co.in/"><img src={linkedin} className="linkedin"></img></a>
                    <p>linkedIn</p>
                </button>
            
            </div>

        </div>
    )
}

export default Info