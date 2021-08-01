import React, { useState } from 'react'
import './Form.css'
function Form() {
    const[other,setOther] = useState(false);
    function handler(value){
        if(value === 'other'){
            setOther(!other)
        }else{
            setOther(false)
        }
    }
    return (
        <div className='main'>

            <h6>Full Name:</h6>
            <input type='text' className='input'></input>
            <h6>Email Address:</h6>
            <input type='text' className='input'></input>
            <h6>Phone Number:</h6>
            <input type='text' className='input'></input>
            <h6>Company Name:</h6>
            <input type='text' className='input'></input>
            <h6>Industry:</h6>
            <select className='selector' onChange={(e) => handler(e.target.value)} >
                <option value='Oil and Gas'>Oil and Gas</option>
                <option value='Chemical'>Chemical</option>
                <option value='Refining'>Refining</option>
                <option value='Petrochemical'>Petrochemical</option>
                <option value='Industrial'>Industrial</option>
                <option value='Food and Beverages'>Food and Bevarage</option>
                <option value='other'>Others</option>
            </select>
            {other ? <input type='text' className='input' placeholder='Other'></input> : ""}
            <h6>Country:</h6>
            <input type='text' className='input'></input>
            <h6>What can we help you with today?</h6>
            <input type='text' className='input'></input>

        </div>
    )
}

export default Form
