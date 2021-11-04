import React from "react";
import LandingCard from "../components/UI/Cards/LandingCard";
import IntroPage from "../components/IntroPage/intro";
import TeamsSection from "../components/TeamsSection/TeamSection";
import Carousel from "../components/Carousel/Carousel";
import members from "../helpers/members";

const Home = () => {
  return (
    <>
      <LandingCard />
      <IntroPage />
      <TeamsSection />
      <div className="carousel-section" id="leads">
        <Carousel CarouselData={members} />
      </div>
    </>
  );
};

export default Home;
