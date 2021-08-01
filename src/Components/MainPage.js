import React from 'react'
import Navbar from './Navbar'
import CarouselContainer from './carouselContainer'
import Contact from './Contact'
import HeroSection from './HeroSection'
import OilAndGas  from './Industries/oilAndGas'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About'
import Footer from './Footer'

function MainPage() {
    return (
        <Router>
        <div>
            <Navbar />
            <Switch>
                    <Route path="/" exact component={merged} />
                    <Route path="/contact"  component ={Contact} />
                    <Route path="/services"  component ={Contact} />
                    <Route path="/industries"  component={OilAndGas} />
                    <Route path="/aboutus"  component={About} />
            </Switch>
            <Footer />
        </div>
        </Router>
    )
}

function merged(){
    return(
        <>
            <CarouselContainer/>
            <HeroSection />
        </>
    )
}

export default MainPage
