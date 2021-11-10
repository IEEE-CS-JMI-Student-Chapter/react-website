import React from "react";
import LandingCard from "../components/UI/Cards/LandingCard";
import IntroPage from "../components/IntroPage/intro";
// import TeamsSection from "../components/TeamsSection/TeamSection";
// import Carousel from "../components/Carousel/Carousel";
import OurTeam from "../components/OurTeam/OurTeam.js"


const Home = () => {
  return (
    <>
      <LandingCard />
      <IntroPage />
      <OurTeam />
      {/* <TeamsSection /> */}
      {/* <div className="carousel-section" id="leads">
        {/* <Carousel CarouselData={CarouselData} /> */}
    </>
  );
};

export default Home;
