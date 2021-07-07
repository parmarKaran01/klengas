import React from 'react'
import './Form.css'
function Form() {
    return (
        <div className='main'>

            <h6>First Name:</h6>
            <input type='text' className='input'></input>
            <h6>Last Name:</h6>
            <input type='text' className='input'></input>
            <h6>Job Title:</h6>
            <input type='text' className='input'></input>
            <h6>Email Address:</h6>
            <input type='text' className='input'></input>
            <h6>Phone Number:</h6>
            <input type='text' className='input'></input>
            <h6>Company Name:</h6>
            <input type='text' className='input'></input>
            <h6>Industry:</h6>
            <select className='selector' >
                <option>Hello1</option>
                <option>Hello2</option>
            </select>
            <h6>Country:</h6>
            <select className='selector' >
                <option>Hello1</option>
                <option>Hello2</option>
            </select>
            <h6>What can we help you with today?</h6>
            <select className='selector' >
                <option>Hello1</option>
                <option>Hello2</option>
            </select>

            <h6>Comments:</h6>
            <input type='text' className='input'></input>

        </div>
    )
}

export default Form
