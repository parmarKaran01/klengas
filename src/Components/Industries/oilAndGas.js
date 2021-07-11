import React from 'react'
import mainImage from './../../assets/images/oilAndGas.png';
import './oilAndGas.css'

function oilAndGas() {
    return (
        <div className='oil__and__gas'>
            <img src ={mainImage} alt='' className='mainImage' />          
            <div className='content'>
                <h2>Filtration and Separation Solutions for Oil & Gas</h2>
                <p style={{fontStyle : 'italic'}}>Minimize maintenance downtime, extend equipment life and save costs with high-performance oil & gas filtration and separation solutions. </p>
                <p>High quality, efficient and safe  are critical for Oil & Gas companies. That’s why our engineers have developed filtration and separation solutions that are not only cost-effective but meet the most demanding production and processing needs. </p>
                <h4 style={{marginBottom : '5vh', fontWeight:'700'}}>Benefits of KlenGas Systems Filtration Solutions</h4>
                <div className = 'benefits'>
                    <h6>Engineered to meet demanding processing needs</h6>
                    <p>With thousands of different filter elements for a wide variety of filtration applications and a full line of housings including cyclones, filter separators, particulate filters and coalescers, you can be confident that we have the right solution to maintain and enhance your operational performance. </p>
                    <p>To meet the most demanding gas and petroleum applications, filter elements are available in a wide variety of materials including Polyester, Polypropylene, Cotton, Nylon, Teflon®, Nomex®, Metals, Micro-fiberglass, Resin-bonded cellulose.</p>
                </div>
                <div className = 'benefits'>
                    <h6>Maximize operating efficiency and performance</h6>
                    <p>We partner with you to maximize efficiencies and improve maintenance operations with our custom-designed high-performance oil & gas filtration solutions for the production, processing, transportation, refining and storage of the entire gas and liquid hydrocarbon value chain within the industry.</p>
                </div>
                <div className = 'benefits'>
                    <h6>Reduce downtime with rapid filter replacement</h6>
                    <p>As a one-source supplier for all your filtration and separation needs, Jonell Systems can quickly replace over 40,000 OEM cartridge part numbers to ensure your operations run smoothly.</p>
                </div>
                <div className = 'benefits'>
                    <h6>Extend the life of capital equipment</h6>
                    <p>Contaminants can cause long-term damage to equipment, such as turbines and compressors, which leads to expensive maintenance and compromises process performance. Our filtration solutions are designed to maximize contaminant removal and separation to lower the risk of equipment failure and ultimately extend the life of equipment. It also eliminates the costs of unscheduled maintenance and downtime.</p>
                </div>
                <div className = 'benefits'>
                    <h6>Meet environmental safety regulations</h6>
                    <p>To meet the most demanding gas and petroleum applications, filter elements are available in a wide variety of materials including Polyester, Polypropylene, Cotton, Nylon, Teflon®, Nomex®, Metals, Micro-fiberglass, Resin-bonded cellulose.</p>
                </div>
            </div>
        </div>
    )
}

export default oilAndGas
