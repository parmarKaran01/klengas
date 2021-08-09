import React from 'react'
import './Card.css'

function Card({title,content}) {
    return (
        <div className='card__container'>
            <div className='card__body'>
                <div className='card__title'><h1>{title}</h1></div>
                <div className='card__content'><p>{content}</p></div>
                <div className='btn'><button><a>Learn More</a></button></div>
            </div>
        </div>
    )
}

export default Card
