import React from "react";
import classes from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselRrc, Thumbs } from "react-responsive-carousel";
const Carousel = (props) => {
  const options = {
    autoPlay: false,
    emulateTouch: true,
    infiniteLoop: true,
    showStatus: false,
    renderArrowPrev: (onClickHandler, hasPrev, label) => (
      <button className={`${classes["arrow"]} ${classes["arrow-prev"]}`} onClick={onClickHandler}>
      <i className="fas fa-chevron-left"></i>
      </button>
    ),
    renderArrowNext: (onClickHandler, hasNext, label) => (
      <button className={`${classes["arrow"]} ${classes["arrow-next"]}`} onClick={onClickHandler}>
       <i className="fas fa-chevron-right"></i>
      </button>
    ),
    renderIndicator: (onClickHandler, isSelected, label) => (<div className={`${classes["indicator"]} ${isSelected ? classes["indicator-selected"] : ""}`} onClick={onClickHandler}></div>),
  };

  return (
    <>
      <CarouselRrc {...options} className={classes.carousel}>
        {props.CarouselData.map((item, index) => (
          <div key={index} className={classes["item-container"]}>
            <div className={classes["image-section"]}>
              <img alt={item.name} src={item.image} />
              <span>{item.name}</span>
            </div>
            <div className={classes["carousel-text"]}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </CarouselRrc>
    </>
  );
};

export default Carousel;
