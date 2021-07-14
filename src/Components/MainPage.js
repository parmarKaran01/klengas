import React from 'react'
import Navbar from './Navbar'
import CarouselContainer from './carouselContainer'
import Contact from './Contact'
import HeroSection from './HeroSection'
import oilAndGas  from './Industries/oilAndGas'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function MainPage() {
    return (
        <Router>
        <div>
            <Navbar />
            {/* <HeroSection /> */}
            {/* <CarouselContainer /> */}
            {/* <Contact /> */}
            {/* <OilAndGas /> */}

            {/* switch and routing */}
            <Switch>
                    <Route path="/" exact>
                        <HeroSection />
                        <CarouselContainer />
                    </Route>
                    <Route path="/contact" exact>
                        <Contact />
                    </Route>
                    <Route path="/industries" exact>
                        <oilAndGas />
                    </Route>
                    
                </Switch>

            
        </div>
        </Router>
    )
}

export default MainPage
