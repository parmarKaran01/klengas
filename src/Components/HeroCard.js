import React from 'react'
import './HeroCard.css'

function HeroCard({img, title, content}) {
    return (
        <div className='main__card'>
            <img className='card__img' src = {img} alt='' />
            <h4 className='card__title'>{title}</h4>
            <p className='card__content'>{content}</p>
            <div className='btn'> <button className='card__button'>Learn More</button> </div>
        </div>
    )
}

export default HeroCard