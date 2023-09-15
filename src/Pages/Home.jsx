import React from 'react'
import Navbar from "../Layout/Navbar"
import Shaping from '../Layout/Shaping' // Mise en page 100px à droite & gauche
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Cards from '../Components/Cards'

import "../Styles/home.css"

function Home() {
    return (
        <div role="main">
            <Shaping>
                <Navbar />
                <Banner>
                    <div className="banner-home banner-container">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Cards />
            </Shaping>
            <Footer />
        </div>
    )
}

export default Home