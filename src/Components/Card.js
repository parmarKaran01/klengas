import React from 'react'
import './Card.css'

function Card({img,title,content}) {
    return (
        <div className='card__container'>
            <div className='card__body'>
                <img className = 'card__image'src={img} alt = '' />
                <div className='titleAndContent'>
                    <div className='card__title'><h3>{title}</h3></div>
                    <div className='card__content'><p>{content}</p></div>
                    <div className='btn'><button><a>Learn More</a></button></div>
                </div>
            </div>
        </div>
    )
}

export default Card
