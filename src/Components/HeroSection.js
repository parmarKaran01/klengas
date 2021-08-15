import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero">
            <div className="hero__text">
            <p>
          Klengas Tech LLP is an organisation led by techno-commercial personnel
          with technocrats leading from front having combined
          <span style={{ fontWeight: "800" }}>
            {" "}
            professional experience of over 55 years
          </span>{" "}
          in the filtration and separation, processes and equipments across
          industries. Adept in application engineering, project engineering,
          execution, installation and commissioning and applications
          development. Lead and guide teams to support across geographies by
          providing innovative solutions in various industries segments.
        </p>
        <p>
          We are serving across the industries. Just to illustrate few examples:
        </p>
        <p>We are engaged in following services:</p>
        <ol className="list2">
          <li>
            Suggesting solutions to Existing Filtration and Separation related
            problems
          </li>
          <li>
            Suggesting New and appropriate Filtration and Separation Solutions
          </li>
          <li>
            Carrying out Filtration related Surveys and Health Check-ups of
            Filtration Systems
          </li>
        </ol>

            </div>
            <div className="hero__images">
                <img 
                    className="images"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU" 
                    alt="" 
                />

                <img 
                    className="images"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWwLjE_AGnuaQaA22UdvJtRF-Ny5YN4Q5IQ&usqp=CAU" 
                    alt="" 
                />

                <img 
                    className="images"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPMJoPOtQ0unTfgMiMJjEQEGFY2ITssffLg&usqp=CAU" 
                    alt="" 
                />

                <img 
                    className="images"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWwLjE_AGnuaQaA22UdvJtRF-Ny5YN4Q5IQ&usqp=CAU" 
                    alt="" 
                />

            </div>
            
        </div>
    )
}

export default HeroSection
