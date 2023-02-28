import React from "react";
import '../style.css'
import twitter from '../images/twitter.png'
import fb from '../images/fb.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

function Footer()
{   
    return(
        <div className="footer-container">
            <a target="_blank" href="https://www.google.co.in/"><img src={twitter} alt="twitter" className="twitter"></img></a>
            <a target="_blank" href="https://www.google.co.in/"><img src={fb} alt="fb" className="fb"></img></a>
            <a target="_blank" href="https://www.google.co.in/"><img src={instagram} alt="instagram" className="instagram"></img></a>
            <a target="_blank" href="https://www.google.co.in/"><img src={github} alt="github" className="github"></img></a>
        </div>
    )
}

export default Footer