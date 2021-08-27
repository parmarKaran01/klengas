import React from 'react'
import mainImage from "./../../assets/images/oilAndGas.png";
import './oilAndGas.css'
import Card from '../Card'
function PowerGeneration() {
    return (
        <div className='oil__and__gas'>
        <img src={mainImage} alt="" className="mainImage" />
        <div className='gray'>
            <div className='content'>
                <p>CONTENT (PENDING FROM CLIENT)</p>
            </div>
            <h3 className="application">APPLICATIONS</h3>
            <h6 className="application ong">Power Generation</h6>
            <div className='applications'>
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
                <Card img={mainImage} title='' content = '' />
            </div>
        </div>
        </div>
    )
}

export default PowerGeneration
