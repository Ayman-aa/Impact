import React from 'react'
import Header from '../Partials/Header/Header'
import HeroSection from '../Partials/HeroSection/HeroSection'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            <Header />
            <HeroSection />

        </div>
    )
}

export default Home
