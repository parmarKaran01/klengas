import React, { useState } from 'react'
import './Form.css'
function Form() {
    const[other,setOther] = useState(false);
    function handler(value){
        if(value === 'other'){
            setOther(!other)
        }
    }
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
            <select className='selector' onChange={(e) => handler(e.target.value)} >
                <option>Oil and Gas</option>
                <option>Chemical</option>
                <option>Refining</option>
                <option>Petrochemical</option>
                <option>Industrial</option>
                <option>Food and Bevarage</option>
                <option value='other'>Others</option>
            </select>
            {other ? <input type='text' className='input' placeholder='Other'></input> : ""}
            <h6>Country:</h6>
            <input type='text' className='input'></input>
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
