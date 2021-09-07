import React from 'react'
import LandingCard from '../components/UI/Cards/LandingCard'
import LandingSection from '../components/LandingSection/LandingSection'
import TeamsSection from '../components/TeamsSection/TeamSection'
import CarouselSection from '../components/Carousel/CarouselSection'

const Home = () => {
    return (
        <>
        <LandingCard />
        <LandingSection />
        <TeamsSection />
        <CarouselSection />
        </>
    )
}

export default Home
