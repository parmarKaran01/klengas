import React from 'react'
import Form from './Form'
import image1 from './../assets/images/contactImage.png';
import './Contact.css'
// import Map from "./Map"

function Contact() {
    return (
        <div className = "contact">
            <img src = {image1} alt = "" className="contactImage" />
            <div className='form'>
                <div className="contact__content"> 
                    <h2>Get in Touch</h2>
                    <p> some content</p>
                    {/* <Map /> */}
                </div>
                <div className='contact__form'> 
                    <Form />
                    <input type="checkbox" /><span className='checkbox'> I accept that the data submitted will be used to contact me for the business intended. I understand and agree to the PRIVACY POLICY</span>
                    <p></p>
                    <button className='submit__btn'>SUBMIT</button>
                </div>   
            </div>
        </div>
    )
}

export default Contact
