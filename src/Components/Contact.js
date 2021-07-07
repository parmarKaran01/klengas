import React from 'react'
import Form from './Form'
import image1 from './../assets/images/contactImage.png';
import './Contact.css'

function Contact() {
    return (
        <div className = "contact">
            <img src = {image1} alt = "" className="contactImage" />
            <div className='form'>
                <div className="contact__content"> 
                    <h2>Get in Touch</h2>
                    <p>Contact Jonell Systems today if you have a filtration application or filtration question!

                    <p> Jonell Systems delivers innovative solutions to address end-to-end filtration challenges for the energy market. Our solutions improve safety, reliability, productivity and ultimately, your profitability. </p>

                    <p>    A part of the world’s fastest growing filtration solutions company, Filtration Group, we are dedicated to making the world safer, healthier and more productive®.
                    </p>
                    <p>
                        Find out more about our:
                    </p>

                    <h5>FILTRATION HOUSINGS</h5>    
                    <h5>FILTRATION CARTRIDGES</h5>            
                    <p>
                        Get in touch with us to learn more about how we can partner with you to solve your filtration challenges.
                    </p>
                        The quickest way to get a response is by filling out the form on the right for us to direct your request.
                    <p>
                        Call: 1-844-GO FILTR | 1-844-463-4587
                    </p>
                    </p>
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
