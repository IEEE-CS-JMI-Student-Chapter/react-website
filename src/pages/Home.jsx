import React from "react";
import LandingCard from "../components/UI/Cards/LandingCard";
import TeamsSection from "../components/TeamsSection/TeamSection";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/footer";

const CarouselData = [
  {
    image: "/assets/teamMembers/SARFARAZ.jpg",
    title: "Vice President",
    name: "Sarfaraz",
    text: "It gives me immense pleasure to be a part of IEEE CS in its reviving years, providing me with the opportunity to lay a strong foundation on the path to achieve and create a concrete  University.",
  },
  {
    image: "/assets/teamMembers/SARA.jpg",
    title: "President",
    name: "Sara",
    text: "It gives me immenseimm enseimmenseimm enseimmense pleasure to be a part of IEEE CS in its reviving years, providing me with the opportunity to lay a strong foundation on the path to achieve and create a concrete University.",
  }, 
  {
    image: "/assets/teamMembers/SARFARAZ.jpg",
    title: "Prime Minister",
    name: "Sarfaraz",
    text: "It gives pleasure  in its reviving years, providing me with the opportunity to lay a strong foundation on the path to achieve and create a concrete University.",
  },
  {
    image: "/assets/teamMembers/SARA.jpg",
    title: "Defence Minister",
    name: "Sara",
    text: "It gives me immense pleasure to b pleasure to b pleasure to be a part of IEEE CS in its reviving years, providing me with the opportunity to lay a strong foundation on the path to achieve and create a concrete University.",
  },
];
const Home = () => {
  return (
    <>
      <LandingCard />
      <TeamsSection />
      <div className="carousel-section" id="leads">
        <Carousel CarouselData={CarouselData} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
