import React from 'react'
import Navbar from './Navbar'
import CarouselContainer from './carouselContainer'
import Contact from './Contact'
import HeroSection from './HeroSection'
import OilAndGas  from './Industries/oilAndGas'

function MainPage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CarouselContainer />
            <Contact />
            <OilAndGas />
        </div>
    )
}

export default MainPage
