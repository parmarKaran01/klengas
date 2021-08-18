import React from 'react'
import './Clients.css';
import mainImage from "./../assets/images/oilAndGas.png";
function Clients() {
    return (
        <>
        <img src={mainImage} alt="" className="mainImage" />
        <div className='clients'>
            <h1 className='title'>OUR CLIENTS</h1>
            <div className='company__section'> 
                <h4>AUTOMOBILE INDUSTRIES</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>CHEMICAL INDUSTRIES</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>FOODS AND BEVERAGES</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>OIL & GAS & REFINERIES </h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                </div>
            </div>
            <div className='company__section'> 
                <h4>PHARMACEUTICALS</h4>
                <div className='company__logos'>
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                    <img className = 'ilogo' src = {mainImage} alt =''/> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Clients
