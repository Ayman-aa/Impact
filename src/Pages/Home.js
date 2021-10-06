import React from 'react'
import Header from '../Partials/Header/Header'
import HeroSection from '../Partials/HeroSection/HeroSection'
import SecondSection from '../Partials/Second Section/SecondSection'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            <Header />
            <HeroSection />
            <SecondSection />

        </div>
    )
}

export default Home
